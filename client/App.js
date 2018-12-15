import React, { Component } from 'react';
import { Page, AppProvider, ResourcePicker } from '@shopify/polaris';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        open: false
      }
  }

  render() {
    const { apiKey, shopOrigin } = window;

    return (
      <AppProvider shopOrigin={shopOrigin.replace("https://", "") } apiKey={apiKey}>
        <Page
          title="My application"
          breadcrumbs={[{ content: 'Home', url: '/foo' }]}
          primaryAction={{ content: 'Add something' }}
        >
        Show picker: {this.state.open === true ? "Show" : "Don't show"}
        <button onClick={() => this.setState({open: true})}>Show picker</button>
        <ResourcePicker
          resourceType="Product"
          open={this.state.open}
          onSelection={({selection}) => {
            console.log('Selected products: ', selection);
            this.setState({open: false});
          }}
          onCancel={() => this.setState({open: false})}
          />
        </Page>
      </AppProvider>
    );
  }
}

export default App;
