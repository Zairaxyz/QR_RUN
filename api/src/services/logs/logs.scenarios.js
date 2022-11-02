export const standard = defineScenario({
  log: {
    one: {
      data: {
        user: {
          create: {
            email: 'String7108828',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        scanner: { create: { park: { create: {} } } },
      },
    },

    two: {
      data: {
        user: {
          create: {
            email: 'String2988099',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        scanner: { create: { park: { create: {} } } },
      },
    },
  },
})
