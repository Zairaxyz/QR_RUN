import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

// import StatisticCell from 'src/components/StatisticCell'
import Statistic from 'src/components/Statistic/Statistic'

const StatisticPage = () => {
  return (
    <>
      <MetaTags title="Statistic" description="Statistic page" />

      <header className="bg-slate-200">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">StatisticPage</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {/* <StatisticCell /> */}
            <Statistic />
          </div>
        </div>
      </main>
    </>
  )
}

export default StatisticPage
