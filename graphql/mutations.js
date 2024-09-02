export const createAcademyStudents = /* GraphQL */ `
  mutation CreateAcademyStudents(
    $input: CreateAcademyStudentsInput!
    $condition: ModelAcademyStudentsConditionInput
  ) {
    createAcademyStudents(input: $input, condition: $condition) {
      id
      name
      email
      birthdate
      years
      address
      phone
      profession
      studiesRelated
      medicalHistory
      emergencyContact
      isPaid
      createdAt
      updatedAt
      __typename
    }
  }
`;