import { render } from '@redwoodjs/testing/web'

import BlogParksPage from './BlogParksPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BlogParksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogParksPage />)
    }).not.toThrow()
  })
})
