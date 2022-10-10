import { Link, routes } from "@redwoodjs/router"

const BlogPark = ({ park }) => {

  const { park_name, image_url, description, address, working_time } = park

  return (

    <article className="container mx-auto">

      <div class="flex justify-center items-center w-full px-0 py-0">
        <img class="object-cover shadow-lg rounded-sm sm:w-full md:w-full lg:w-full xl:w-6/12 xl:py-10 xk:h-full xl:shrink-0" src={image_url} alt="" width="1000" height="500" />
      </div>

      <div class="px-8 py-4">

        <div class="font-bold text-2xl my-5">
          {park_name}
        </div>

        <div class="my-5">
          <span class="font-bold mb-5"> "Sunday - Wednesday" : </span> {working_time["Sunday - Wednesday"]}
        </div>

        <div class="my-5">
          <span class="font-bold mb-5"> "Thursday - Saturday" : </span> {working_time["Thursday - Saturday"]}
        </div>

        <div class="my-5">
          <p class="font-bold mb-5">Address</p> {address}
        </div>

        <div class="my-5">
          <p class="font-bold mb-5">Description</p> {description}
        </div>

      </div>

    </article>
  )
}

export default BlogPark
