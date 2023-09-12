import React from 'react'

import {
  VStack,
  StatusBar,
  Text,
  Center,
  HStack,
  ScrollView,
  View,
  Pressable,
} from 'native-base'
import { CoffeeShopInfoBanner } from '@components/CoffeeShopInfoBanner'
import { CommonActions } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { CoffeeCard } from '@components/CoffeeCard'
import { Drinks } from '@mocks/index'

import Location from '@assets/location.svg'
import Star from '@assets/star.svg'

export function CoffeeShop({ navigation }: { navigation: any }) {
  function handleRatingPage() {
    navigation.navigate('RatingPage')
  }
  function handleOpenOrderPage() {
    navigation.navigate('Order')
  }
  function handleOpenEmployeesList() {
    navigation.navigate('EmployeesList')
  }
  function handleGoBack() {
    navigation.dispatch(CommonActions.goBack())
  }
  return (
    <ScrollView>
      <VStack>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <CoffeeShopInfoBanner goBack={handleGoBack} />
        <VStack px={8} py={2} space={4}>
          <Center
            paddingBottom={2}
            marginTop={2}
            borderBottomWidth={2}
            borderBottomColor={'gray.200'}
          >
            <Text
              fontSize="3xl"
              fontFamily="text"
              fontWeight="700"
              color="black"
            >
              Coffee Shop
            </Text>
          </Center>
          <Pressable onPress={handleRatingPage}>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              paddingBottom={4}
              borderBottomWidth={2}
              borderBottomColor={'gray.200'}
            >
              <HStack space={2} alignItems="center">
                <Star width={24} height={24} />
                <Text
                  fontSize="lg"
                  fontFamily="text"
                  fontWeight="700"
                  color="black"
                >
                  3.8
                </Text>
                <Text
                  fontSize="sm"
                  fontFamily="text"
                  fontWeight="400"
                  color="gray.400"
                >
                  (2.5k avaliações)
                </Text>
              </HStack>
              <FontAwesomeIcon icon={faChevronRight} color="#71717a" />
            </HStack>
          </Pressable>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            paddingBottom={4}
            borderBottomWidth={2}
            borderBottomColor={'gray.200'}
          >
            <HStack space={2} alignItems="center">
              <Location width={24} height={24} />
              <VStack>
                <Text
                  fontSize="lg"
                  fontFamily="text"
                  fontWeight="700"
                  color="black"
                >
                  2.0 km
                </Text>
                <Text
                  fontSize="sm"
                  fontFamily="text"
                  fontWeight="400"
                  color="gray.400"
                >
                  Disponível para retirada e delivery
                </Text>
              </VStack>
            </HStack>
            <FontAwesomeIcon icon={faChevronRight} color="#71717a" />
          </HStack>
          <Pressable onPress={handleOpenEmployeesList}>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              paddingBottom={4}
              borderBottomWidth={2}
              borderBottomColor={'gray.200'}
            >
              <HStack space={2} alignItems="center">
                <FontAwesomeIcon icon={faUser} color="#22c55e" size={24} />
                <Text
                  fontSize="lg"
                  fontFamily="text"
                  fontWeight="700"
                  color="black"
                >
                  Nossos colaboradores
                </Text>
              </HStack>
              <FontAwesomeIcon icon={faChevronRight} color="#71717a" />
            </HStack>
          </Pressable>
          <View
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
            flex={1}
            paddingBottom={10}
          >
            {Drinks.map((item: ICoffeeDrinks) => (
              <CoffeeCard
                key={item.id}
                data={item}
                navigate={handleOpenOrderPage}
              />
            ))}
          </View>
        </VStack>
      </VStack>
    </ScrollView>
  )
}
