const ReactMarkdown = require('react-markdown')

const input = '# This is a header\n\nAnd this is a paragraph'

const ArticleDetail = () => {
  return (
    <ReactMarkdown source={input} />
  )
}

export default ArticleDetail