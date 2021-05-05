import docStyles from '../../styles/doc.module.css'
import { articleList } from '../../mock/index'

const Doc = () => {
  let formatList = {};
  articleList.map((item) => {
    console.log("item", item)
    let year = item.createTime.substr(0,4);
    if (formatList.hasOwnProperty(year)) {
      formatList[year].push(item);
    } else {
      formatList[year] = [];
      formatList[year].push(item);
    }
  })
  console.log("formatList", Object.entries(formatList))
  return (
    <div className={docStyles.container}>
      {
        Object.entries(formatList).map(item => {
          return (
            <div className={docStyles.itemWrap}>
              <div className={docStyles.title}>
                { item[0] } 
                <span>
                  { `[${item[1].length}]` }
                </span>
              </div>
              {
                item[1].map(item => 
                  <div className={docStyles.item}>
                    <div>{ item.title }</div>
                    <div>{ item.createTime.substr(5,5) }</div>
                  </div>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Doc