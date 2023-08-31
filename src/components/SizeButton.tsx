import { Text, Pressable, Center } from 'native-base'

import Cup from '@assets/coffee-cups.svg'

export function SizeButton({
  title,
  size,
  price,
}: {
  title: string
  size: number
  price: string
}) {
  return (
    <Pressable>
      <Center
        borderWidth={1}
        borderColor={'gray.300'}
        py={4}
        px={2}
        borderRadius={8}
        h={32}
        w={20}
        justifyContent={'space-between'}
      >
        <Cup width={size} height={size} />
        <Text fontSize="sm" fontFamily="text" fontWeight="700">
          {title}
        </Text>
        <Text
          fontSize="xs"
          fontFamily="text"
          fontWeight="400"
          color={'gray.400'}
        >
          {price}
        </Text>
      </Center>
    </Pressable>
  )
}
