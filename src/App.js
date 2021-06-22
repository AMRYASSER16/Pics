import React from "react";
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends React.Component {

  state = { images: [] }

  onSearchSubmit = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 7bZwNwg4JkBtCHWGfHCoHt10uBurOcfbp7RC3UeCMhI'
      }
    });

    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <hr />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
