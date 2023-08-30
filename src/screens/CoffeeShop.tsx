import React from 'react'

import { VStack, StatusBar } from 'native-base'
import { CoffeeShopInfoBanner } from '@components/CoffeeShopInfoBanner'
import { CommonActions } from '@react-navigation/native'

export function CoffeeShop({ navigation }) {
  function handleGoBack() {
    navigation.dispatch(CommonActions.goBack())
  }
  return (
    <VStack>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CoffeeShopInfoBanner goBack={handleGoBack} />
    </VStack>
  )
}
