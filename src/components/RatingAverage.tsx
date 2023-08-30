import { HStack, Text, Progress } from 'native-base'

interface IRatingAverageProps {
  starsQuantity: number
  totalReviews: number
}

export function RatingAverage({
  starsQuantity,
  totalReviews,
}: IRatingAverageProps) {
  return (
    <HStack alignItems={'center'} space={4}>
      <Text fontSize="lg" fontFamily="text" fontWeight="700">
        {starsQuantity}
      </Text>
      <Progress colorScheme="green" value={totalReviews} size={'sm'} w={125} />
    </HStack>
  )
}
