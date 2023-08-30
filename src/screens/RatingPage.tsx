import { Header } from '@components/Header'
import { RatingAverage } from '@components/RatingAverage'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { CommonActions } from '@react-navigation/native'
import { Center, HStack, ScrollView, Text, VStack, View } from 'native-base'
import { GalleryImages } from '@mocks/index.ts'

export function RatingPage({ navigation }) {
  function handleGoBack() {
    navigation.dispatch(CommonActions.goBack())
  }
  return (
    <VStack>
      <Header goBack={handleGoBack} />
      <ScrollView px={8}>
        <HStack
          borderBottomWidth={2}
          borderBottomColor={'gray.300'}
          paddingBottom={4}
          marginTop={8}
        >
          <Center justifyContent={'space-between'} w={'1/2'}>
            <Text fontSize="5xl" fontFamily="text" fontWeight="700">
              4.5
            </Text>
            <HStack>
              {[1, 2, 3, 4].map((item) => (
                <FontAwesomeIcon icon={faStar} key={item} color="#eab308" />
              ))}
              <FontAwesomeIcon icon={faStarHalfStroke} color="#eab308" />
            </HStack>
            <Text
              fontSize="md"
              fontFamily="text"
              fontWeight="400"
              color="gray.400"
            >
              (2.5k avaliações)
            </Text>
          </Center>
          <VStack
            borderLeftColor={'gray.300'}
            borderLeftWidth={2}
            paddingLeft={4}
          >
            <RatingAverage starsQuantity={5} totalReviews={80} />
            <RatingAverage starsQuantity={4} totalReviews={60} />
            <RatingAverage starsQuantity={3} totalReviews={30} />
            <RatingAverage starsQuantity={2} totalReviews={40} />
            <RatingAverage starsQuantity={1} totalReviews={10} />
          </VStack>
        </HStack>
      </ScrollView>
    </VStack>
  )
}
