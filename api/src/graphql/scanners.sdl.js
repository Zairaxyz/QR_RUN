export const schema = gql`
  type Scanner {
    id: String!
    park: Park!
    parkId: String!
    longitude: Float
    latitude: Float
    Log: [Log]!
  }

  type Query {
    scanners: [Scanner!]! @requireAuth
    scanner(id: String!): Scanner @requireAuth
  }

  input CreateScannerInput {
    parkId: String!
    longitude: Float
    latitude: Float
  }

  input UpdateScannerInput {
    parkId: String
    longitude: Float
    latitude: Float
  }

  type Mutation {
    createScanner(input: CreateScannerInput!): Scanner! @requireAuth
    updateScanner(id: String!, input: UpdateScannerInput!): Scanner!
      @requireAuth
    deleteScanner(id: String!): Scanner! @requireAuth
  }
`
