import React, { Component } from 'react';
import {Overlay, Content} from './Modal.styled'

class Modal extends Component {

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    }
    
    handleBackdropClick = e => {
if (e.currentTarget === e.target) {
    this.props.onClose()
}
    }

componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
}

componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)

}

    render() { 
        return <Overlay onClick={this.handleBackdropClick}>
  
    <Content src={this.props.largeImageUrl} alt="" width='600px'/>
  
</Overlay>;
    }
}
 
export default Modal;