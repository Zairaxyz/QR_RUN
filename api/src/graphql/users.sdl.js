export const schema = gql`
  type User {
    id: String!
    firstName: String
    lastName: String
    gender: String
    dateOfBirth: DateTime
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    imageUrl: String
    resetTokenExpiresAt: DateTime
    roles: String!
    registerTimesTamp: DateTime
    Run: [Run]!
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
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    imageUrl: String
    resetTokenExpiresAt: DateTime
    roles: String!
    registerTimesTamp: DateTime
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    gender: String
    dateOfBirth: DateTime
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    imageUrl: String
    resetTokenExpiresAt: DateTime
    roles: String
    registerTimesTamp: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
