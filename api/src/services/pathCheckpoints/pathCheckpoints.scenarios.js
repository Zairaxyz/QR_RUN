export const standard = defineScenario({
  pathCheckpoint: {
    one: {
      data: {
        isStart: true,
        isFinish: true,
        checkpoint: { create: { name: 'String', park: { create: {} } } },
        park: { create: {} },
        path: {
          create: {
            name: 'String',
            distance: 8502852.981811106,
            park: { create: {} },
          },
        },
      },
    },

    two: {
      data: {
        isStart: true,
        isFinish: true,
        checkpoint: { create: { name: 'String', park: { create: {} } } },
        park: { create: {} },
        path: {
          create: {
            name: 'String',
            distance: 2927275.3442234634,
            park: { create: {} },
          },
        },
      },
    },
  },
})
