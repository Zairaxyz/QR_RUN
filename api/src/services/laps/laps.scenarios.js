export const standard = defineScenario({
  lap: {
    one: {
      data: {
        start_time_stamp: '2022-11-08T07:32:50Z',
        stop_time_stamp: '2022-11-08T07:32:50Z',
        route_scanner: {
          create: {
            after: 'String',
            before: 'String',
            total_distance: 5652546.114079755,
            is_start: true,
            is_finish: true,
            park: { create: {} },
          },
        },

        user: {
          create: {
            email: 'String1469692',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },

    two: {
      data: {
        start_time_stamp: '2022-11-08T07:32:50Z',
        stop_time_stamp: '2022-11-08T07:32:50Z',
        route_scanner: {
          create: {
            after: 'String',
            before: 'String',
            total_distance: 3413735.09519614,
            is_start: true,
            is_finish: true,
            park: { create: {} },
          },
        },

        user: {
          create: {
            email: 'String5516762',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
