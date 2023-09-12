import { Header } from '@components/Header'
import { api } from '../lib/axios'
import { CommonActions } from '@react-navigation/native'
import { FlatList, StatusBar, VStack } from 'native-base'
import { useState } from 'react'
import { EmployeesCard } from '@components/EmployeesCard'

export function EmployeesList({ navigation }: { navigation: any }) {
  const [employees, setEmployees] = useState<IApiResponse | null>(null)

  async function fetchEmployees() {
    const response = await api.get('user')

    setEmployees(response.data)
  }
  fetchEmployees()
  function handleGoBack() {
    navigation.dispatch(CommonActions.goBack())
  }
  return (
    <VStack>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header goBack={handleGoBack} title="Nossos colaboradores" />
      <FlatList
        data={employees?.data}
        renderItem={({ item }) => <EmployeesCard data={item} />}
        keyExtractor={employees?.data.id}
        showsHorizontalScrollIndicator={false}
        paddingLeft={8}
        paddingTop={3}
        paddingBottom={200}
      />
    </VStack>
  )
}
