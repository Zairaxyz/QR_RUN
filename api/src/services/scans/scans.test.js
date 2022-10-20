import { scans, scan, createScan, updateScan, deleteScan } from './scans'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('scans', () => {
  scenario('returns all scans', async (scenario) => {
    const result = await scans()

    expect(result.length).toEqual(Object.keys(scenario.scan).length)
  })

  scenario('returns a single scan', async (scenario) => {
    const result = await scan({ id: scenario.scan.one.id })

    expect(result).toEqual(scenario.scan.one)
  })

  scenario('creates a scan', async (scenario) => {
    const result = await createScan({
      input: { parkId: scenario.scan.two.parkId },
    })

    expect(result.parkId).toEqual(scenario.scan.two.parkId)
  })

  scenario('updates a scan', async (scenario) => {
    const original = await scan({ id: scenario.scan.one.id })
    const result = await updateScan({
      id: original.id,
      input: { parkId: scenario.scan.two.parkId },
    })

    expect(result.parkId).toEqual(scenario.scan.two.parkId)
  })

  scenario('deletes a scan', async (scenario) => {
    const original = await deleteScan({ id: scenario.scan.one.id })
    const result = await scan({ id: original.id })

    expect(result).toEqual(null)
  })
})
