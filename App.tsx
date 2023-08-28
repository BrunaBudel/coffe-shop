/* eslint-disable camelcase */
import { Text, View, StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_400Regular,
} from '@expo-google-fonts/dev'

export default function App() {
  const [fontsLoaded] = useFonts({ Urbanist_700Bold, Urbanist_400Regular })
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <View /> : <View />}
    </NativeBaseProvider>
  )
}
