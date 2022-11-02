export const schema = gql`
  type Routescanner {
    id: String!
    scanner: String
    before: String
    total_distance: Float
    is_start: Boolean
    is_stop: Boolean
    park: Park!
    parkId: String!
  }

  type Query {
    routescanners: [Routescanner!]! @requireAuth
    routescanner(id: String!): Routescanner @requireAuth
  }

  input CreateRoutescannerInput {
    scanner: String
    before: String
    total_distance: Float
    is_start: Boolean
    is_stop: Boolean
    parkId: String!
  }

  input UpdateRoutescannerInput {
    scanner: String
    before: String
    total_distance: Float
    is_start: Boolean
    is_stop: Boolean
    parkId: String
  }

  type Mutation {
    createRoutescanner(input: CreateRoutescannerInput!): Routescanner!
      @requireAuth
    updateRoutescanner(
      id: String!
      input: UpdateRoutescannerInput!
    ): Routescanner! @requireAuth
    deleteRoutescanner(id: String!): Routescanner! @requireAuth
  }
`
