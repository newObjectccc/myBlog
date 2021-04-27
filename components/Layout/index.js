import React from 'react'
import Head from 'next/head'
import Header from '../Header'
import { Col, Row } from 'antd'
import styles from '../../styles/layout.module.css'
import {
  GithubFilled,
  WechatFilled,
  MailFilled
} from '@ant-design/icons'

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog ccdd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className={styles.bg}>
        金色的林荫道，丹红色的枫叶尖，丹红色的落霞，选择一幅画卷，一生走在画卷之中。
        <div className={styles.iconWrap}>
          <GithubFilled />
          <WechatFilled />
          <MailFilled />
        </div>
      </div>
      <div className={styles.mainContent}>
        <Row type="flex" justify="center">
          <Col span={12}>
            {props.children}
          </Col>
        </Row>
      </div>
      <div className={styles.footer}>
          Powered by .Jacky@ccdd
      </div>
    </div>
  )
}

export default Layout