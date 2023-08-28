/* eslint-disable camelcase */
import { View, StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_400Regular,
} from '@expo-google-fonts/dev'

import { THEME } from './src/theme'
import { Loading } from '@components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({ Urbanist_700Bold, Urbanist_400Regular })
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {/* {fontsLoaded ? <View /> : <View />} */}
      <Loading />
    </NativeBaseProvider>
  )
}
