import { system } from './system-tools'

// test('which - existing package', () => {
//   const result = system.which('node')
//   expect(result).not.toBe(null)
// })

test('which - non-existing package', () => {
  const result = system.which('non-existing-package')
  expect(result).toBe(null)
})

test('run - should reject if the command does not exist', async () => {
  try {
    await system.run('echo "hi" && non-existing-command')
  } catch (e) {
        // @ts-expect-error
    expect(e.stdout).toContain('hi')

    if (process.platform === 'win32') {
          // @ts-expect-error
      expect(e.stderr).toContain('is not recognized as an internal or external command')
    } else {
          // @ts-expect-error
      expect(e.stderr).toContain('not found')
    }
  }
})

test('run - should resolve if the command exists', async () => {
  // `echo` should be a general command for both *nix and windows
  await expect(system.run('echo gluegun', { trim: true })).resolves.toBe('gluegun')
})
