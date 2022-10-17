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
    parkId: String!
  }

  type Query {
    runs: [Run!]! @requireAuth
    run(id: Int!): Run @requireAuth
  }

  input CreateRunInput {
    start_timestamp: DateTime
    stop_timestamp: DateTime
    total_distance: Float
    pace: Float
    userId: String!
    parkId: String!
  }

  input UpdateRunInput {
    start_timestamp: DateTime
    stop_timestamp: DateTime
    total_distance: Float
    pace: Float
    userId: String
    parkId: String
  }

  type Mutation {
    createRun(input: CreateRunInput!): Run! @requireAuth
    updateRun(id: Int!, input: UpdateRunInput!): Run! @requireAuth
    deleteRun(id: Int!): Run! @requireAuth
  }
`
