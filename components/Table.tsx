import * as React from 'react';
import styled from 'styled-components';
import { Table as AntTable } from 'antd';
import {
    ColumnProps,
    TableProps as AntTableProps,
    TableState as AntTableState
} from 'antd/lib/table';

import { Button, Icon, Columns, Input } from '../components';

// export Ants as a convenience
export interface TableColumnProps<T> extends ColumnProps<T> {}
export interface TableProps<T> extends AntTableProps<T> {}
export interface TableState<T> extends AntTableState<T> {}

// Needed in order to correctly pass typing info to the any table in typescript
// See the demo app for usage
export class Table<T> extends React.PureComponent<TableProps<T>, TableState<T>> {
    render() {
        return <StyledTable {...this.props} />;
    }
}

interface BasicDropdownProps {
    setSelectedKeys: (val: string[]) => void;
    // selected keys is an array of values that can be used to do multi value filtering
    // in our case below, we just use the first value, selectedKeys: ["car"]
    // but you could imagine allowing filtering on > or < and a number: selectedKeys: [">", "5"]
    selectedKeys: string[];
    confirm: () => void;
    clearFilters: () => void;
}
export const BasicFilterDropdown = ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters
}: BasicDropdownProps) => (
    <DropWrap>
        <DropDown gridTemplateColumns={'1fr 1fr'}>
            <InputArea
                placeholder={'Search'}
                value={selectedKeys[0]}
                onChange={(e: any) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={confirm}
            />
            <Button variant="primary" onClick={confirm} icon="search">
                Search
            </Button>
            <Button onClick={clearFilters}>Reset</Button>
        </DropDown>
    </DropWrap>
);

export const FilterIcon = (filtered: boolean) => <SearchIcon filtered={filtered} type="search" />;

// Needed in order to correctly pass typing info to the any table in typescript
// https://github.com/styled-components/styled-components/issues/1803
const StyledTable = (styled(AntTable)`
    background-color: ${props => props.theme.palette.background.light};
    border: 1px solid ${props => props.theme.palette.border.main};
    border-radius: 4px;
` as React.ComponentType) as new <T>() => AntTable<T>;

const SearchIcon = styled(Icon)<{ filtered: boolean }>`
    &&& {
        color: ${({ theme, filtered }) => (filtered ? theme.palette.primary.main : undefined)};
    }
`;

const DropWrap = styled.div`
    width: 14rem;
`;

const DropDown = styled(Columns)`
    padding: ${({ theme }) => theme.spacing.sm};
    grid-gap: ${({ theme }) => theme.spacing.sm};
`;

const InputArea = styled(Input)`
    grid-column: 1 / span 2;
`;
