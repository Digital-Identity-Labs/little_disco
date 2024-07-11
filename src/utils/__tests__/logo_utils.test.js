import { describe, it, expect } from 'vitest'

import * as logo from '../../utils/logo_utils.js';

describe('LogoUtils', () => {
  it('returns a style for tiny', () => {
    expect(logo.style('tiny')).toBe('max-width:16px;width:100%')
  })
})
