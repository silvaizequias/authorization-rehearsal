import { test, expect } from 'vitest'
import { Profile } from './profile'

test('create an profile', () => {
  const profile = new Profile({
    group: [1,2,3,4]
  })

  expect(profile).toBeInstanceOf(Profile)

  expect(profile.group).toContainEqual(1)
  expect(profile.group).toContainEqual(2)
  expect(profile.group).toContainEqual(3)
  expect(profile.group).toContainEqual(4)

})
