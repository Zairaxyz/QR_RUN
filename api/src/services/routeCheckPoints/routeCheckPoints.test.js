import {
  routeCheckPoints,
  routeCheckPoint,
  createRouteCheckPoint,
  updateRouteCheckPoint,
  deleteRouteCheckPoint,
} from './routeCheckPoints'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('routeCheckPoints', () => {
  scenario('returns all routeCheckPoints', async (scenario) => {
    const result = await routeCheckPoints()

    expect(result.length).toEqual(Object.keys(scenario.routeCheckPoint).length)
  })

  scenario('returns a single routeCheckPoint', async (scenario) => {
    const result = await routeCheckPoint({
      id: scenario.routeCheckPoint.one.id,
    })

    expect(result).toEqual(scenario.routeCheckPoint.one)
  })

  scenario('creates a routeCheckPoint', async (scenario) => {
    const result = await createRouteCheckPoint({
      input: {
        checkPoint: 'String',
        before: 'String',
        totalDistance: 1725164.1822153574,
        isStart: true,
        isFinish: true,
        parkId: scenario.routeCheckPoint.two.parkId,
      },
    })

    expect(result.checkPoint).toEqual('String')
    expect(result.before).toEqual('String')
    expect(result.totalDistance).toEqual(1725164.1822153574)
    expect(result.isStart).toEqual(true)
    expect(result.isFinish).toEqual(true)
    expect(result.parkId).toEqual(scenario.routeCheckPoint.two.parkId)
  })

  scenario('updates a routeCheckPoint', async (scenario) => {
    const original = await routeCheckPoint({
      id: scenario.routeCheckPoint.one.id,
    })

    const result = await updateRouteCheckPoint({
      id: original.id,
      input: { checkPoint: 'String2' },
    })

    expect(result.checkPoint).toEqual('String2')
  })

  scenario('deletes a routeCheckPoint', async (scenario) => {
    const original = await deleteRouteCheckPoint({
      id: scenario.routeCheckPoint.one.id,
    })

    const result = await routeCheckPoint({ id: original.id })

    expect(result).toEqual(null)
  })
})
