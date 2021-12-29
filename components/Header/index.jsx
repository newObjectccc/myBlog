import React, { useEffect, useState } from 'react'
import { Row, Col, Menu, BackTop } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import headerStyles from './header.module.css'

const Header = () => {
  const menuStylesObj = {
    textAlign: 'right',
    border: 'none',
    fontSize: '.9vw',
    color: '#50505c',
    background: 'rgba(0,0,0,0)'
  }

  const [scrollOffset, setScrollOffset] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const currentRouter = useRouter().pathname

  useEffect(() => {
    setClientHeight(window.innerHeight)
    const scrollHandler = () => {
      setScrollOffset(window.scrollY)
    }
    const responsiveClientHeightHandler = () => {
      setClientHeight(window.innerHeight)
    }
    window.addEventListener('scroll', scrollHandler)
    window.addEventListener('resize', responsiveClientHeightHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
      window.removeEventListener('resize', responsiveClientHeightHandler)
    }
  }, [])

  return (
    <>
      <div
        className={`${headerStyles.header} ${scrollOffset >= clientHeight && headerStyles.hide}`}
      >
        <Row type="flex" justify="center">
          <Col span={5} className={headerStyles.author}>
            <img className={headerStyles.avatar} src="./avatar.png" />
            ccdd's Blog
          </Col>
          <Col span={7}>
            <Menu
              // defaultSelectedKeys={[currentRouter]}
              mode="horizontal"
              selectedKeys={[currentRouter]}
              style={menuStylesObj}
            >
              <Menu.Item key="/">
                <Link href="/">HOME</Link>
              </Menu.Item>
              <Menu.Item key="/doc">
                <Link href="/doc">DOC</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
      <BackTop>
        <div className={headerStyles.backTop}>Up</div>
      </BackTop>
    </>
  )
}

export default Header
