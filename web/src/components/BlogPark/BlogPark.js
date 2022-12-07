import { Link, routes } from "@redwoodjs/router"

const BlogPark = ({ park }) => {

  const { parkName, imageUrl, description, address, workingTime, Run } = park

  return (

    <article className="container mx-auto">

      <div className="flex justify-center items-center w-full px-0 py-0">
        <img className="object-cover rounded-sm sm:w-full md:w-full lg:w-full xl:w-8/12 xl:py-8 xk:h-full xl:shrink-0" src={imageUrl} alt="" width="1000" height="1000" />
      </div>

      <div className="px-8 py-4">

        <div className="font-bold text-2xl my-5">
          {parkName}
        </div>

        <div className="font-bold"> Time Working </div>

        <div className="my-5">
          <span className="mb-6"> "Sunday - Wednesday" : </span> {workingTime["Sunday - Wednesday"]}
        </div>

        <div className="my-5">
          <span className="mb-6"> "Thursday - Saturday" : </span> {workingTime["Thursday - Saturday"]}
        </div>

        <div className="my-5">
          <p className="font-bold mb-5">Address</p> {address}
        </div>

        <div className="my-5">
          <p className="font-bold mb-5">Description</p> {description}
        </div>

        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr class="text-md tracking-wide text-left text-gray-900 bg-gray-100 border-b border-gray-600">
                  <th class="py-3 text-center">No.</th>
                  <th class="py-3 text-center">Username</th>
                  <th class="py-3 text-center">Avg.pace</th>
                </tr>
              </thead>
              <tbody>
                {Run.slice(0, 3).map((el , index) => (
                  <tr class="text-center text-md">
                  <td>{index + 1}</td>
                  <td class="py-8">
                    <a class="flex justify-center	items-center">
                    <img width="40" height="40" src={el.user.imageUrl} class="block rounded-full float-left" alt="" sizes="(max-width: 150px) 100vw, 150px" />
                    <span class="px-4">{el.user.firstName}</span>
                    </a>
                  </td>
                  <td>{el.pace}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </article>
  )
}

export default BlogPark
