import React, { useState } from 'react';
import {SearchbarConteiner, SearchFormButton, SearchFormInput, SearchForm} from './Searchbar.styled'

function Searchbar ({onSubmit}) {
const [pictureName, setPictureName] = useState('');
  
      

     const onPictureNameChange = evt => {
      setPictureName(evt.currentTarget.value.toLowerCase())

      }

     const onHandleSubmit = evt => {
          evt.preventDefault()
          if (pictureName.trim() === '') {
              return alert('please fill')
          }
onSubmit(pictureName)
          setPictureName('')
      }

  
      return <SearchbarConteiner>
         <header>
<SearchForm onSubmit={onHandleSubmit}>
  <SearchFormButton type="submit">
    <span>Search</span>
  </SearchFormButton>

  <SearchFormInput
  name='pictureName'
  value={pictureName}
    type="text"
    autoComplete="off"
    autoFocus
    placeholder="Search images"
  onChange={onPictureNameChange}
  />
</SearchForm>
</header>
      </SearchbarConteiner>;
  }

// class Searchbar extends Component {

//     state = {

//         pictureName: ''

//         };
        

//         onPictureNameChange = evt => {
// this.setState({pictureName: evt.currentTarget.value.toLowerCase()})

//         }

//         onHandleSubmit = evt => {
//             evt.preventDefault()
//             if (this.state.pictureName.trim() === '') {
//                 return alert('please fill')
//             }
// this.props.onSubmit(this.state.pictureName)
//             this.setState({pictureName: ''})
//         }

//     render() { 
//         return <SearchbarConteiner>
//            <header>
//   <SearchForm onSubmit={this.onHandleSubmit}>
//     <SearchFormButton type="submit">
//       <span>Search</span>
//     </SearchFormButton>

//     <SearchFormInput
//     name='pictureName'
//     value={this.state.pictureName}
//       type="text"
//       autoComplete="off"
//       autoFocus
//       placeholder="Search images"
//     onChange={this.onPictureNameChange}
//     />
//   </SearchForm>
// </header>
//         </SearchbarConteiner>;
//     }
// }
 
export default Searchbar;