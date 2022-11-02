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
    Run: [Run]!
    Log: [Log]!
    Lap: [Lap]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
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
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
