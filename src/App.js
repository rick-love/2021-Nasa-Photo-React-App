import React, { Component } from 'react';
// Styles
import { GlobalStyle } from './GlobalStyle';

// Components
import Navbar from './components/layout/Navbar';
import Photos from './components/photos/Photos';


class App extends Component {
  state = {
    photos: [],
    loading: false,
  };

  async componentDidMount() {
    let today = new Date();
    today.setDate(today.getDate() - 7);
    let minus = today.toISOString('yyyy-dd-dd').split('T').splice(0, 1);

    this.setState({ loading: true });
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&start_date=${minus}`
    );
    const json = await response.json();
    this.setState({ photos: json, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container m-auto'>
          <Photos loading={this.state.loading} photos={this.state.photos} />
        </div>

        <GlobalStyle />
      </div>
    );
  }
}

export default App;
