import ArticleDetail from '../../components/articleDetail'
import AvatarInfomation from '../../components/avatarInfomation'
import { useRouter } from 'next/router'

const docDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <AvatarInfomation articleInfo={{title:'这里是一个前端的头部'}} />
      <ArticleDetail docId={ id }></ArticleDetail>
    </>
  )
}

export default docDetail