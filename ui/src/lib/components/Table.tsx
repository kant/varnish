import * as React from 'react';
import styled from 'styled-components';
import { Table as AntTable } from 'antd';
import { ColumnProps, TableProps as AntTableProps, TableState as AntTableState } from 'antd/lib/table';

// export Ants as a convenience
export interface TableColumnProps<T> extends ColumnProps<T>{};
export interface TableProps<T> extends AntTableProps<T>{};
export interface TableState<T> extends AntTableState<T>{};

// Needed in order to correctly pass typing info to the any table in typescript
// See the demo app for usage
export class Table<T> extends React.PureComponent<TableProps<T>, TableState<T>> {
    render() {
        return (
            <StyledTable {...this.props} />
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
