import { logs, log, createLog, updateLog, deleteLog } from './logs'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('logs', () => {
  scenario('returns all logs', async (scenario) => {
    const result = await logs()

    expect(result.length).toEqual(Object.keys(scenario.log).length)
  })

  scenario('returns a single log', async (scenario) => {
    const result = await log({ id: scenario.log.one.id })

    expect(result).toEqual(scenario.log.one)
  })

  scenario('creates a log', async (scenario) => {
    const result = await createLog({
      input: {
        userId: scenario.log.two.userId,
        scannerId: scenario.log.two.scannerId,
        time_stamp: '2022-11-08T07:32:31Z',
      },
    })

    expect(result.userId).toEqual(scenario.log.two.userId)
    expect(result.scannerId).toEqual(scenario.log.two.scannerId)
    expect(result.time_stamp).toEqual('2022-11-08T07:32:31Z')
  })

  scenario('updates a log', async (scenario) => {
    const original = await log({ id: scenario.log.one.id })
    const result = await updateLog({
      id: original.id,
      input: { time_stamp: '2022-11-09T07:32:31Z' },
    })

    expect(result.time_stamp).toEqual('2022-11-09T07:32:31Z')
  })

  scenario('deletes a log', async (scenario) => {
    const original = await deleteLog({ id: scenario.log.one.id })
    const result = await log({ id: original.id })

    expect(result).toEqual(null)
  })
})
