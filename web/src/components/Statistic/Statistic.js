const Statistic = () => {
  return (
    <div className="container mx-auto">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <p className="text-lg font-medium leading-6 text-gray-900">Profile</p>
            <div className="flex justify-center">
              <img src="https://scontent.fbkk5-1.fna.fbcdn.net/v/t39.30808-6/309922894_1450507872120357_2013748573071282769_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHoEFb3pcAmyzmuJHWgIm5GBZ8fFtv-FNIFnx8W2_4U0s2v9993OlrYZk-wrMXtrZ5HUrFx9zwyGNxHxVXJmMSZ&_nc_ohc=JOXwiQeJgSoAX8jQqi3&_nc_ht=scontent.fbkk5-1.fna&oh=00_AT_TDtjwYPP_YT9LfxnKjuxV1BvdfeUHExzFPzcoFm2hXw&oe=634A9CBB" className="rounded-full w-64 sm:w-60 md:w-60 lg:w-80" />
            </div>
            <button className=""></button>
            <p className="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="shadow-lg sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                    Website
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistic
