import { Header } from '@components/Header'
import { CommonActions } from '@react-navigation/native'
import {
  AspectRatio,
  Center,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from 'native-base'

export function Order({ navigation }) {
  function handleGoBack() {
    navigation.dispatch(CommonActions.goBack())
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
        <HStack py={4} borderBottomWidth={2} borderBottomColor={'gray.300'}>
          <VStack>
            <Text fontSize="2xl" fontFamily="text" fontWeight="700">
              Drink
            </Text>
            <Text fontSize="md" fontFamily="text" fontWeight="400">
              R$ 5.00
            </Text>
          </VStack>
        </HStack>
      </ScrollView>
    </VStack>
  )
}
