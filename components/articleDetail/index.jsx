import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../codeBlock'
import MdNavBar from '../mdNavBar'

let input = `# This is a header\n\nAnd this is a paragraph, Here is some JavaScript code:
~~~js
function mark() {
  [1,2,3].map(item => {
    console.log('mark success!', item)
  })
  return <ReactMarkDown />
}
console.log('It works!')
~~~`

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <CodeBlock
        language={match[1]}
        PreTag="div"
        value={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    )
  }
}

const ArticleDetail = ({ docId }) => {
  return (
    <>
      {docId}
      <MdNavBar articleDetail={input}></MdNavBar>
      <ReactMarkdown children={input} components={components}></ReactMarkdown>
    </>
  )
}

export default ArticleDetail
