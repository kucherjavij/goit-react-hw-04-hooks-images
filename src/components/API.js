const KEY = '23697885-1be4d713ea150551106b2a392'

function fetchIMG(name, page) {
  return  fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
            if (response.ok) {
               return response.json()
            }
            return Promise.reject(new Error(`Sorry we do not have ${name}`))

        })
    
}

export default fetchIMG;