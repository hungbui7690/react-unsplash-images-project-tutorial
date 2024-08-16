/*
  Unsplash Info
  - Unsplash is a website that provides a large collection of high-quality stock photos that are free to use. The Unsplash API is a service that allows developers to access and use Unsplash's collection of photos and related data in their own applications. The API allows developers to search, download, and use the photos in a variety of ways, such as creating photo galleries or integrating them into social media applications. The Unsplash API is widely used by developers to enhance the visual content of their applications or websites.
  - https://unsplash.com/developers


*******************************

  Get API Keys
  - login 
  - developer APIs
  - create new app
  - get Access Key + Secret Key


*******************************

  Docs 
  -> Public Authentication
  -> Search Functionality


*******************************

  Test in Postman
  - Before implementing the API in your application, it is a good practice to test the URL using a tool like Thunder Client VS Code Extension. This will allow you to verify that the URL is correct and that you are able to successfully retrieve images using the API.
  - Docs -> Public Authentication
    -> https://api.unsplash.com/photos/?client_id= <ACCESS_KEY>
    -> https://api.unsplash.com/search/photos?client_id= <ACCESS_KEY>&query=office


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Install and Setup React Query in Gallery Component
  - React Query is a library that can be used to handle API requests in React applications. To fetch images from the Unsplash API, you will need to install and set up React Query in your Gallery component.


*******************************

  Install and Setup React Query Dev Tools
  - React Query dev tools provide a way to inspect and debug React Query data and caching behavior. To use this tool, you will need to install and set up the React Query dev tools in your application.

  ~~ npm i axios
  ~~ npm i @tanstack/react-query

  1. main.tsx


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Setup Query and Render Images

  2. Gallery.jsx


*/

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const url =
  'https://api.unsplash.com/search/photos?client_id=jQ1-1nr-Jz19jthYCd0ryjB3K8liZwp5osTjNbpfZvo&query=office'

const Gallery = () => {
  // 4. using axios with react query
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url)
      return result.data
    },
  })

  // 5. click data(...) -> data -> results -> check the fields we need
  console.log(response) // urls -> choose the regular one

  // loading
  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    )
  }

  // error
  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>There was an error...</h4>
      </section>
    )
  }

  // default
  const results = response.data.results
  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No results found...</h4>
      </section>
    )
  }

  return (
    <section className='image-container'>
      {results.map((item) => {
        const url = item?.urls?.regular
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className='img'
          ></img>
        )
      })}
    </section>
  )
}

export default Gallery
