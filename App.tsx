/* eslint-disable camelcase */
import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_400Regular,
} from '@expo-google-fonts/urbanist'

import { THEME } from './src/theme'
import { Loading } from '@components/Loading'
import { Routes } from '@routes/index'

export default function App() {
  const [fontsLoaded] = useFonts({ Urbanist_700Bold, Urbanist_400Regular })
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
      {/* <Loading /> */}
    </NativeBaseProvider>
  )
}
