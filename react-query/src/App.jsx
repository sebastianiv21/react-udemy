import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import './App.css'
import { useQuery, useQueryClient } from '@tanstack/react-query'

const getRandomNumber = async () => {
  const res = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new'
  )
  const numberString = await res.text()
  return +numberString // convert string to number
}

function App() {
  const query = useQuery(
    ['randomNumber'], // query key (unique identifier for query)
    getRandomNumber // query function (called when query is created/fetched)
  )

  return (
    <div className='App App-header'>
      {query.isFetching ? ( // isFetching is true when query is fetching
        'Loading...'
      ) : query.isError ? ( // isError is true when query errored
        query.error.message // error message
      ) : (
        <div>
          <h1>{query.data}</h1> // query data
          <button onClick={() => query.refetch()} disabled={query.isFetching}> // disable button while fetching
            Refetch
          </button>
        </div>
      )}
    </div>
  )
}

export default App
