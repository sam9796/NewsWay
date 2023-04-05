import React from 'react'
import NewsContext from './newsContext.js'
function newsState(props) {
    const article=props.article
  return (
   <NewsContext.Provider value={article}>
   {props.children}
   </NewsContext.Provider>
  )
}

export default newsState
