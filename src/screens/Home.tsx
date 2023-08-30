import React from 'react'
import { FlatList, ScrollView, VStack } from 'native-base'
import { Header } from '@components/Header'
import { BannerHome } from '@components/BannerHome'

import { CoffeeShopCard } from '@components/CoffeeShopCard'
import { coffeeShops } from '@mocks/index.ts'
import { SwiperTitle } from '@components/SwiperTitle'

export function Home() {
  return (
    <VStack>
      <Header />
      <ScrollView>
        <BannerHome />
        <SwiperTitle title="Cafeterias por perto" />
        <FlatList
          data={coffeeShops}
          renderItem={({ item }) => <CoffeeShopCard data={item} />}
          keyExtractor={(item: ICoffeeShops) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          paddingLeft={8}
          paddingTop={3}
        />
      </ScrollView>
      <SwiperTitle title="Mais pedidos" />
    </VStack>
  )
}
