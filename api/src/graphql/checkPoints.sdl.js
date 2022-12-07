export const schema = gql`
  type CheckPoint {
    id: String!
    longitude: Float
    latitude: Float
    park: Park!
    parkId: String!
    Log: [Log]!
  }

  type Query {
    checkPoints: [CheckPoint!]! @requireAuth
    checkPoint(id: String!): CheckPoint @requireAuth
  }

  input CreateCheckPointInput {
    longitude: Float
    latitude: Float
    parkId: String!
  }

  input UpdateCheckPointInput {
    longitude: Float
    latitude: Float
    parkId: String
  }

  type Mutation {
    createCheckPoint(input: CreateCheckPointInput!): CheckPoint! @requireAuth
    updateCheckPoint(id: String!, input: UpdateCheckPointInput!): CheckPoint!
      @requireAuth
    deleteCheckPoint(id: String!): CheckPoint! @requireAuth
  }
`
