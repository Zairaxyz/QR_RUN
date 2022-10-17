export const standard = defineScenario({
  run: {
    one: {
      data: {
        user: {
          create: {
            email: 'String2218005',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        park: { create: {} },
      },
    },

    two: {
      data: {
        user: {
          create: {
            email: 'String1398298',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        park: { create: {} },
      },
    },
  },
})
