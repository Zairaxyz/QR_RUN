export const standard = defineScenario({
  run: {
    one: {
      data: {
        user: {
          create: {
            email: 'String2569905',
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
            email: 'String8477779',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        park: { create: {} },
      },
    },
  },
})
