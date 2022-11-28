export const standard = defineScenario({
  lap: {
    one: {
      data: {
        user: {
          create: {
            email: 'String5306048',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        path: {
          create: {
            name: 'String',
            distance: 642290.8792631987,
            park: { create: {} },
          },
        },
      },
    },

    two: {
      data: {
        user: {
          create: {
            email: 'String3320563',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        path: {
          create: {
            name: 'String',
            distance: 4036874.3457263,
            park: { create: {} },
          },
        },
      },
    },
  },
})
