import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem'
import {ImageGalleryList} from './ImageGalleryItem.styled'
import fetchIMG from './API';

class ImageGallery extends Component {

    state ={
        picture: null,
        error: null,
        status: 'idle',
    }

componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    
    if (prevName !== nextName) {
        this.setState({status: 'pending'});
        fetchIMG(nextName, 1)
        .then(picture => this.setState({picture: picture.hits, status: 'resolved'}))
        .catch(error => this.setState({error, status: 'rejected'}) )
        return
    }

    if (prevPage !== nextPage) {
        fetchIMG(nextName, this.props.page)
        .then(picture => this.setState({picture: [
            ...prevState.picture,
            ...picture.hits,
          ], status: 'resolved'}))
        .catch(error => this.setState({error, status: 'rejected'}) )}
return
}


    render() { 
        const { picture, error , status} = this.state
      
if (status === 'idle') {
    return <div>Write something...</div>
}

        if (status === 'pending') {
            return  <div>Loading...</div>
          }

          if (status === 'rejected') {
              return <h2>{error.message}</h2>
          }

          if (status === 'resolved') {
              return <ImageGalleryList>
                  
              {picture.map(({webformatURL, id, largeImageURL})=><ImageGalleryItem URL={webformatURL} LargeUrl={largeImageURL} key={id}>    
              
              </ImageGalleryItem>)}
              </ImageGalleryList>
              
          }

    }
}
 
export default ImageGallery;

