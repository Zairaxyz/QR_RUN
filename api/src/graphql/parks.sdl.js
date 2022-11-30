export const schema = gql`
  type Park {
    id: String!
    name: String
    imageUrl: String
    description: String
    address: String
    workingHours: JSON
    Run: [Run]!
    Checkpoint: [Checkpoint]!
    Path: [Path]!
  }

  type Query {
    parks: [Park!]! @requireAuth
    park(id: String!): Park @requireAuth
  }

  input CreateParkInput {
    name: String
    imageUrl: String
    description: String
    address: String
    workingHours: JSON
  }

  input UpdateParkInput {
    name: String
    imageUrl: String
    description: String
    address: String
    workingHours: JSON
  }

  type Mutation {
    createPark(input: CreateParkInput!): Park! @requireAuth
    updatePark(id: String!, input: UpdateParkInput!): Park! @requireAuth
    deletePark(id: String!): Park! @requireAuth
  }
`
