import React from 'react';
import { Table } from 'semantic-ui-react'
import request from 'superagent';
const serverURL = require('./config/dev.js').serverURL;


class UserDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            userDetails: []
        }
    }
    componentDidMount() {
        this.getuserDetails();
    }

    getuserDetails() {
        const req = request.get(serverURL + '/user/quantity');

        req.then((resp, err) => {
            let response = JSON.parse(resp.text);
            // console.log("response: ", response);

            if (response.statusCode == "200" && response.status == "success") {
                // console.log("success");
                this.setState({ userDetails: response.data });

            }
        });
    }
    render() {
        const { userDetails } = this.state;


        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        {userDetails.length == 0 ?
                            null
                            :
                            Object.keys(userDetails[0]).map((item, key) => {
                                return (
                                    <Table.HeaderCell key={key}>{item}</Table.HeaderCell>
                                )
                            })
                        }
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {userDetails.map((item, key) => {
                        return (
                            <Table.Row key={key}>
                                <Table.Cell>
                                    {item.first_name}
                                </Table.Cell>
                                <Table.Cell>
                                    {item.last_name}
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>

        );
    }
}
export default UserDetails;
