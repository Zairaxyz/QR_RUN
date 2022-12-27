import { DateTime } from 'luxon'

const History = ({ findHistoryRun }) => {
  const history = findHistoryRun.map((findHistoryRun) => {
    return <div key={findHistoryRun.id}>
      <div className='mb-8 font-mono font-bold text-lg'>{findHistoryRun.park.name}</div>
      <div className="grid grid-cols-3 gap-3">
        <div className='text-center'>
          <p className='mb-4'>Avg.Pace</p>
          <p>{findHistoryRun.pace}</p>
        </div>
        <div className='text-center'>
          <p className='mb-4'>Distace</p>
          <p>{findHistoryRun.distance} km</p>
        </div>
        <div className='text-center'>
          <p className='mb-4'>Time</p>
          <p>
            {DateTime.fromISO(findHistoryRun.stopTime).diff(DateTime.fromISO(findHistoryRun.startTime), 'hours').toFormat(" hh ':' mm ':' ss ")}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 my-8"></div>
    </div>
  })
  // console.log(findHistoryRun)
  return (
    <>
      <div>
        {history}
      </div>
    </>
  )
}

export { History }
