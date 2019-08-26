import * as React from 'react';
import styled from 'styled-components';
import { Table as AntTable } from 'antd';
import { ColumnProps, TableProps as AntTableProps, TableState as AntTableState } from 'antd/lib/table';

import { Button, Icon, Columns, Input } from '../components';

// export Ants as a convenience
export interface TableProps<T> extends AntTableProps<T>{};
export interface TableState<T> extends AntTableState<T>{};

// varnish extension of table column props, add more items here as needed
export interface TableColumnProps<T> extends ColumnProps<T> {
    filterFunc?: (value: string, record: T) => boolean;
}

interface State {
    searchText?: string;
}

interface Props<T> extends TableProps<T> {
    columns: TableColumnProps<T>[];
}

interface FilterDropdownArgs {
    setSelectedKeys: (val: string[]) => void;
    selectedKeys: string[];
    confirm: () => void;
    clearFilters: () => void;
}

export class Table<T> extends React.PureComponent<Props<T>, State> {
    searchInput: any; // todo: this is a ref, but connecting it fails if i type it

    static IncludesFilter <T>(dataFunc: (record: T) => string) {
        return (value: string, record: T): boolean => {
            return dataFunc(record).toString().toLowerCase().includes(value.toLowerCase())
        }
    }

    constructor(props: Props<T>) {
        super(props)

        this.state = {
            searchText: '',
        };
    }

    getColumnSearchProps = (filterFunc: (value: string, record: T) => boolean) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownArgs) => (
            <DropWrap>
                <DropDown gridTemplateColumns={"1fr 1fr"}>
                    <InputArea
                        ref={node => { this.searchInput = node; }}
                        placeholder={'Search'}
                        value={selectedKeys[0]}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => this.handleSearch(selectedKeys, confirm)} />
                    <Button
                        variant="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm)}
                        icon="search">
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)}>
                        Reset
                    </Button>
                </DropDown>
            </DropWrap>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchIcon filtered={filtered} type="search" />
        ),
        onFilter: filterFunc,
        onFilterDropdownVisibleChange: (visible: boolean) => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        }
    });

    handleSearch = (selectedKeys: string[], confirm: ()=>void) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = (clearFilters: () => void) => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        const columns: TableColumnProps<T>[] = this.props.columns.map((c) => {
            if(c.filterFunc ){
                return {...c, ...this.getColumnSearchProps(c.filterFunc) };
            }
            return c;
        });

        return (
            <StyledTable {...this.props} columns={columns}/>
        )
    }
}

// Needed in order to correctly pass typing info to the any table in typescript
// https://github.com/styled-components/styled-components/issues/1803
const StyledTable = styled(AntTable)`
    background-color: ${props => props.theme.palette.background.light};
    border: 1px solid ${props => props.theme.palette.border.main};
    border-radius: 4px;
` as React.ComponentType as new <T>() => AntTable<T>;

const SearchIcon = styled(Icon)<{filtered: boolean}>`
    &&& {
        color: ${({theme, filtered}) => filtered ? theme.palette.primary.main : undefined}
    }
`;

const DropWrap = styled.div`
    width: 14rem;
`;

const DropDown = styled(Columns)`
    padding: ${({theme}) => theme.spacing.sm};
    grid-gap: ${({theme}) => theme.spacing.sm};
`;

const InputArea = styled(Input)`
    grid-column: 1 / span 2;
`;
