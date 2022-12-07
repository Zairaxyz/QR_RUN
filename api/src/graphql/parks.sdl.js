export const schema = gql`
  type Park {
    id: String!
    parkName: String
    imageUrl: String
    description: String
    address: String
    workingTime: JSON
    Run: [Run]!
    CheckPoint: [CheckPoint]!
    RouteCheckPoint: [RouteCheckPoint]!
  }

  type Query {
    parks: [Park!]! @skipAuth
    park(id: String!): Park @skipAuth
  }

  input CreateParkInput {
    parkName: String
    imageUrl: String
    description: String
    address: String
    workingTime: JSON
  }

  input UpdateParkInput {
    parkName: String
    imageUrl: String
    description: String
    address: String
    workingTime: JSON
  }

  type Mutation {
    createPark(input: CreateParkInput!): Park! @requireAuth
    updatePark(id: String!, input: UpdateParkInput!): Park! @requireAuth
    deletePark(id: String!): Park! @requireAuth
  }
`
