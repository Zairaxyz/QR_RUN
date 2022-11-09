export const schema = gql`
  type Lap {
    id: String!
    start_time_stamp: DateTime!
    stop_time_stamp: DateTime!
    route_scannerId: String!
    route_scanner: RouteScanner!
    userId: String!
    user: User!
  }

  type Query {
    laps: [Lap!]! @requireAuth
    lap(id: String!): Lap @requireAuth
  }

  input CreateLapInput {
    start_time_stamp: DateTime!
    stop_time_stamp: DateTime!
    route_scannerId: String!
    userId: String!
  }

  input UpdateLapInput {
    start_time_stamp: DateTime
    stop_time_stamp: DateTime
    route_scannerId: String
    userId: String
  }

  type Mutation {
    createLap(input: CreateLapInput!): Lap! @requireAuth
    updateLap(id: String!, input: UpdateLapInput!): Lap! @requireAuth
    deleteLap(id: String!): Lap! @requireAuth
  }
`
