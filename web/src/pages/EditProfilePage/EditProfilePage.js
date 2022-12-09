import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import EditProfile from 'src/components/EditProfile/EditProfile'

const EditProfilePage = () => {
  return (
    <>
      <MetaTags title="EditProfile" description="EditProfile page" />

      <header class="bg-slate-200">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">EditProfilePage</h1>
        </div>
      </header>

      <EditProfile />
    </>
  )
}

export default EditProfilePage
