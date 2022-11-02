export const standard = defineScenario({
  run: {
    one: {
      data: {
        user: {
          create: {
            email: 'String1165061',
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
            email: 'String8545663',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        park: { create: {} },
      },
    },
  },
})
