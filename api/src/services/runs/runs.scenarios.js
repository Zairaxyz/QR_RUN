export const standard = defineScenario({
  run: {
    one: {
      data: {
        park: { create: {} },
        user: {
          create: {
            email: 'String6902454',
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
            email: 'String2420951',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
