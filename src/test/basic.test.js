import { test, expect, it } from 'vitest'

test('basic', () => {
    expect(1).toBe(1)
    })

test.skip('only', () => {
    expect(1).toBe(2)
    })