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
  }

  type Query {
    parks: [Park!]! @requireAuth
    park(id: String!): Park @requireAuth
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
