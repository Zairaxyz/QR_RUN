import { useState } from 'react'

import QRCode from 'qrcode.react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
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
    <>
      <MetaTags title="Home" description="Home page" />

      <header className="bg-slate-200">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-mono font-bold tracking-tight text-gray-900">HomePage</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
              {isAuthenticated && (
                <>
                  <QRCode
                    id="qr-gen"
                    value={currentUser.id}
                    renderAs="png"
                    size={290}
                    level={'H'}
                    includeMargin={true}
                  />
                  <button type="button" onClick={downloadQRCode}>
                    Download QR Code
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
