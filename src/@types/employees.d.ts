interface IEmployee {
  firstName: string
  id: string
  lastName: string
  picture: string
  title: string
}

interface IApiResponse {
  data: Employee[]
  limit: number
  page: number
  total: number
}
