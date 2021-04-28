import React, {useEffect, useState} from 'react'
import headerStyles from './header.module.css'
import {Row, Col, Menu, BackTop} from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const menuStylesObj = {
    textAlign: 'right',
    border: 'none',
    fontSize: '1vw',
    color: '#50505c',
    letterSpacing: '1px',
    background: 'rgba(0,0,0,0)'
  }

  const [scrollOffset, setScrollOffset] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const currentRouter = useRouter().pathname;

  useEffect(() => {
    setClientHeight(window.innerHeight)
    const scrollHandler = () => {
      setScrollOffset(window.scrollY)
    }
    const responsiveClientHeightHandler = () => {
      setClientHeight(window.innerHeight)
    }
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', responsiveClientHeightHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', responsiveClientHeightHandler);
    }
  }, [])


  return (
    <>
      <div className={`${headerStyles.header} ${scrollOffset>=clientHeight&&headerStyles.hide}`}>
        <Row type="flex" justify="center">
          <Col span={5} className={headerStyles.author}>
            Jacky ccdd's Blog
          </Col>

          <Col span={7}>
            <Menu 
              defaultSelectedKeys={[currentRouter]} 
              mode="horizontal" 
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