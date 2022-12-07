export const schema = gql`
  type User {
    id: String!
    firstName: String
    lastName: String
    gender: String
    dateOfBirth: DateTime
    imageUrl: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
    registertimestamp: DateTime
    currentCheckPoint: String
    currentRoad: String
    Run: [Run]!
    Log: [Log]!
    Lap: [Lap]!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: String!): User @skipAuth
  }

  input CreateUserInput {
    firstName: String
    lastName: String
    gender: String
    dateOfBirth: DateTime
    imageUrl: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
    registertimestamp: DateTime
    currentCheckPoint: String
    currentRoad: String
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    gender: String
    dateOfBirth: DateTime
    imageUrl: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String
    registertimestamp: DateTime
    currentCheckPoint: String
    currentRoad: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
