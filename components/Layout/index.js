import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../Header'
import { Col, Row } from 'antd'
import styles from './layout.module.css'
import {
  GithubFilled,
  WechatFilled,
  MailFilled
} from '@ant-design/icons'

const Layout = (props) => {

  const curRouter = useRouter().pathname;
  console.log(curRouter)

  return (
    <div className={styles.container}>
      <Head>
        <title>Jacky.ccdd's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {
        curRouter.indexOf('/doc') === -1
        &&
        <div className={styles.bg}>
          金色的林荫道，丹红色的枫叶尖，丹红色的落霞，爱是脑海中的一幅画，守护一生即是长情。
          <div className={styles.iconWrap}>
            <GithubFilled />
            <WechatFilled />
            <MailFilled />
          </div>
        </div>
      }
      <div className={styles.mainContent}>
        <Row type="flex" justify="center">
          <Col span={15}>
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