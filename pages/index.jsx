import ArticleItem from '../components/articleItem'
import MyButton from '../components/Button'
import indexStyles from '../styles/index.module.css'
import { articleList } from '../mock/index'

const Index = () => {
  return (
    <div>
      {articleList.map((item, index) => (
        <ArticleItem dataSource={item} key={index + 'articleItem'} />
      ))}
      <div className={indexStyles.pagination}>
        <div className={indexStyles.posiLeft}>
          <MyButton title="Prev" />
        </div>
        <div className={indexStyles.posiRight}>
          <MyButton title="Next" />
        </div>
      </div>
    </div>
  )
}

export default Index
