import { Header } from '@components/Header'
import { SizeButton } from '@components/SizeButton'
import { TemperatureButton } from '@components/TemperatureButton'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { CommonActions } from '@react-navigation/native'
import {
  AspectRatio,
  Center,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import { useState } from 'react'

export function Order({ navigation }) {
  const [quantity, setQuantity] = useState(1)
  function handleGoBack() {
    navigation.dispatch(CommonActions.goBack())
  }
  function handleIncrement() {
    setQuantity(quantity + 1)
  }

  function handleDecrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    } else {
      setQuantity(0)
    }
  }
  return (
    <VStack>
      <Header goBack={handleGoBack} title="Pedido" />
      <ScrollView px={8}>
        <AspectRatio>
          <Image
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1661756522906-5df7ee690868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
            }}
            alt="coffe"
            rounded={8}
          />
        </AspectRatio>
        <HStack
          py={4}
          borderBottomWidth={2}
          borderBottomColor={'gray.300'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <VStack>
            <Text fontSize="2xl" fontFamily="text" fontWeight="700">
              Drink
            </Text>
            <Text fontSize="md" fontFamily="text" fontWeight="400">
              R$ 5.00
            </Text>
          </VStack>
          <HStack>
            <Pressable onPress={handleDecrement}>
              <Center
                borderWidth={1}
                borderColor={'green.500'}
                padding={2}
                borderRadius={8}
              >
                <FontAwesomeIcon icon={faMinus} size={16} color="#22c55e" />
              </Center>
            </Pressable>
            <Text fontSize="xl" fontFamily="text" fontWeight="700" px={4}>
              {quantity}
            </Text>
            <Pressable onPress={handleIncrement}>
              <Center
                borderWidth={1}
                borderColor={'green.500'}
                padding={2}
                borderRadius={8}
              >
                <FontAwesomeIcon icon={faPlus} size={16} color="#22c55e" />
              </Center>
            </Pressable>
          </HStack>
        </HStack>
        <VStack
          py={4}
          borderBottomWidth={2}
          borderBottomColor={'gray.300'}
          space={2}
        >
          <Text fontSize="md" fontFamily="text" fontWeight="700">
            Disponível
          </Text>
          <HStack space={4}>
            <TemperatureButton title="Quente" isHot />
            <TemperatureButton title="Gelado" />
          </HStack>
        </VStack>
        <VStack
          py={4}
          borderBottomWidth={2}
          borderBottomColor={'gray.300'}
          space={2}
        >
          <Text fontSize="md" fontFamily="text" fontWeight="700">
            Tamanho
          </Text>
          <HStack space={4}>
            <SizeButton title="Pequeno" size={18} price="Free" />
            <SizeButton title="Médio" size={24} price="+ R$ 1.00" />
            <SizeButton title="Grande" size={36} price="+ R$ 2.00" />
          </HStack>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
