import React from 'react';
import { Table } from 'semantic-ui-react'
import request from 'superagent';
const serverURL = require('./config/dev.js').serverURL;


class ItemDetails extends React.Component {
    constructor() {
        super();
        this.state = {
           itemDetails: []
        }
     }
     componentDidMount() {
        this.getItemDetails();
     }
  
     getItemDetails() {
        const req = request.get(serverURL + '/item/vendor');
  
        req.then((resp, err) => {
           let response = JSON.parse(resp.text);
           // console.log("response: ", response);
  
           if (response.statusCode == "200" && response.status == "success") {
              // console.log("success");
              this.setState({ itemDetails: response.data });
  
           }
        });
     }
     render() {
        const { itemDetails } = this.state;
  
  
        return (
           <Table celled>
              <Table.Header>
                 <Table.Row>
                    {itemDetails.length == 0 ?
                       null
                       :
                       Object.keys(itemDetails[0]).map((item, key) => {
                          return (
                             <Table.HeaderCell key={key}>{item}</Table.HeaderCell>
                          )
                       })
                    }
  
  
                 </Table.Row>
              </Table.Header>
              <Table.Body>
                 {itemDetails.map((item, key) => {
                    return (
                       <Table.Row key={key}>
                          <Table.Cell>
                             {item.user_id}
                          </Table.Cell>
                          <Table.Cell>
                             {item.full_name}
                          </Table.Cell>
                       </Table.Row>
                    )
                 })}
              </Table.Body>
           </Table>
        );
     }
}
export default ItemDetails;