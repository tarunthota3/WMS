import React from 'react';
import { Table } from 'semantic-ui-react'
import request from 'superagent';
const serverURL = require('./config/dev.js').serverURL;


class UserAddress extends React.Component {
   constructor() {
      super();
      this.state = {
         userAddress: []
      }
   }
   componentDidMount() {
      this.getUserAddress();
   }

   getUserAddress() {
      const req = request.get(serverURL + '/ua/city');

      req.then((resp, err) => {
         let response = JSON.parse(resp.text);
         // console.log("response: ", response);

         if (response.statusCode == "200" && response.status == "success") {
            // console.log("success");
            this.setState({ userAddress: response.data });

         }
      });
   }
   render() {
      const { userAddress } = this.state;


      return (
         <Table celled>
            <Table.Header>
               <Table.Row>
                  {userAddress.length == 0 ?
                     null
                     :
                     Object.keys(userAddress[0]).map((item, key) => {
                        return (
                           <Table.HeaderCell key={key}>{item}</Table.HeaderCell>
                        )
                     })
                  }


               </Table.Row>
            </Table.Header>
            <Table.Body>
               {userAddress.map((item, key) => {
                  return (
                     <Table.Row key={key}>
                        <Table.Cell>
                           {item.user_id}
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
export default UserAddress;
