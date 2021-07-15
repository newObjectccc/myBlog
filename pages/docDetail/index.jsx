import ArticleDetail from '../../components/articleDetail'
import AvatarInfomation from '../../components/avatarInfomation'
import { useRouter } from 'next/router'
import MdNavBar from '../../components/mdNavBar'

const inputText = `
# Markdown-Navbar Demo

## Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.

### Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken.

#### Chicken Chicken Chicken Chicken

Chicken Chicken Chicken Chicken Chicken Chicken.

# This is a header\n\nAnd this is a paragraph, Here is some JavaScript code:
~~~js
function mark() {
  [1,2,3].map(item => {
    console.log('mark success!', item)
  })
  return <ReactMarkDown />
}
console.log('It works!')
~~~
`

const docDetail = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <MdNavBar articleDetail={inputText}></MdNavBar>
      <AvatarInfomation articleInfo={{ title: '这里是一个前端的头部 avatar' }} />
      <ArticleDetail docId={id} docSource={inputText}></ArticleDetail>
    </>
  )
}

export default docDetail
