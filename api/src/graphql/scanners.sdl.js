export const schema = gql`
  type Scanner {
    id: Int!
    park: Park!
    parkId: Int!
    longitude: Float
    latitude: Float
  }

  type Query {
    scanners: [Scanner!]! @skipAuth
    scanner(id: Int!): Scanner @skipAuth
  }

  input CreateScannerInput {
    parkId: Int!
    longitude: Float
    latitude: Float
  }

  input UpdateScannerInput {
    parkId: Int
    longitude: Float
    latitude: Float
  }

  type Mutation {
    createScanner(input: CreateScannerInput!): Scanner! @requireAuth
    updateScanner(id: Int!, input: UpdateScannerInput!): Scanner! @requireAuth
    deleteScanner(id: Int!): Scanner! @requireAuth
  }
`
