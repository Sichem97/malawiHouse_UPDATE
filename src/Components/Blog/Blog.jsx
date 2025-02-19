import React from 'react'
import './css/BlogStyle.css'
import PopularPost from './Features/PopularPost'
import AllPost from './Features/AllPost'

function Blog() {
  return (
    <div className=''>
        <PopularPost/>
        <AllPost/>
    </div>
  )
}

export default Blog