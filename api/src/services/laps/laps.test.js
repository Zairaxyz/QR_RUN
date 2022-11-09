import { laps, lap, createLap, updateLap, deleteLap } from './laps'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('laps', () => {
  scenario('returns all laps', async (scenario) => {
    const result = await laps()

    expect(result.length).toEqual(Object.keys(scenario.lap).length)
  })

  scenario('returns a single lap', async (scenario) => {
    const result = await lap({ id: scenario.lap.one.id })

    expect(result).toEqual(scenario.lap.one)
  })

  scenario('creates a lap', async (scenario) => {
    const result = await createLap({
      input: {
        start_time_stamp: '2022-11-08T07:32:49Z',
        stop_time_stamp: '2022-11-08T07:32:49Z',
        route_scannerId: scenario.lap.two.route_scannerId,
        userId: scenario.lap.two.userId,
      },
    })

    expect(result.start_time_stamp).toEqual('2022-11-08T07:32:49Z')
    expect(result.stop_time_stamp).toEqual('2022-11-08T07:32:49Z')
    expect(result.route_scannerId).toEqual(scenario.lap.two.route_scannerId)
    expect(result.userId).toEqual(scenario.lap.two.userId)
  })

  scenario('updates a lap', async (scenario) => {
    const original = await lap({ id: scenario.lap.one.id })
    const result = await updateLap({
      id: original.id,
      input: { start_time_stamp: '2022-11-09T07:32:49Z' },
    })

    expect(result.start_time_stamp).toEqual('2022-11-09T07:32:49Z')
  })

  scenario('deletes a lap', async (scenario) => {
    const original = await deleteLap({ id: scenario.lap.one.id })
    const result = await lap({ id: original.id })

    expect(result).toEqual(null)
  })
})
