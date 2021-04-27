import React from 'react'
import headerStyles from './header.module.css'
import {Row, Col, Menu} from 'antd'
import Link from 'next/link'

const Header = () => {
  const menuStylesObj = {
    textAlign: 'right',
    border: 'none',
    fontSize: '1vw',
    color: '#50505c',
    letterSpacing: '1px'
  }

  return (
    <div className={headerStyles.header}>
      <Row type="flex" justify="center">
        <Col span={5} className={headerStyles.author}>
          Jacky ccdd's Blog
        </Col>

        <Col span={7}>
          <Menu mode="horizontal" style={menuStylesObj}>
            <Menu.Item key="home">
              <Link href="/">HOME</Link>
            </Menu.Item>
            <Menu.Item key="doc">
              <Link href="/doc">DOC</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header