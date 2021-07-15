import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../codeBlock'
import MdNavBar from '../mdNavBar'

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

const ArticleDetail = ({ docId, docSource }) => {
  return (
    <>
      {docId}
      <MdNavBar articleDetail={docSource}></MdNavBar>
      <ReactMarkdown children={docSource} components={components}></ReactMarkdown>
    </>
  )
}

export default ArticleDetail
