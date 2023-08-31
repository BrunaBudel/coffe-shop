import { Text, Pressable, Center } from 'native-base'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugHot, faSnowflake } from '@fortawesome/free-solid-svg-icons'

export function TemperatureButton({
  title,
  isHot = false,
}: {
  title: string
  isHot?: boolean
}) {
  return (
    <Pressable>
      <Center
        borderWidth={1}
        borderColor={'gray.300'}
        py={4}
        px={2}
        borderRadius={8}
        h={24}
        justifyContent={'space-between'}
      >
        {isHot ? (
          <FontAwesomeIcon icon={faMugHot} size={24} />
        ) : (
          <FontAwesomeIcon icon={faSnowflake} size={24} />
        )}
        <Text fontSize="sm" fontFamily="text" fontWeight="700">
          {title}
        </Text>
      </Center>
    </Pressable>
  )
}
