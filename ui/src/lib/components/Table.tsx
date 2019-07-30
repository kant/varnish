import styled from 'styled-components';
import { Table as AntTable } from 'antd';

export const Table = styled(AntTable)`
  background-color: ${props => props.theme.color.N1.hex};
  border: 1px solid ${props => props.theme.color.N4.hex};
  border-radius: 4px;
`;
