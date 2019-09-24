import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { BodySmall, ExternalLink, Code } from '@allenai/varnish/components';

import { PageTitle, SectionWithDivider, DefaultLiveProvider } from '../shared';

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
          address: 'New York No. 1 Lake Park'
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park'
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park'
        },
      ]}
      columns={[
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age'
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address'
        }
      ]}
    />
  </div>
)
`.trim(),
filtering: `
render(
  <div>
    <Table
      pagination={false}
      dataSource={[
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park'
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park'
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park'
        },
      ]}
      columns={[
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          filterDropdown: BasicFilterDropdown,
          filterIcon: FilterIcon,
          onFilter: (filter, record) => strIncludes(filter, record.name)
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          filterDropdown: BasicFilterDropdown,
          filterIcon: FilterIcon,
          onFilter: (filter, record) => (record.age >= filter)
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          filterDropdown: BasicFilterDropdown,
          filterIcon: FilterIcon,
          onFilter: (filter, record) => strIncludes(filter, record.address)
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

                    <h4>Filtering</h4>
                    Each column can filter the rows with a custom filter function.
                    <DefaultLiveProvider code={examples.filtering} />
                </SectionWithDivider>

                <SectionWithDivider>
                    <h4>Typescript</h4>
                    While not necessary, sometimes you will want to fully type a generic Table.
                    To fully pass typing info down the Table, you can extend a concrete Table
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
