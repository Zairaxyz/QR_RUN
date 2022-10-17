export const standard = defineScenario({
  run: {
    one: {
      data: {
        user: {
          create: {
            email: 'String9124941',
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
            email: 'String8577910',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        park: { create: {} },
      },
    },
  },
})
