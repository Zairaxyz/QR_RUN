import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BlogParksCell from 'src/components/BlogParksCell'

const BlogParksPage = () => {
  return (
    <>
      <MetaTags title="BlogParks" description="BlogParks page" />

      <header class="bg-slate-200">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">ParksPage</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <BlogParksCell />
          </div>
        </div>
      </main>
    </>
  )
}

export default BlogParksPage
