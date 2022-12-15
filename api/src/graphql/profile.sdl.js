export const schema = gql`
  type Profile {
    id: String!
    firstName: String
    lastName: String
    gender: String
  }
  type Query {
    profile: Profile @skipAuth
  }

  input UpdateProfileInput {
    firstName: String
    lastName: String
    gender: String
  }
  type Mutation {
    updateProfile(input: UpdateProfileInput!): User! @requireAuth(roles: ["user","admin"])
  }
`
