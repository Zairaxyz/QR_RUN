export const standard = defineScenario({
  lap: {
    one: {
      data: {
        startTime: '2022-11-24T09:48:09Z',
        stopTimee: '2022-11-24T09:48:09Z',
        user: {
          create: {
            email: 'String5395937',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        path: {
          create: {
            name: 'String',
            distance: 4616839.847700116,
            park: { create: {} },
          },
        },
      },
    },

    two: {
      data: {
        startTime: '2022-11-24T09:48:09Z',
        stopTimee: '2022-11-24T09:48:09Z',
        user: {
          create: {
            email: 'String3213409',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        path: {
          create: {
            name: 'String',
            distance: 6631106.838188796,
            park: { create: {} },
          },
        },
      },
    },
  },
})
