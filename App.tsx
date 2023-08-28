/* eslint-disable camelcase */
import { Text, View, StatusBar } from 'react-native'
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_400Regular,
} from '@expo-google-fonts/dev'

export default function App() {
  const [fontsLoaded] = useFonts({ Urbanist_700Bold, Urbanist_400Regular })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <Text>Open up App.tsx to start working on your app!</Text>
      ) : (
        <View />
      )}
    </View>
  )
}
