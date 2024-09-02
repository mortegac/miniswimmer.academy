import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';

// import { listBudgetProjects, getBudgetProject, } from '../graphql/queries';
import { createAcademyStudents } from '../graphql/mutations';



export const createEnroll = async (input) => {
  try {

    window.console.log('>>>>>>>>>>input: ', input)

    const response = await API.graphql(graphqlOperation(
      createAcademyStudents,
      { input }
      // { input: { ...input } }
    ));

    window.console.log('>>>>>>>>>>createAcademyStudents: ', response)
    return response;
    // return []

  } catch (error) {
    console.log('error: ', error)

    return []
  }
}




