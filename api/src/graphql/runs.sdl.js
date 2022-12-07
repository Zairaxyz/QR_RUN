export const schema = gql`
  type Run {
    id: String!
    startTimeStamp: DateTime
    stopTimeStamp: DateTime
    totalDistance: Float
    pace: Float
    user: User!
    userId: String!
    park: Park!
    parkId: String!
  }

  type Query {
    runs: [Run!]! @requireAuth
    run(id: String!): Run @requireAuth
  }

  input CreateRunInput {
    startTimeStamp: DateTime
    stopTimeStamp: DateTime
    totalDistance: Float
    pace: Float
    userId: String!
    parkId: String!
  }

  input UpdateRunInput {
    startTimeStamp: DateTime
    stopTimeStamp: DateTime
    totalDistance: Float
    pace: Float
    userId: String
    parkId: String
  }

  type Mutation {
    createRun(input: CreateRunInput!): Run! @requireAuth
    updateRun(id: String!, input: UpdateRunInput!): Run! @requireAuth
    deleteRun(id: String!): Run! @requireAuth
    # checkInRunner(userId: String!, checkpointId: String!): Boolean @skipAuth
  }
`
