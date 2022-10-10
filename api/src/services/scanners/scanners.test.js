import {
  scanners,
  scanner,
  createScanner,
  updateScanner,
  deleteScanner,
} from './scanners'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('scanners', () => {
  scenario('returns all scanners', async (scenario) => {
    const result = await scanners()

    expect(result.length).toEqual(Object.keys(scenario.scanner).length)
  })

  scenario('returns a single scanner', async (scenario) => {
    const result = await scanner({ id: scenario.scanner.one.id })

    expect(result).toEqual(scenario.scanner.one)
  })

  scenario('creates a scanner', async (scenario) => {
    const result = await createScanner({
      input: { parkId: scenario.scanner.two.parkId },
    })

    expect(result.parkId).toEqual(scenario.scanner.two.parkId)
  })

  scenario('updates a scanner', async (scenario) => {
    const original = await scanner({ id: scenario.scanner.one.id })
    const result = await updateScanner({
      id: original.id,
      input: { parkId: scenario.scanner.two.parkId },
    })

    expect(result.parkId).toEqual(scenario.scanner.two.parkId)
  })

  scenario('deletes a scanner', async (scenario) => {
    const original = await deleteScanner({
      id: scenario.scanner.one.id,
    })

    const result = await scanner({ id: original.id })

    expect(result).toEqual(null)
  })
})
