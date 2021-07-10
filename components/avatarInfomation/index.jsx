import avatarInformationStyle from './avatarInformation.module.css'

const AvatarInfomation = (props) => {
  return (
    <>
      <div className={avatarInformationStyle.title}>{props.articleInfo.title}</div>
      <div className={avatarInformationStyle.avatarWrap}>ccdd's Blog</div>
    </>
  )
}

export default AvatarInfomation
