import Link from 'next/link'
import docStyles from '../../styles/doc.module.css'
import { articleList } from '../../mock/index'

const Doc = () => {
  const formatList = {}
  articleList.map((item) => {
    const year = item.createTime.substr(0, 4)
    if (formatList.hasOwnProperty(year)) {
      formatList[year].push(item)
    } else {
      formatList[year] = []
      formatList[year].push(item)
    }
  })
  return (
    <div className={docStyles.container}>
      {Object.entries(formatList).map((item, index) => {
        return (
          <div className={docStyles.itemWrap} key={`docItem${index}`}>
            <div className={docStyles.title}>
              {item[0]}
              <span>{`[${item[1].length}]`}</span>
            </div>
            {item[1].map((item, index) => (
              <Link href="/docDetail?id=1287" key={`docChildrenItem${index}`}>
                <div className={docStyles.item}>
                  <div>{item.title}</div>
                  <div>{item.createTime.substr(5, 5)}</div>
                </div>
              </Link>
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Doc
