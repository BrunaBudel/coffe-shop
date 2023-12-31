import React from 'react'
import { FlatList, ScrollView, View, VStack } from 'native-base'
import { HeaderHome } from '@components/HeaderHome'
import { BannerHome } from '@components/BannerHome'

import { CoffeeShopCard } from '@components/CoffeeShopCard'
import { coffeeShops, Drinks } from '@mocks/index'
import { SwiperTitle } from '@components/SwiperTitle'
import { CoffeeCard } from '@components/CoffeeCard'

export function Home(props: {
  navigation: { navigate: (arg0: string) => void }
}) {
  function handleCoffeShopInfo() {
    props.navigation.navigate('CoffeeShop')
  }
  function handleOpenOrderPage() {
    props.navigation.navigate('Order')
  }
  return (
    <VStack safeAreaBottom>
      <HeaderHome />
      <ScrollView h={'full'}>
        <BannerHome />
        <SwiperTitle title="Cafeterias por perto" />
        <FlatList
          data={coffeeShops}
          renderItem={({ item }) => (
            <CoffeeShopCard data={item} navigate={handleCoffeShopInfo} />
          )}
          keyExtractor={(item: ICoffeeShops) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          paddingLeft={8}
          paddingTop={3}
        />
        <SwiperTitle title="Mais pedidos" />
        <View
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
          px={8}
          flex={1}
          paddingBottom={200}
        >
          {Drinks.map((item: ICoffeeDrinks) => (
            <CoffeeCard
              key={item.id}
              data={item}
              navigate={handleOpenOrderPage}
            />
          ))}
        </View>
      </ScrollView>
    </VStack>
  )
}
