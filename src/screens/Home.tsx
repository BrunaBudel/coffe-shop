import React from 'react'
import { HStack, ScrollView, Text, VStack } from 'native-base'
import { Header } from '@components/Header'
import { BannerHome } from '@components/BannerHome'

import ArrowRight from '@assets/arrow-right.svg'
import { CoffeeShopCard } from '@components/CoffeeShopCard'

export function Home() {
  return (
    <VStack>
      <Header />
      <ScrollView>
        <BannerHome />
        <HStack px="8" justifyContent="space-between" alignItems="center">
          <Text fontSize="xl" fontFamily="text" fontWeight="700" color="black">
            Cafés por perto
          </Text>
          <HStack alignItems="center" space={8}>
            <Text
              fontSize="sm"
              fontFamily="text"
              fontWeight="700"
              color="green.500"
            >
              Ver Todos
            </Text>
            <ArrowRight width={20} height={20} />
          </HStack>
        </HStack>
        <CoffeeShopCard />
      </ScrollView>
    </VStack>
  )
}
