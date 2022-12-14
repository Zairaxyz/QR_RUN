import { Link, routes } from '@redwoodjs/router'

const BlogPark = ({ park }) => {
  const { name, imageUrl, description, address, workingHours } = park

  return (
    <article className="container mx-auto">
      <div className="flex w-full items-center justify-center px-0 py-0">
        <img
          className="xk:h-full rounded-sm object-cover shadow-lg sm:w-full md:w-full lg:w-full xl:w-6/12 xl:shrink-0 xl:py-10"
          src={imageUrl}
          alt=""
          width="1000"
          height="500"
        />
      </div>

      <div className="px-8 py-4">
        <div className="my-5 text-2xl font-bold">{name}</div>

        <div className="my-5">
          <span className="mb-5 font-bold"> "Sunday - Wednesday" : </span>{' '}
          {workingHours['Sunday - Wednesday']}
        </div>

        <div className="my-5">
          <span className="mb-5 font-bold"> "Thursday - Saturday" : </span>{' '}
          {workingHours['Thursday - Saturday']}
        </div>

        <div className="my-5">
          <p className="mb-5 font-bold">Address</p> {address}
        </div>

        <div className="my-5">
          <p className="mb-5 font-bold">Description</p> {description}
        </div>
      </div>
    </article>
  )
}

export default BlogPark
