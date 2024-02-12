/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBudgetProject = /* GraphQL */ `
  mutation CreateBudgetProject(
    $input: CreateBudgetProjectInput!
    $condition: ModelBudgetProjectConditionInput
  ) {
    createBudgetProject(input: $input, condition: $condition) {
      id
      name
      email
    }
  }
`;
export const updateBudgetProject = /* GraphQL */ `
  mutation UpdateBudgetProject(
    $input: UpdateBudgetProjectInput!
    $condition: ModelBudgetProjectConditionInput
  ) {
    updateBudgetProject(input: $input, condition: $condition) {
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
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;

export const createTypeOfVehicle = /* GraphQL */ `
  mutation CreateTypeOfVehicle(
    $input: CreateTypeOfVehicleInput!
    $condition: ModelTypeOfVehicleConditionInput
  ) {
    createTypeOfVehicle(input: $input, condition: $condition) {
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
`;
export const updateTypeOfVehicle = /* GraphQL */ `
  mutation UpdateTypeOfVehicle(
    $input: UpdateTypeOfVehicleInput!
    $condition: ModelTypeOfVehicleConditionInput
  ) {
    updateTypeOfVehicle(input: $input, condition: $condition) {
      id
      typeOfVehicle {
        id
        name
        email
        date
        day
        month
        year
        status
        typeOfVehicle {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      type
      amount
      anualSpent
      averageDistance
      dayDetention
      nightDetention
      createdAt
      updatedAt
      budgetProjectTypeOfVehicleId
      __typename
    }
  }
`;
export const deleteTypeOfVehicle = /* GraphQL */ `
  mutation DeleteTypeOfVehicle(
    $input: DeleteTypeOfVehicleInput!
    $condition: ModelTypeOfVehicleConditionInput
  ) {
    deleteTypeOfVehicle(input: $input, condition: $condition) {
      id
      typeOfVehicle {
        id
        name
        email
        date
        day
        month
        year
        status
        typeOfVehicle {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      type
      amount
      anualSpent
      averageDistance
      dayDetention
      nightDetention
      createdAt
      updatedAt
      budgetProjectTypeOfVehicleId
      __typename
    }
  }
`;