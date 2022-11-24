export const schema = gql`
  type PathCheckpoint {
    id: String!
    checkpointId: String!
    # checkpoint: Checkpoint!
    prevCheckpointId: String
    # prevCheckpoint: Checkpoint
    isStart: Boolean!
    isFinish: Boolean!
    parkId: String!
    park: Park!
    pathId: String!
    path: Path!
  }

  type Query {
    pathCheckpoints: [PathCheckpoint!]! @requireAuth
    pathCheckpoint(id: String!): PathCheckpoint @requireAuth
  }

  input CreatePathCheckpointInput {
    checkpointId: String!
    prevCheckpointId: String
    isStart: Boolean!
    isFinish: Boolean!
    parkId: String!
    pathId: String!
  }

  input UpdatePathCheckpointInput {
    checkpointId: String
    prevCheckpointId: String
    isStart: Boolean
    isFinish: Boolean
    parkId: String
    pathId: String
  }

  type Mutation {
    createPathCheckpoint(input: CreatePathCheckpointInput!): PathCheckpoint!
      @requireAuth
    updatePathCheckpoint(
      id: String!
      input: UpdatePathCheckpointInput!
    ): PathCheckpoint! @requireAuth
    deletePathCheckpoint(id: String!): PathCheckpoint! @requireAuth
  }
`
