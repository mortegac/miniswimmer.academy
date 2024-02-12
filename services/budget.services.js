import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';

import { listBudgetProjects, getBudgetProject, } from '../graphql/queries';
import { createBudgetProject, createTypeOfVehicle } from '../graphql/mutations';



export const createBudget = async (input) => {
  try {

    window.console.log('>>>>>>>>>>input: ', input)

    const response = await API.graphql(graphqlOperation(
      createBudgetProject,
      { input }
      // { input: { ...input } }
    ));

    window.console.log('>>>>>>>>>>createBudgetProject: ', response)
    return response;
    // return []

  } catch (error) {
    console.log('error: ', error)

    return []
  }
}
export const createType = async (input) => {
  try {

    window.console.log('>>>>>>>>>>input: ', input)

    const response = await API.graphql(graphqlOperation(
      createTypeOfVehicle,
      { input }
      // { input: { ...input } }
    ));

    window.console.log('>>>>>>>>>>createTypeOfVehicle: ', response)
    return response;
    // return []

  } catch (error) {
    console.log('error: ', error)

    return []
  }
}

export const fetchBudgets = async (idBudget) => {
  try {

    // console.log('>>>>>>>>>>fetchUsers: ')
    // const filterBudget = id === '' ? {} : { id: { eq: "f04e443b-934d-4ce6-b4b2-655fd4ab0644" } };
    // id: {eq: "f04e443b-934d-4ce6-b4b2-655fd4ab0644"},
    // const filterResidence = idResidence === '' ? {} : { id: { eq: idResidence } };
    // const filterisListed = { isListed: { eq: true } };
    // const filterDetail = {
    //   filter: {
    //     id: { eq: "f04e443b-934d-4ce6-b4b2-655fd4ab0644" }
    //     // ...filterBudget
    //     // ...filterisListed,
    //     // ...filterResidence,
    //   }, // limit: parseFloat(limitFilter) 
    // }
    // console.log('>>>>>>>>>>fetchBudgets: ', filterDetail)
    // const allData = await API.graphql(
    //   {
    //     query: listBudgetProjects,
    //     variables: { ...filterDetail }
    //   }
    // );

    const allData = await API.graphql(graphqlOperation(
      getBudgetProject,
      { id: String(idBudget) }
    ));


    // window.console.log('>>>>>>>>>>allData: ', allData.data.getBudgetProject)
    // const itemsData = [...allData.data.getBudgetProject]

    // return { ...allEves }
    return { ...allData.data.getBudgetProject }


  } catch (error) {
    console.log('>>>>>>>>>>error: ', error)
    return { error }
  }
}



