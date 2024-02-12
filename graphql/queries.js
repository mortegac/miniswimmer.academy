export const listBudgetProjects = /* GraphQL */ `
  query ListBudgetProjects(
    $filter: ModelBudgetProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBudgetProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        date
        day
        month
        year
        status
        typeOfVehicle {
          items{
            id
            type
            amount
            anualSpent
            averageDistance
            dayDetention
            nightDetention
            
          }
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;


export const getBudgetProject = /* GraphQL */ `
  query GetBudgetProject($id: ID!) {
    getBudgetProject(id: $id) {
      id
      name
      email
      date
      day
      month
      year
      status
      typeOfVehicle {
        items {
          id
          type
          amount
          anualSpent
          averageDistance
          dayDetention
          nightDetention
          createdAt
          updatedAt
          budgetProjectTypeOfVehicleId
        }
      }
    }
  }
`;