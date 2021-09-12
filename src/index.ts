import * as core from '@actions/core'
import * as fs from 'fs'

const getPackageVersion = (): string => {
  const data = JSON.parse(fs.readFileSync('package.json', {encoding: 'utf-8'}))

  return data.version
}

async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')
    core.debug(`Waiting ${ms} milliseconds ...`)

    core.info(`package version: ${getPackageVersion()}`)

    core.debug(new Date().toTimeString())

    core.setOutput('time', new Date().toTimeString())

    core.setOutput('tag', getPackageVersion())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
