export const schema = gql`
  type Lap {
    id: String!
    startTimeStamp: DateTime!
    stopTimeStamp: DateTime!
    user: User!
    userId: String!
  }

  type Query {
    laps: [Lap!]! @requireAuth
    lap(id: String!): Lap @requireAuth
  }

  input CreateLapInput {
    startTimeStamp: DateTime!
    stopTimeStamp: DateTime!
    userId: String!
  }

  input UpdateLapInput {
    startTimeStamp: DateTime
    stopTimeStamp: DateTime
    userId: String
  }

  type Mutation {
    createLap(input: CreateLapInput!): Lap! @requireAuth
    updateLap(id: String!, input: UpdateLapInput!): Lap! @requireAuth
    deleteLap(id: String!): Lap! @requireAuth
  }
`
