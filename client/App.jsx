import React from 'react';
import { Accordion, Icon, Grid, Table } from 'semantic-ui-react'
import request from 'superagent';
import UserAddress from './userAddress.jsx';
import UserDetails from './userDetails.jsx';
import ItemDetails from './itemDetails.jsx';
import Messagecontent from './messagecontent.jsx';
import UserData from './userData.jsx';
const serverURL = require('./config/dev.js').serverURL;


class App extends React.Component {
   constructor() {
      super();
      this.state = {
         activeIndex: -1,
         userAddress: []
      }
      this.handleClick = this.handleClick.bind(this);
      // this.getUserAddress = this.getUserAddress.bind(this);
   }
   handleClick(e, titleProps) {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index

      this.setState({ activeIndex: newIndex })
   }
   render() {
      const { activeIndex } = this.state;


      return (
         <Grid style={{ margin: '2%' }}>
            <Grid.Row>
               <Grid.Column>
                  <Accordion styled fluid>
                     <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                     >
                        <Icon name='dropdown' />
          Fetching User Address based on city
        </Accordion.Title>
                     <Accordion.Content active={activeIndex === 0}>
                        <UserAddress />
                     </Accordion.Content>
                     <Accordion.Title
                        active={activeIndex === 1}
                        index={1}
                        onClick={this.handleClick}
                     >
                        <Icon name='dropdown' />
          Fetching User Details based on Quantity
        </Accordion.Title>
                     <Accordion.Content active={activeIndex === 1}>
                        <UserDetails />
                     </Accordion.Content>
                     <Accordion.Title
                        active={activeIndex === 2}
                        index={2}
                        onClick={this.handleClick}
                     >
                        <Icon name='dropdown' />
         Fetching vendor details based on product
        </Accordion.Title>
                     <Accordion.Content active={activeIndex === 2}>
                        <ItemDetails />
                     </Accordion.Content>
                     <Accordion.Title
                        active={activeIndex === 3}
                        index={3}
                        onClick={this.handleClick}
                     >
                        <Icon name='dropdown' />
         Fetching message content and user details
        </Accordion.Title>
                     <Accordion.Content active={activeIndex === 3}>
                        <Messagecontent />
                     </Accordion.Content>
                     <Accordion.Title
                        active={activeIndex === 4}
                        index={4}
                        onClick={this.handleClick}
                     >
                        <Icon name='dropdown' />
         Fetching user details
        </Accordion.Title>
                     <Accordion.Content active={activeIndex === 4}>
                        <UserData />
                     </Accordion.Content>
                  </Accordion>
               </Grid.Column>
            </Grid.Row>
         </Grid>
         

      );
   }
}
export default App;
