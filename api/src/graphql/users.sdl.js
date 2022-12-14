export const schema = gql`
  type User {
    id: String!
    gender: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
    dateOfBirth: DateTime
    firstName: String
    imageUrl: String
    lastName: String
    currentCheckpoint: String
    createdAt: DateTime
    Run: [Run]!
    Log: [Log]!
    Lap: [Lap]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    gender: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
    dateOfBirth: DateTime
    firstName: String
    imageUrl: String
    lastName: String
    currentCheckpoint: String
  }

  input UpdateUserInput {
    gender: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String
    dateOfBirth: DateTime
    firstName: String
    imageUrl: String
    lastName: String
    currentCheckpoint: String
  }

  input UpdateUserProfile {
    firstName: String!
    lastName: String!
    imageUrl: String!
    gender: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
    updateRoleUser(id: String!, role: String!): User! @requireAuth
    updateProfile(id: String!, input: UpdateUserProfile!): User! @skipAuth
  }
`
