import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { BodySmall, ExternalLink } from '../../../lib/components';
import { PageTitle, SectionWithDivider, DefaultLiveProvider } from '../Shared';

const examples = {
basic: `
class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ showModal: true })}>Click Me</Button>
        <Modal 
          title="Modal Title"
          visible={this.state.showModal}
          onCancel={() => this.setState({ showModal: false })}
          onOk={() => this.setState({ showModal: false })}
        >
          Here is my modal content
        </Modal>
      </div>
    )
  }
}
`.trim(),
}

export class Modals extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Modals</PageTitle>

                <h3>Appearance and Behavior</h3>
                <BodySmall>
                    <br/>We are extending the Ant Design Modal component.
                    <br/>For more information see the: <ExternalLink target="_blank" href="https://ant.design/components/modal/">Ant Design Component</ExternalLink>
                </BodySmall>

                <SectionWithDivider>
                    <h3>Usage</h3>
                    <h4>Basic Ant Modal</h4>
                    <DefaultLiveProvider code={examples.basic} noInline={false} />
                </SectionWithDivider>
            </React.Fragment>
        )
    }
}