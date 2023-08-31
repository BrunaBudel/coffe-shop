import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Text, VStack, Image, HStack, Avatar } from 'native-base'

export function Comment() {
  return (
    <VStack space={2} paddingBottom={8}>
      <HStack alignItems={'center'} justifyContent={'space-between'}>
        <HStack space={2}>
          <Avatar
            bg="cyan.500"
            source={{
              uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}
          >
            TE
          </Avatar>
          <VStack>
            <Text fontSize="lg" fontFamily="text" fontWeight="700">
              Thiago
            </Text>
            <Text
              fontSize="sm"
              fontFamily="text"
              fontWeight="400"
              color={'gray.400'}
            >
              5 dias atrás
            </Text>
          </VStack>
        </HStack>
        <HStack>
          {[1, 2, 3, 4].map((item) => (
            <FontAwesomeIcon icon={faStar} key={item} color="#eab308" />
          ))}
          <FontAwesomeIcon icon={faStarHalfStroke} color="#eab308" />
        </HStack>
      </HStack>
      <Text fontSize="sm" fontFamily="text" fontWeight="400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
        placeat reprehenderit officiis nisi, facilis tenetur quia 👍🏻
      </Text>
      <HStack space={2} alignItems={'baseline'}>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          alt="coffee"
          h={100}
          w={50}
          borderRadius={8}
        />
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          alt="coffee"
          h={35}
          w={20}
          borderRadius={8}
        />
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          alt="coffee"
          h={93}
          w={30}
          borderRadius={8}
        />
      </HStack>
    </VStack>
  )
}
