import { Tabs as AntTabs } from 'antd';
import styled, { StyledComponentBase } from 'styled-components';

// Styled version of TabPane.
const StyledTabPane = styled(AntTabs.TabPane)``;

// Our exported styled component version of AntTabs will need to have a reference to the styled
// component version of TabPane.
// There is a type swap here, this makes typescript happy (Antd.Tabs.TabPane => TabPane).
// This is fine, since consumers will use the styled version and 'ref' grabs the inner component.
class VarnishTabs extends AntTabs {
    static TabPane = StyledTabPane as any;
}

// Styled version of Tabs.
const StyledTabs = styled(VarnishTabs).attrs((props) => ({
    animated: false
}))`
    &,
    .ant-tabs-nav-container {
        font-size: inherit;
    }

    && .ant-tabs-tabpane {
        transition: none;
    }
`;

// AntTabs has static properties, but they are lost when converting to a styled component.
// This interface tells typescript about the styled component version of the statics.
interface WithStaticProps extends StyledComponentBase<typeof AntTabs, any, any, any> {
    TabPane: typeof StyledTabPane;
}

// We trick Typescript here by first casting to unknown and then casting to the type we'd like to export.
// We do this so that the exported type includes the static properties, which we lose otherwise.
export const Tabs = StyledTabs as unknown as WithStaticProps;
