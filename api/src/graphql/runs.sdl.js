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
    runs: [Run!]! @requireAuth
    run(id: String!): Run @requireAuth
    findFirstRun(userId: String!): [Run!]! @requireAuth
    findTotalOfSumRun(userId: String!): Boolean! @skipAuth
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
    createRun(input: CreateRunInput!): Run! @requireAuth
    updateRun(id: String!, input: UpdateRunInput!): Run! @requireAuth
    deleteRun(id: String!): Run! @requireAuth
  }
`
