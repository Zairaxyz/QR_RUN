export const standard = defineScenario({
  log: {
    one: {
      data: {
        time_stamp: '2022-11-08T07:32:31Z',
        user: {
          create: {
            email: 'String693535',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        scanner: { create: { park: { create: {} } } },
      },
    },

    two: {
      data: {
        time_stamp: '2022-11-08T07:32:31Z',
        user: {
          create: {
            email: 'String6390436',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        scanner: { create: { park: { create: {} } } },
      },
    },
  },
})
