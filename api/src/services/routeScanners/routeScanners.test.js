import {
  routeScanners,
  routeScanner,
  createRouteScanner,
  updateRouteScanner,
  deleteRouteScanner,
} from './routeScanners'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('routeScanners', () => {
  scenario('returns all routeScanners', async (scenario) => {
    const result = await routeScanners()

    expect(result.length).toEqual(Object.keys(scenario.routeScanner).length)
  })

  scenario('returns a single routeScanner', async (scenario) => {
    const result = await routeScanner({ id: scenario.routeScanner.one.id })

    expect(result).toEqual(scenario.routeScanner.one)
  })

  scenario('creates a routeScanner', async (scenario) => {
    const result = await createRouteScanner({
      input: {
        after: 'String',
        before: 'String',
        total_distance: 4535161.276170499,
        is_start: true,
        is_finish: true,
        parkId: scenario.routeScanner.two.parkId,
      },
    })

    expect(result.after).toEqual('String')
    expect(result.before).toEqual('String')
    expect(result.total_distance).toEqual(4535161.276170499)
    expect(result.is_start).toEqual(true)
    expect(result.is_finish).toEqual(true)
    expect(result.parkId).toEqual(scenario.routeScanner.two.parkId)
  })

  scenario('updates a routeScanner', async (scenario) => {
    const original = await routeScanner({
      id: scenario.routeScanner.one.id,
    })

    const result = await updateRouteScanner({
      id: original.id,
      input: { after: 'String2' },
    })

    expect(result.after).toEqual('String2')
  })

  scenario('deletes a routeScanner', async (scenario) => {
    const original = await deleteRouteScanner({
      id: scenario.routeScanner.one.id,
    })

    const result = await routeScanner({ id: original.id })

    expect(result).toEqual(null)
  })
})
