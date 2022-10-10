export const schema = gql`
  type User {
    id: String!
    firstname: String
    lastname: String
    gender: String
    dateofbirth: DateTime
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
    registertimestamp: DateTime
    Run: [Run]!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: String!): User @skipAuth
  }

  input CreateUserInput {
    firstname: String
    lastname: String
    gender: String
    dateofbirth: DateTime
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
    registertimestamp: DateTime
  }

  input UpdateUserInput {
    firstname: String
    lastname: String
    gender: String
    dateofbirth: DateTime
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
