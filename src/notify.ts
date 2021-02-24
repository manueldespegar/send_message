import * as core from '@actions/core'
import * as github from '@actions/github'
import * as Webhooks from '@octokit/webhooks'
import axios from 'axios'

interface TextButton {
  textButton: {text: string; onClick: {openLink: {url: string}}}
}

function getTextColor(state: string, isMerged: boolean): string {
  if (isMerged) {
    return '#6f42c1'
  }

  if (state === 'closed') {
    return '#ff0000'
  }

  return '#2cbe4e'
}

const textButton = (text: string, url: string): TextButton => ({
  textButton: {
    text,
    onClick: {openLink: {url}}
  }
})

async function processPullRequest(): Promise<object> {
  const {owner, repo} = github.context.repo
  const pullRequestPayload = github.context
    .payload as Webhooks.WebhookPayloadPullRequest
  const pullRequest = pullRequestPayload.pull_request
  core.info(
    `${pullRequest.title} ${pullRequest.state} by ${pullRequest.user.login}`
  )

  return {
    cards: [
    ]
  }
}


export async function sendMessage(url: string): Promise<void> {
  core.info(github.context.eventName)
  core.info(JSON.stringify(github.context.payload))
  let body = null
  body = await processPullRequest()
  const response = await axios.post(url, body)
  if (response.status !== 200) {
    throw new Error(
      `Google Chat notification failed. response status=${response.status}`
    )
  }
}
