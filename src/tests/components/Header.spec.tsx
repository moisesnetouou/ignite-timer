import { describe, it } from 'vitest'
import { render } from '../../../config/vitest/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'

import { Header } from '../../components/Header'

describe('Header Component', () => {
  it('should be able to render component', () => {
    render(<Header />, { wrapper: Router })
  })
})
