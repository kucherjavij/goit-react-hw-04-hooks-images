import React, { useState, useEffect} from 'react';
import Searchbar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'
import Button from './components/Button';
import {Conteiner} from './App.styled'
import fetchIMG from './components/API'

function App () {
const [page, setPage] = useState(1);
const [pictureName, setPictureName] = useState('');
const [pictures, setPicture] = useState(null);
const [status, setStatus] = useState('idle');
const [error, setError] = useState(null);
  
  
 const onLoadMore = () => {
    setPage(page + 1 );
  };
  
 const handleFormSubmit = pictureName => {
    setPictureName(pictureName)
    if (pictureName) {
      setPage(1)
    }
    
  }

  useEffect(() => {
    if (!pictureName) {
        return
    }
    
    setStatus('pending');
    fetchIMG(pictureName, 1)
    .then(picture => {
        setPicture(picture.hits);
        setStatus('resolved')})
    .catch(error =>{ 
        setError(error);
        setStatus('rejected')} )
}, [pictureName]);

useEffect(() => {
    if (!pictureName) {
        return
    }
    if (page !== 1) {
        fetchIMG(pictureName, page)
    .then(picture =>{ 
        setPicture(
       [ ...pictures,
        ...picture.hits,]
      );
      setStatus('resolved')})
    .catch(error => {
        setError(error);
        setStatus('rejected')})
    }
}, [page]); 
  console.log(pictureName);

      return <Conteiner>
  <Searchbar onSubmit={handleFormSubmit}/>
  {status === 'idle' && <div>Write something...</div>}
  {status === 'pending' && <div>Loading...</div>}
  {status === 'rejected' && <h2>{error.message}</h2>}
  {status === 'resolved' && <ImageGallery pictures={pictures}/>}
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


