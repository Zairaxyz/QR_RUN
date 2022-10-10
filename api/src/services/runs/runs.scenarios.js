export const standard = defineScenario({
  run: {
    one: {
      data: {
        user: {
          create: {
            email: 'String8277856',
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
            email: 'String8243869',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        park: { create: {} },
      },
    },
  },
})
