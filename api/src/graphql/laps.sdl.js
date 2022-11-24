export const schema = gql`
  type Lap {
    id: String!
    startTime: DateTime!
    stopTimee: DateTime!
    userId: String!
    user: User!
    pathId: String!
    path: Path!
  }

  type Query {
    laps: [Lap!]! @requireAuth
    lap(id: String!): Lap @requireAuth
  }

  input CreateLapInput {
    startTime: DateTime!
    stopTimee: DateTime!
    userId: String!
    pathId: String!
  }

  input UpdateLapInput {
    startTime: DateTime
    stopTimee: DateTime
    userId: String
    pathId: String
  }

  type Mutation {
    createLap(input: CreateLapInput!): Lap! @requireAuth
    updateLap(id: String!, input: UpdateLapInput!): Lap! @requireAuth
    deleteLap(id: String!): Lap! @requireAuth
  }
`
