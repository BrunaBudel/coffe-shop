/* eslint-disable no-empty */
import { Component } from 'react'
import { Alert, Share } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { Circle, Pressable } from 'native-base'

class ShareBtn extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Meu git hub :)',
        title: 'Meu git hub :)',
        url: 'https://github.com/BrunaBudel',
      })

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  render() {
    return (
      <Pressable onPress={this.onShare}>
        <Circle p={2} bg={'gray.300'}>
          <FontAwesomeIcon icon={faShareNodes} size={24} color="white" />
        </Circle>
      </Pressable>
    )
  }
}

export default ShareBtn
