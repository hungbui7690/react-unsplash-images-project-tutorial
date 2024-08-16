/*
  React Query Info
  - By default, useQuery caches the results of the API request for a certain amount of time. This can improve the performance of your application by reducing the number of requests made to the API.
  - When you specify the queryKey array in the options object for useQuery, you are telling the hook how to identify the data being fetched. If the queryKey array doesn't change between renders of the component, then useQuery will return the cached data instead of re-fetching it from the API.
  - The queryKey array is used by useQuery to identify which data the query is fetching. When the queryKey array changes, useQuery assumes that the data being fetched has changed, and it re-runs the queryFn to fetch the updated data.
  - In this case, searchTerm is the user's search input, and it is used to modify the API request URL. By including searchTerm in the queryKey array, you are telling useQuery to re-run the queryFn whenever the user's search input changes, in order to fetch updated data based on the new search term.
  - Therefore, without including searchTerm in the queryKey array, the useQuery hook would not re-fetch data when the user performs a new search.


****************************

  useQuery Fix
  - After setting up React Query and creating the searchValue state value, you will need to modify the useQuery function to fetch images based on the user's search input.

  1. Gallery.jsx 
    -> add <searchTerm> to queryKey list
    -> queryKey: ['images', searchTerm]

  2. open Tanstack Devtools to check
    -> change to another <searchTerm> 
    -> then go back to previous <searchTerm> to see caching 


*/

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from './context'

const url =
  'https://api.unsplash.com/search/photos?client_id=jQ1-1nr-Jz19jthYCd0ryjB3K8liZwp5osTjNbpfZvo'

const Gallery = () => {
  const { searchTerm } = useGlobalContext()

  const response = useQuery({
    queryKey: ['images', searchTerm], // # add searchTerm to queryKey
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`)
      return result.data
    },
  })

  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    )
  }
  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>There was an error...</h4>
      </section>
    )
  }

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
