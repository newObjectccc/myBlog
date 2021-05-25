import React from 'react'
import ReactMarkdown from 'react-markdown'

let input = '# This is a header\n\nAnd this is a paragraph'

const ArticleDetail = ({docId}) => {
  return (
    <>
      <ReactMarkdown>
        {input + docId}
      </ReactMarkdown>
    </>
  )
}

export default ArticleDetail