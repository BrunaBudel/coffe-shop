import { Text, VStack, Image, Box, Pressable, HStack } from 'native-base'

interface IEmployeesCardProps {
  data: IEmployee
}

export const EmployeesCard: React.FC<IEmployeesCardProps> = ({ data }) => {
  return (
    <Box>
      <Pressable>
        <HStack alignItems="center" space={4} minWidth={120} marginTop={2}>
          <Image
            source={{
              uri: data?.picture,
            }}
            alt="employees"
            size={75}
            borderRadius={'100%'}
          />
          <Text fontSize="md" fontFamily="text" fontWeight="700" color="black">
            {data?.firstName} {data?.lastName}
          </Text>
        </HStack>
      </Pressable>
    </Box>
  )
}
