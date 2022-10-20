export const schema = gql`
  type Scan {
    id: String!
    longitude: Float
    latitude: Float
    park: Park!
    parkId: String!
  }

  type Query {
    scans: [Scan!]! @requireAuth
    scan(id: String!): Scan @requireAuth
  }

  input CreateScanInput {
    longitude: Float
    latitude: Float
    parkId: String!
  }

  input UpdateScanInput {
    longitude: Float
    latitude: Float
    parkId: String
  }

  type Mutation {
    createScan(input: CreateScanInput!): Scan! @requireAuth
    updateScan(id: String!, input: UpdateScanInput!): Scan! @requireAuth
    deleteScan(id: String!): Scan! @requireAuth
  }
`
