import React from 'react';
import { Table } from 'semantic-ui-react'
import request from 'superagent';
const serverURL = require('./config/dev.js').serverURL;

class userData extends React.Component {
    constructor() {
        super();
        this.state = {
           userData: []
        }
     }
     componentDidMount() {
        this.getuserData();
     }
  
     getuserData() {
        const req = request.get(serverURL + '/user/details');
  
        req.then((resp, err) => {
           let response = JSON.parse(resp.text);
           // console.log("response: ", response);
  
           if (response.statusCode == "200" && response.status == "success") {
              // console.log("success");
              this.setState({ userData: response.data });
  
           }
        });
     }
     render() {
        const { userData } = this.state;
  
  
        return (
           <Table celled>
              <Table.Header>
                 <Table.Row>
                    {userData.length == 0 ?
                       null
                       :
                       Object.keys(userData[0]).map((item, key) => {
                          return (
                             <Table.HeaderCell key={key}>{item}</Table.HeaderCell>
                          )
                       })
                    }
  
  
                 </Table.Row>
              </Table.Header>
              <Table.Body>
                 {userData.map((item, key) => {
                    return (
                       <Table.Row key={key}>
                          <Table.Cell>
                             {item.user_id}
                          </Table.Cell>
                          <Table.Cell>
                             {item.first_name}
                          </Table.Cell>
                          <Table.Cell>
                             {item.last_name}
                          </Table.Cell>
                          <Table.Cell>
                             {item.email}
                          </Table.Cell>
                          <Table.Cell>
                             {item.contact}
                          </Table.Cell>
                          <Table.Cell>
                             {item.user_type}
                          </Table.Cell>
                          <Table.Cell>
                             {item.street}
                          </Table.Cell>
                          <Table.Cell>
                             {item.city}
                          </Table.Cell>
                          <Table.Cell>
                             {item.zip}
                          </Table.Cell>
                       </Table.Row>
                    )
                 })}
              </Table.Body>
           </Table>
        );
     }
}

export default userData;