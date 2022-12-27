export const schema = gql`
  type Run {
    id: String!
    startTime: DateTime
    stopTime: DateTime
    distance: Float
    pace: Float
    userId: String!
    parkId: String!
    park: Park!
    user: User!
  }

  type Query {
    runs: [Run!]! @skipAuth
    run(id: String!): Run @skipAuth
    findCurrentRun: Run @skipAuth
    findBestPace: Run @skipAuth
    findTotalRun(userId: String!): Float! @skipAuth
    # findBestTime: Run @skipAuth
    findHistoryRun: [Run!]! @skipAuth
  }

  input CreateRunInput {
    startTime: DateTime
    stopTime: DateTime
    distance: Float
    pace: Float
    userId: String!
    parkId: String!
  }

  input UpdateRunInput {
    startTime: DateTime
    stopTime: DateTime
    distance: Float
    pace: Float
    userId: String
    parkId: String
  }

  type Mutation {
    createRun(input: CreateRunInput!): Run! @skipAuth
    updateRun(id: String!, input: UpdateRunInput!): Run! @requireAuth
    deleteRun(id: String!): Run! @requireAuth
  }
`
