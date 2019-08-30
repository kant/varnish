import { Tabs as AntTabs } from 'antd';
import styled from 'styled-components';

export const TabVarnish = styled(AntTabs).attrs({ animated: false })`
    &,
    .ant-tabs-nav-container {
        font-size: inherit;
    }

    && .ant-tabs-tabpane {
        transition: none;
    }
`;

export class Tabs extends AntTabs  {
    static Varnish = TabVarnish;
};
