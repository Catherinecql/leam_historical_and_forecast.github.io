import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import options from '../../assets/name'
import data from '../../assets/data2'
import { Line } from 'react-chartjs';
import { Header, Table } from 'semantic-ui-react'

import styles from './Home.scss'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, { value }){
    this.setState({ items: value })
  }

  render() {
    console.log(data[0]["name"].split(' ').join(''))
    console.log(data[0]["data"])
    // <Line data={item["data"]} />

    return(
      <div className="Home">
        <div className="Search">
        <h1>Historical and Forecast Data Demo</h1>
        <Dropdown
          placeholder='Sector'
          fluid multiple search selection
          options={options}
          onChange={this.handleChange}
        />
        </div>
          <div className="Table">
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell className="TableName">Name</Table.HeaderCell>
                <Table.HeaderCell>Current_Employment(2016)</Table.HeaderCell>
                <Table.HeaderCell>Employment_Projection(2040)</Table.HeaderCell>
                <Table.HeaderCell>Projection</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {data.map((item, i) => this.state.items.includes(item["name"]) ?
              <Table.Row>
                <Table.Cell singleLine>
                  {item["name"]}
                </Table.Cell>
                <Table.Cell>
                  {item["data"][16]}
                </Table.Cell>
                <Table.Cell>
                  {item["data"][38]}
                </Table.Cell>
                <Table.Cell>
                  <iframe className="chart" src={`../../assets/${item["name"].split(' ').join('')}.html`}></iframe>
                </Table.Cell>
              </Table.Row> : null
            )}
            </Table.Body>
          </Table>
        </div>
      </div>
    )
  }
}

export default Home
