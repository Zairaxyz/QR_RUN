import {
  routescanners,
  routescanner,
  createRoutescanner,
  updateRoutescanner,
  deleteRoutescanner,
} from './routescanners'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('routescanners', () => {
  scenario('returns all routescanners', async (scenario) => {
    const result = await routescanners()

    expect(result.length).toEqual(Object.keys(scenario.routescanner).length)
  })

  scenario('returns a single routescanner', async (scenario) => {
    const result = await routescanner({ id: scenario.routescanner.one.id })

    expect(result).toEqual(scenario.routescanner.one)
  })

  scenario('creates a routescanner', async (scenario) => {
    const result = await createRoutescanner({
      input: { parkId: scenario.routescanner.two.parkId },
    })

    expect(result.parkId).toEqual(scenario.routescanner.two.parkId)
  })

  scenario('updates a routescanner', async (scenario) => {
    const original = await routescanner({
      id: scenario.routescanner.one.id,
    })

    const result = await updateRoutescanner({
      id: original.id,
      input: { parkId: scenario.routescanner.two.parkId },
    })

    expect(result.parkId).toEqual(scenario.routescanner.two.parkId)
  })

  scenario('deletes a routescanner', async (scenario) => {
    const original = await deleteRoutescanner({
      id: scenario.routescanner.one.id,
    })

    const result = await routescanner({ id: original.id })

    expect(result).toEqual(null)
  })
})
