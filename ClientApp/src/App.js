import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { BotDashboard } from './components/BotDashboard/BotDashboard';
import { WorkForce } from './components/Workforce/WorkForce';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
            <Route exact path='/' component={BotDashboard} />
            <Route path='/workforce' component={WorkForce} />         
      </Layout>
    );
  }
}