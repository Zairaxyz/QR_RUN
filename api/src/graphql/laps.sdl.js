export const schema = gql`
  type Lap {
    id: String!
    start_timestamp: DateTime
    stop_timestamp: DateTime
    user: User!
    userId: String!
  }

  type Query {
    laps: [Lap!]! @requireAuth
    lap(id: String!): Lap @requireAuth
  }

  input CreateLapInput {
    start_timestamp: DateTime
    stop_timestamp: DateTime
    userId: String!
  }

  input UpdateLapInput {
    start_timestamp: DateTime
    stop_timestamp: DateTime
    userId: String
  }

  type Mutation {
    createLap(input: CreateLapInput!): Lap! @requireAuth
    updateLap(id: String!, input: UpdateLapInput!): Lap! @requireAuth
    deleteLap(id: String!): Lap! @requireAuth
  }
`
