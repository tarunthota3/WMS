import React from 'react';
import { Table } from 'semantic-ui-react'
import request from 'superagent';
const serverURL = require('./config/dev.js').serverURL;

class messagecontent extends React.Component {
    constructor() {
        super();
        this.state = {
           messagecontent: []
        }
     }
     componentDidMount() {
        this.getmessagecontent();
     }
  
     getmessagecontent() {
        const req = request.get(serverURL + '/message/vendor');
  
        req.then((resp, err) => {
           let response = JSON.parse(resp.text);
           // console.log("response: ", response);
  
           if (response.statusCode == "200" && response.status == "success") {
              // console.log("success");
              this.setState({ messagecontent: response.data });
  
           }
        });
     }
     render() {
        const { messagecontent } = this.state;
  
  
        return (
           <Table celled>
              <Table.Header>
                 <Table.Row>
                    {messagecontent.length == 0 ?
                       null
                       :
                       Object.keys(messagecontent[0]).map((item, key) => {
                          return (
                             <Table.HeaderCell key={key}>{item}</Table.HeaderCell>
                          )
                       })
                    }
  
  
                 </Table.Row>
              </Table.Header>
              <Table.Body>
                 {messagecontent.map((item, key) => {
                    return (
                       <Table.Row key={key}>
                          <Table.Cell>
                             {item.user_name}
                          </Table.Cell>
                          <Table.Cell>
                             {item.content}
                          </Table.Cell>
                          <Table.Cell>
                             {item.vendor_name}
                          </Table.Cell>
                       </Table.Row>
                    )
                 })}
              </Table.Body>
           </Table>
        );
     }
}

export default messagecontent;