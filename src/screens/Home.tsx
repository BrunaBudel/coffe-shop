import React from 'react'
import { Center, FlatList, Text } from 'native-base'
import { Header } from '@components/Header'
import { BannerHome } from '@components/BannerHome'

export function Home() {
  return (
    <>
      <Header />
      <BannerHome />
    </>
  )
}
