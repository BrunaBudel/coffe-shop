import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Text, VStack, Image, HStack, Avatar, FlatList } from 'native-base'

interface CommentProps {
  data: IComment
}
export const Comment: React.FC<CommentProps> = ({ data }) => {
  return (
    <VStack space={2} paddingBottom={8}>
      <HStack alignItems={'center'} justifyContent={'space-between'}>
        <HStack space={2}>
          <Avatar
            bg="cyan.500"
            source={{
              uri: data.avatarImg,
            }}
          >
            TE
          </Avatar>
          <VStack>
            <Text fontSize="lg" fontFamily="text" fontWeight="700">
              {data.username}
            </Text>
            <Text
              fontSize="sm"
              fontFamily="text"
              fontWeight="400"
              color={'gray.400'}
            >
              {data.timePassed}
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
        {data.comment}
      </Text>
      <FlatList
        data={data.images}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            alt="coffee"
            h={Math.floor(Math.random() * 150 + Math.ceil(100))}
            w={Math.floor(Math.random() * 100 + Math.ceil(80))}
            borderRadius={8}
            marginRight={4}
          />
        )}
        keyExtractor={(index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        paddingLeft={8}
        paddingTop={3}
      />
    </VStack>
  )
}
