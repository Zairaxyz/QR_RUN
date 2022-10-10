export const schema = gql`
  type Park {
    id: Int!
    park_name: String
    image_url: String
    description: String
    address: String
    working_time: JSON
    Run: [Run]!
    Scanner: [Scanner]!
  }

  type Query {
    parks: [Park!]! @skipAuth
    park(id: Int!): Park @skipAuth
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
    updatePark(id: Int!, input: UpdateParkInput!): Park! @requireAuth
    deletePark(id: Int!): Park! @requireAuth
  }
`
