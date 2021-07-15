import avatarInformationStyle from './avatarInformation.module.css'
import { ClockCircleFilled, DatabaseFilled, TagFilled } from '@ant-design/icons'

const AvatarInfomation = (props) => {
  return (
    <>
      <div className={avatarInformationStyle.title}>{props.articleInfo.title}</div>
      <div className={avatarInformationStyle.avatarWrap}>
        <img className={avatarInformationStyle.avatar} src="./avatar.png" />
        <div className={avatarInformationStyle.rightDiv}>
          ccdd's Blog
          <p className={avatarInformationStyle.tagCtx}>
            <ClockCircleFilled />
            xxxxxxxxxxx &nbsp;&nbsp;
            <DatabaseFilled />
            前端 &nbsp;&nbsp;
            <TagFilled />
            React16.x | Webpack5
          </p>
        </div>
      </div>
    </>
  )
}

export default AvatarInfomation
