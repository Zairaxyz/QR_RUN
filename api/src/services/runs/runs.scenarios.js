export const standard = defineScenario({
  run: {
    one: {
      data: {
        park: { create: {} },
        user: {
          create: {
            email: 'String1320934',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },

    two: {
      data: {
        park: { create: {} },
        user: {
          create: {
            email: 'String561070',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
