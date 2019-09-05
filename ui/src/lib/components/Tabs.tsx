import { Tabs as AntTabs } from 'antd';
import styled, { StyledComponentBase } from 'styled-components';

// Styled version of TabPane.
const TabPane = styled(AntTabs.TabPane)``;

// Our exported styled component version of AntTabs will need to have a reference to the styled
// component version of TabPane.
// There is a type swap here, this makes typescript happy (Antd.Tabs.TabPane => TabPane).
// This is fine, since consumers will use the styled version and 'ref' grabs the inner component.
class VarnishTabs extends AntTabs {
    static TabPane = TabPane as any;
}

// AntTabs has static properties, but they are lost when converting to a styled component.
// This interface tells typescript about the styled component version of the statics.
interface WithStaticProps extends StyledComponentBase<typeof AntTabs, any, {}, never> {
    TabPane: typeof TabPane;
}

// Finally, we export our styled Tab, and tell typescript its a WithStaticProps.
export const Tabs = styled(VarnishTabs).attrs((props) => ({
    animated: false
}))`
    &,
    .ant-tabs-nav-container {
        font-size: inherit;
    }

    && .ant-tabs-tabpane {
        transition: none;
    }
` as any as WithStaticProps;
