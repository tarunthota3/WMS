import React from 'react';
import { Accordion, Icon, Grid, Table } from 'semantic-ui-react'
import request from 'superagent';
import UserAddress from './userAddress.jsx';
import UserDetails from './userDetails.jsx';
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
                  </Accordion>
               </Grid.Column>
            </Grid.Row>
         </Grid>

      );
   }
}
export default App;
