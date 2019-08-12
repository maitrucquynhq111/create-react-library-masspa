import React, { Component } from 'react';
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaAngleDoubleDown,
  FaAngleDoubleUp,
} from "react-icons/fa"
import ExampleComponent from 'create-react-library-masspa'
import logo from './img/home1.png';
import iconBack from './img/rightArrow.svg'
import './index.css';
const listNavigation = [
  {
    name: 'Trang Chủ',
    subMenu: [],
    onClick: () => console.log('click')
  },
  {
    id: '5',
    name: 'Dịch Vụ',
    subMenu: [
      {
        name: 'Dịch vụ đặc biệt',
        subMenu: [],
        onClick: () => console.log('click')
      },
      {
        name: 'Dịch vụ',
        subMenu: [
          {
            name: 'Chăm sóc body',
            subMenu: [
              {
                name: 'Chăm sóc body',
                subMenu: [],
                onClick: () => console.log('click')
              },
              {
                name: 'Chăm sóc da mặt',
                subMenu: [],
                onClick: () => console.log('click')
              },
            ],
            onClick: () => console.log('click')
          },
          {
            name: 'Chăm sóc da mặt',
            subMenu: [],
            onClick: () => console.log('click')
          },
        ],
        onClick: () => console.log('click')
      },
      {
        name: 'Công nghệ cao',
        subMenu: [],
        onClick: () => console.log('click')
      },
    ],
    onClick: () => console.log('click')
  },
  {
    name: 'Sản Phẩm',
    subMenu: [],
    onClick: () => console.log('click')
  },
  {
    name: 'Khuyến Mãi',
    subMenu: [
      {
        name: 'Chăm sóc body',
        subMenu: [],
        onClick: () => console.log('click')
      },
      {
        name: 'Chăm sóc da mặt',
        subMenu: [],
        onClick: () => console.log('click')
      },
    ],
    onClick: () => console.log('click')
  },
  {
    name: 'Tin Tức',
    subMenu: [],
    onClick: () => console.log('click')
  },
]
const listSocialNetwork = [
  {
    node: <FaFacebookSquare className="menu_icon" />,
    link: "https://www.facebook.com/kimspa185/"
  },
  {
    node: <FaTwitter className="menu_icon" />,
    link: "https://twitter.com/?lang=vi"
  },
  {
    node: <FaInstagram className="menu_icon" />,
    link: "https://www.instagram.com/"
  },
]
export default class App extends Component {
  render () {
    return (
      <div className='root'>
        <ExampleComponent 
          logo={logo}
          listNavigation={listNavigation}
          iconBackNode={<img src={iconBack} className="menu_icon_back"/>}
          listSocialNetwork={listSocialNetwork}
          // textColor="#9CDCFE"
          // backgroundColor='rgb(40, 24, 15)'
          // iconArrowDown={<FaAngleDoubleDown className="w-50"/>}
          // iconArrowUp={<FaAngleDoubleUp className="w-50"/>}
        />
      </div>
    )
  }
}
