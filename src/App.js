import React, { useState } from 'react';
import Searchbar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'
import Button from './components/Button';
import {Conteiner} from './App.styled'


function App () {
const [page, setPage] = useState(1);
const [pictureName, setPictureName] = useState('');
  
  
  
 const onLoadMore = () => {
    setPage(page + 1 );
  };
  
 const handleFormSubmit = pictureName => {
    setPictureName(pictureName)
    if (pictureName) {
      setPage(1)
    }
    
  }
  

      return <Conteiner>
  <Searchbar onSubmit={handleFormSubmit}/>
  <ImageGallery pictureName={pictureName} page={page}/>
  {pictureName && <Button onLoadNext={onLoadMore} />}
      </Conteiner>;
    
  }

// class App extends Component {

// state={
//   pictureName:'',
// page: 1
// }


// onLoadMore = () => {
//   let { page } = this.state;
//   this.setState({ page: page + 1 });
// };

// handleFormSubmit = pictureName => {
//   this.setState({pictureName})
//   if (pictureName) {
//     this.setState({ page: 1 })
//   }
  
// }

//   render() { 
//     return <Conteiner>
// <Searchbar onSubmit={this.handleFormSubmit}/>
// <ImageGallery pictureName={this.state.pictureName} page={this.state.page}/>
// {this.state.pictureName && <Button onLoadNext={this.onLoadMore} />}
//     </Conteiner>;
//   }
// }
 
export default App;


