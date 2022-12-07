export const standard = defineScenario({
  log: {
    one: {
      data: {
        timeStamp: '2022-11-21T03:26:05Z',
        user: {
          create: {
            email: 'String8009268',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        checkPoint: { create: { park: { create: {} } } },
      },
    },

    two: {
      data: {
        timeStamp: '2022-11-21T03:26:05Z',
        user: {
          create: {
            email: 'String486612',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        checkPoint: { create: { park: { create: {} } } },
      },
    },
  },
})
