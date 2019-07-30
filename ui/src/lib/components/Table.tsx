import styled from 'styled-components';
import { Table as AntTable } from 'antd';

export const Table = styled(AntTable)`
  background-color: ${props => props.theme.palette.background.light};
  border: 1px solid ${props => props.theme.palette.border.main};
  border-radius: 4px;
`;
