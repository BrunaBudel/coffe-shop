import { Text, VStack, Image, HStack, Box } from 'native-base'

import Location from '@assets/location.svg'
import Star from '@assets/star.svg'

export function CoffeeShopCard({ name, distance, rate, img }: ICoffeeShops) {
  return (
    <VStack flex={1} justifyContent="center" space={1}>
      <Box>
        <Image
          source={{
            uri: `${img}`,
          }}
          alt="coffe"
          size="xl"
          borderRadius={12}
        />
        <HStack
          space={1}
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={2}
          left={2}
          bg="gray.500"
          borderRadius={4}
          p={1}
        >
          <Star width={12} height={12} />
          <Text fontSize="sm" fontFamily="text" fontWeight="700" color="white">
            {rate}
          </Text>
        </HStack>
      </Box>
      <Text fontSize="md" fontFamily="text" fontWeight="700" color="black">
        {name}
      </Text>
      <HStack>
        <Location width={20} height={20} />
        <Text fontSize="sm" fontFamily="text" fontWeight="400" color="black">
          {distance}
        </Text>
      </HStack>
    </VStack>
  )
}
