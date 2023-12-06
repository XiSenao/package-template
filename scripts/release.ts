import { release } from '@vitejs/release-scripts'
import colors from 'picocolors'
import { logRecentCommits, run, updateTemplateVersions } from './releaseUtils.ts'

release({
  repo: 'sest-cli',
  packages: ['../'],
  toTag: (pkg, version) =>
    pkg === 'sest-cli' ? `v${version}` : `${pkg}@${version}`,
  logChangelog: (pkg) => logRecentCommits(pkg),
  generateChangelog: async (pkgName) => {
  
  },
})
