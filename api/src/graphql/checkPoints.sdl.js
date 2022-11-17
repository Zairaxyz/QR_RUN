export const schema = gql`
  type CheckPoint {
    id: String!
    park: Park!
    parkId: String!
    longitude: Float
    latitude: Float
    Log: [Log]!
  }

  type Query {
    checkPoints: [CheckPoint!]! @requireAuth
    checkPoint(id: String!): CheckPoint @requireAuth
  }

  input CreateCheckPointInput {
    parkId: String!
    longitude: Float
    latitude: Float
  }

  input UpdateCheckPointInput {
    parkId: String
    longitude: Float
    latitude: Float
  }

  type Mutation {
    createCheckPoint(input: CreateCheckPointInput!): CheckPoint! @requireAuth
    updateCheckPoint(id: String!, input: UpdateCheckPointInput!): CheckPoint!
      @requireAuth
    deleteCheckPoint(id: String!): CheckPoint! @requireAuth
  }
`
