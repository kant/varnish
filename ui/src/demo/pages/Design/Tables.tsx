import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { BodySmall, ExternalLink, Code } from '../../../lib/components';
import { PageTitle, SectionWithDivider, DefaultLiveProvider } from '../Shared';

const examples = {
basic: `
render(
  <div>
    <Table
      pagination={false}
      dataSource={[
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
      ]}
      columns={[
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        }
      ]}
    />
  </div>
)
`.trim(),
}

export class Tables extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <React.Fragment>
                <PageTitle>Tables</PageTitle>

                <h3>Appearance and Behavior</h3>
                <BodySmall>
                    <br/>We are extending the Ant Design Table component.
                    <br/>For more information see the: <ExternalLink target="_blank" href="https://ant.design/components/table/">Ant Design Component</ExternalLink>
                </BodySmall>

                <SectionWithDivider>
                    <h3>Usage</h3>
                    <h4>Basic Ant Table</h4>
                    The Basic Table includes support for tabular data.
                    <DefaultLiveProvider code={examples.basic} />
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Typescript</h4>
                    To correctly pass typing info down the Table, you must extend a concrete Table
                    class for your type:
                    <Code variant='dark'>
                    {`// define type for person
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
};

// extend a concrete table class for person
class TableOfPerson extends Table<Person> {}

// optional: style table as you like
const StyledPersonTable = styled(TableOfPerson)\`
  border-width: 200px;

// then use as normal in jsx
<StyledPersonTable // or TableOfPerson
  dataSource={[...]}
  columns={[...]}
/>
\`;`}
                    </Code>
                </SectionWithDivider>
            </React.Fragment>
        )
    }
}
