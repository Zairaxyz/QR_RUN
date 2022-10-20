import { useState } from 'react'

import QRCode from 'qrcode.react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'


const Statistic = () => {

  const { currentUser, isAuthenticated } = useAuth()
  const [qrValue, setQrValue] = useState('QR-CODE')
  const downloadQRCode = () => {
    setQrValue(currentUser.id)
    // Generate download with use canvas and stream
    const canvas = document.getElementById('qr-gen')
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')

    let downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = `${qrValue}.png`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
    console.log(pngUrl)
  }

  return (
    <div className="container mx-auto">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <p className="text-lg font-medium leading-6 text-gray-900">Profile</p>
            <div className="flex justify-center">
              {isAuthenticated && (
                <>
                  <img src={currentUser.imageUrl} className="rounded-full w-64 sm:w-60 md:w-60 lg:w-80" />
                </>
              )}
            </div>
            <button className="btn btn-blue"></button>
            <p className="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you share.
            </p>
            <div className="flex justify-center">
              {isAuthenticated && (
                  <>
                    <QRCode
                      id="qr-gen"
                      value={currentUser.id}
                      renderAs="png"
                      size={200}
                      level={'H'}
                      includeMargin={true}
                    />
                  </>
                )}
            </div>
            <button className="text-center" type="button" onClick={downloadQRCode}>
              Download QR Code
            </button>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="shadow-lg sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="company-website" className="block text-2xl font-bold text-gray-700">
                    Recent activity
                  </label>
                </div>
              </div>
              <div class="border-t border-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistic
