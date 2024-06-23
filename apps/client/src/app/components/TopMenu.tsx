'use client'
import { Button, Menu, MenuProps } from "antd";
import React, { useState } from "react";
import { HomeOutlined, EditOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { usePathname } from 'next/navigation'

type MenuItem = Required<MenuProps>['items'][number];

//@ts-ignore
const items : MenuItem[] = [
  {
    label: (
      <a href="/">
        Домой
      </a>
    ),
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: (
      <a href="/admin">
        Админка
      </a>
    ),
    key: '/admin',
    icon: <EditOutlined />,
  }
]

export const TopMenu = () => {
  const current = usePathname();
  return(
      <Menu  selectedKeys={[current]} mode="horizontal" items={items} />
  )
}
