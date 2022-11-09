export const schema = gql`
  type Log {
    id: String!
    user: User!
    userId: String!
    scannerId: String!
    scanner: Scanner!
    time_stamp: DateTime!
  }

  type Query {
    logs: [Log!]! @requireAuth
    log(id: String!): Log @requireAuth
  }

  input CreateLogInput {
    userId: String!
    scannerId: String!
    time_stamp: DateTime!
  }

  input UpdateLogInput {
    userId: String
    scannerId: String
    time_stamp: DateTime
  }

  type Mutation {
    createLog(input: CreateLogInput!): Log! @requireAuth
    updateLog(id: String!, input: UpdateLogInput!): Log! @requireAuth
    deleteLog(id: String!): Log! @requireAuth
  }
`
