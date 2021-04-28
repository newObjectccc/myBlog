import articleItemStyles from './articleItem.module.css'
import {
  ClockCircleFilled,
  DatabaseFilled,
  TagFilled
} from '@ant-design/icons'
import dayjs from 'dayjs'

const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const ArticleItem = (props) => {
  return (
    <div className={articleItemStyles.container}>
      <div className={articleItemStyles.title}>{props.dataSource.title}</div>
      <div className={articleItemStyles.content}>{props.dataSource.content}</div>
      <div className={articleItemStyles.infoWrap}>
        <ClockCircleFilled />
        <span>{dayjs(props.dataSource.createTime).fromNow()}</span>
        <DatabaseFilled />
        <span>{props.dataSource.categories}</span>
        <TagFilled />
        <span>
          {
            props.dataSource.tags.map((item,index) => index+1!==props.dataSource.tags.length ? `${item} | ` : `${item}`)
          }
        </span>
        <div className={articleItemStyles.posiMore}>Read more</div>
      </div>
      
    </div>
  )
}

export default ArticleItem