export const schema = gql`
  type RouteScanner {
    id: String!
    after: String!
    before: String!
    total_distance: Float!
    is_start: Boolean!
    is_finish: Boolean!
    parkId: String!
    park: Park!
    Lap: [Lap]!
  }

  type Query {
    routeScanners: [RouteScanner!]! @requireAuth
    routeScanner(id: String!): RouteScanner @requireAuth
  }

  input CreateRouteScannerInput {
    after: String!
    before: String!
    total_distance: Float!
    is_start: Boolean!
    is_finish: Boolean!
    parkId: String!
  }

  input UpdateRouteScannerInput {
    after: String
    before: String
    total_distance: Float
    is_start: Boolean
    is_finish: Boolean
    parkId: String
  }

  type Mutation {
    createRouteScanner(input: CreateRouteScannerInput!): RouteScanner!
      @requireAuth
    updateRouteScanner(
      id: String!
      input: UpdateRouteScannerInput!
    ): RouteScanner! @requireAuth
    deleteRouteScanner(id: String!): RouteScanner! @requireAuth
  }
`
