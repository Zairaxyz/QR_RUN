export const schema = gql`
  type Log {
    id: String!
    user: User!
    userId: String!
    timeStamp: DateTime!
    checkPoint: CheckPoint!
    checkPointId: String!
  }

  type Query {
    logs: [Log!]! @requireAuth
    log(id: String!): Log @requireAuth
  }

  input CreateLogInput {
    userId: String!
    timeStamp: DateTime!
    checkPointId: String!
  }

  input UpdateLogInput {
    userId: String
    timeStamp: DateTime
    checkPointId: String
  }

  type Mutation {
    createLog(input: CreateLogInput!): Log! @requireAuth
    updateLog(id: String!, input: UpdateLogInput!): Log! @requireAuth
    deleteLog(id: String!): Log! @requireAuth
  }
`
