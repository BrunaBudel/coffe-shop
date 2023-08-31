import { Text, VStack, Image, HStack, Box, Pressable } from 'native-base'

interface ICoffeeCardProps {
  data: ICoffeeDrinks
  navigate: () => void
}

export const CoffeeCard: React.FC<ICoffeeCardProps> = ({ data, navigate }) => {
  return (
    <Box>
      <Pressable onPress={navigate}>
        <VStack justifyContent="center" space={1} minWidth={120} marginTop={2}>
          <Image
            source={{
              uri: data.img,
            }}
            alt="coffe"
            size={160}
            borderRadius={12}
          />
          <Text fontSize="md" fontFamily="text" fontWeight="700" color="black">
            {data?.name}
          </Text>
          <HStack>
            <Text
              fontSize="sm"
              fontFamily="text"
              fontWeight="700"
              color="green.500"
            >
              R$ {data?.price}
            </Text>
          </HStack>
        </VStack>
      </Pressable>
    </Box>
  )
}
