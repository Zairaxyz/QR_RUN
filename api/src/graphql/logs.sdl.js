export const schema = gql`
  type Log {
    id: String!
    time_stamp: DateTime
    user: User!
    userId: String!
    scanner: Scanner!
    scannerId: String!
  }

  type Query {
    logs: [Log!]! @requireAuth
    log(id: String!): Log @requireAuth
  }

  input CreateLogInput {
    time_stamp: DateTime
    userId: String!
    scannerId: String!
  }

  input UpdateLogInput {
    time_stamp: DateTime
    userId: String
    scannerId: String
  }

  type Mutation {
    createLog(input: CreateLogInput!): Log! @requireAuth
    updateLog(id: String!, input: UpdateLogInput!): Log! @requireAuth
    deleteLog(id: String!): Log! @requireAuth
  }
`
