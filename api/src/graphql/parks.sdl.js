export const schema = gql`
  type Park {
    id: String!
    park_name: String
    image_url: String
    description: String
    address: String
    working_time: JSON
    Run: [Run]!
    Scanner: [Scanner]!
    Routescanner: [Routescanner]!
  }

  type Query {
    parks: [Park!]! @skipAuth
    park(id: String!): Park @skipAuth
  }

  input CreateParkInput {
    park_name: String
    image_url: String
    description: String
    address: String
    working_time: JSON
  }

  input UpdateParkInput {
    park_name: String
    image_url: String
    description: String
    address: String
    working_time: JSON
  }

  type Mutation {
    createPark(input: CreateParkInput!): Park! @requireAuth
    updatePark(id: String!, input: UpdateParkInput!): Park! @requireAuth
    deletePark(id: String!): Park! @requireAuth
  }
`
