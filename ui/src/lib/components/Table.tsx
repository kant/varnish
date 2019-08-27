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
    textFilterFunc?: (value: string, record: T) => boolean;
}

interface State {
  searchInputRef: React.RefObject<any>;
}


interface Props<T> extends TableProps<T> {
    columns: TableColumnProps<T>[];
}

// filterdropdown is an overrideable react component with the following props
interface FilterDropdownProps {
    setSelectedKeys: (val: string[]) => void;
    // selected keys is an array of values that can be used to do multi value filtering
    // in our case below, we just use the first value, selectedKeys: ["car"]
    // but you could imagine allowing filtering on > or < and a number: selectedKeys: [">", "5"]
    selectedKeys: string[];
    confirm: () => void;
    clearFilters: () => void;
}

export class Table<T> extends React.PureComponent<Props<T>, State> {
    constructor(props: Props<T>) {
        super(props);

        this.state= {
          searchInputRef: React.createRef()
      }
    }

    getColumnSearchProps = (textFilterFunc: (value: string, record: T) => boolean) => ({
        // filterdropdown has access to selectedKeys array, so multip values could be set.
        // however, in our case, we st use the first value in the single input
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps) => (
            <DropWrap>
                <DropDown gridTemplateColumns={"1fr 1fr"}>
                    <InputArea
                        ref={this.state.searchInputRef}
                        placeholder={'Search'}
                        value={selectedKeys[0]}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={confirm} />
                    <Button
                        variant="primary"
                        onClick={confirm}
                        icon="search">
                        Search
                    </Button>
                    <Button onClick={clearFilters}>
                        Reset
                    </Button>
                </DropDown>
            </DropWrap>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchIcon filtered={filtered} type="search" />
        ),
        onFilter: textFilterFunc,
        onFilterDropdownVisibleChange: (visible: boolean) => {
            if (visible) {
                const searchInput = this.state.searchInputRef.current;
                // move cursor to input after component opens
                setTimeout(() => searchInput && searchInput.select());
            }
        }
    });

    render() {
        const columns: TableColumnProps<T>[] = this.props.columns.map((c) => {
            // for each column, if the user has specified a filterFunc, then we want to add
            // additional columns attributes (from getColumnSearchProps)
            if(c.textFilterFunc ){
                return {...c, ...this.getColumnSearchProps(c.textFilterFunc) };
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
