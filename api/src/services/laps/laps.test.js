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
        startTimeStamp: '2022-11-21T03:26:37Z',
        stopTimeStamp: '2022-11-21T03:26:37Z',
        userId: scenario.lap.two.userId,
      },
    })

    expect(result.startTimeStamp).toEqual('2022-11-21T03:26:37Z')
    expect(result.stopTimeStamp).toEqual('2022-11-21T03:26:37Z')
    expect(result.userId).toEqual(scenario.lap.two.userId)
  })

  scenario('updates a lap', async (scenario) => {
    const original = await lap({ id: scenario.lap.one.id })
    const result = await updateLap({
      id: original.id,
      input: { startTimeStamp: '2022-11-22T03:26:37Z' },
    })

    expect(result.startTimeStamp).toEqual('2022-11-22T03:26:37Z')
  })

  scenario('deletes a lap', async (scenario) => {
    const original = await deleteLap({ id: scenario.lap.one.id })
    const result = await lap({ id: original.id })

    expect(result).toEqual(null)
  })
})
