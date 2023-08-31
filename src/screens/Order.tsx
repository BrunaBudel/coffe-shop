import { Header } from '@components/Header'
import { CommonActions } from '@react-navigation/native'
import { Center, HStack, ScrollView, Text, VStack, View } from 'native-base'

export function Order({ navigation }) {
  function handleGoBack() {
    navigation.dispatch(CommonActions.goBack())
  }
  return (
    <VStack>
      <Header goBack={handleGoBack} title="Pedido" />
      <ScrollView px={8}></ScrollView>
    </VStack>
  )
}
