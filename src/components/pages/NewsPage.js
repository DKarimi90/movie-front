import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const NewsPage = () => {
const [item, setItem] = useState('')
const {index} = useParams()

useEffect(() => {
fetch(`https://newsdata.io/api/1/news?apikey=pub_2789000c59dc4965609f5f027da26b2b09d61&q=Kenya&country=ke&category=entertainment,politics,technology`)
.then((res) => {
  if(res.ok){
    return res.json()
  } 
  else {

    throw new Error('Problem loading article')
  }
})
.then(data => {
  console.log(data)
  setItem(data)
})
}, [index])


  return (
    <div className='w-full min-h-screen'>
      <div>
        <p>{item.title}</p>
      </div>
    </div>
  )
}

export default NewsPage
