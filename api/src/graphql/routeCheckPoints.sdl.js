export const schema = gql`
  type RouteCheckPoint {
    id: String!
    checkPoint: String!
    before: String!
    total_distance: Float!
    is_start: Boolean!
    is_finish: Boolean!
    parkId: String!
    park: Park!
  }

  type Query {
    routeCheckPoints: [RouteCheckPoint!]! @requireAuth
    routeCheckPoint(id: String!): RouteCheckPoint @requireAuth
  }

  input CreateRouteCheckPointInput {
    checkPoint: String!
    before: String!
    total_distance: Float!
    is_start: Boolean!
    is_finish: Boolean!
    parkId: String!
  }

  input UpdateRouteCheckPointInput {
    checkPoint: String
    before: String
    total_distance: Float
    is_start: Boolean
    is_finish: Boolean
    parkId: String
  }

  type Mutation {
    createRouteCheckPoint(input: CreateRouteCheckPointInput!): RouteCheckPoint!
      @requireAuth
    updateRouteCheckPoint(
      id: String!
      input: UpdateRouteCheckPointInput!
    ): RouteCheckPoint! @requireAuth
    deleteRouteCheckPoint(id: String!): RouteCheckPoint! @requireAuth
  }
`
