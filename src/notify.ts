import * as core from '@actions/core'
import * as github from '@actions/github'
import axios from 'axios'

export async function sendMessage(url: string): Promise<void> {
  console.log('text para qeu funcione')
  core.info(github.context.eventName)
  core.debug('funciona porfavor')
  core.info(JSON.stringify(github.context.payload))
  let body = null
  body = 'Funcona porqueria'
  const response = await axios.post(url, body)
  if (response.status !== 200) {
    throw new Error(
      `Google Chat notification failed. response status=${response.status}`
    )
  }
}
