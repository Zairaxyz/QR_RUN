import {
  checkPoints,
  checkPoint,
  createCheckPoint,
  updateCheckPoint,
  deleteCheckPoint,
} from './checkPoints'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('checkPoints', () => {
  scenario('returns all checkPoints', async (scenario) => {
    const result = await checkPoints()

    expect(result.length).toEqual(Object.keys(scenario.checkPoint).length)
  })

  scenario('returns a single checkPoint', async (scenario) => {
    const result = await checkPoint({ id: scenario.checkPoint.one.id })

    expect(result).toEqual(scenario.checkPoint.one)
  })

  scenario('creates a checkPoint', async (scenario) => {
    const result = await createCheckPoint({
      input: { parkId: scenario.checkPoint.two.parkId },
    })

    expect(result.parkId).toEqual(scenario.checkPoint.two.parkId)
  })

  scenario('updates a checkPoint', async (scenario) => {
    const original = await checkPoint({
      id: scenario.checkPoint.one.id,
    })

    const result = await updateCheckPoint({
      id: original.id,
      input: { parkId: scenario.checkPoint.two.parkId },
    })

    expect(result.parkId).toEqual(scenario.checkPoint.two.parkId)
  })

  scenario('deletes a checkPoint', async (scenario) => {
    const original = await deleteCheckPoint({
      id: scenario.checkPoint.one.id,
    })

    const result = await checkPoint({ id: original.id })

    expect(result).toEqual(null)
  })
})
