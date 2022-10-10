export const schema = gql`
  type Run {
    id: Int!
    start_timestamp: DateTime
    stop_timestamp: DateTime
    total_distance: Float
    pace: Float
    user: User!
    userId: String!
    park: Park!
    parkId: Int!
  }

  type Query {
    runs: [Run!]! @skipAuth
    run(id: Int!): Run @skipAuth
  }

  input CreateRunInput {
    start_timestamp: DateTime
    stop_timestamp: DateTime
    total_distance: Float
    pace: Float
    userId: String!
    parkId: Int!
  }

  input UpdateRunInput {
    start_timestamp: DateTime
    stop_timestamp: DateTime
    total_distance: Float
    pace: Float
    userId: String
    parkId: Int
  }

  type Mutation {
    createRun(input: CreateRunInput!): Run! @requireAuth
    updateRun(id: Int!, input: UpdateRunInput!): Run! @requireAuth
    deleteRun(id: Int!): Run! @requireAuth
  }
`
