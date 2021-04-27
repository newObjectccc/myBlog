import articleItemStyles from './articleItem.module.css'

const ArticleItem = (props) => {
  return (
    <div className={articleItemStyles.container}>
      <div className={articleItemStyles.title}>{props.dataSource.title}</div>
      <div className={articleItemStyles.content}>{props.dataSource.content}</div>
      <div className={articleItemStyles.infoWrap}>{props.dataSource.tags}</div>
      
    </div>
  )
}

export default ArticleItem