const { Toolkit } = require('actions-toolkit')

// Run your GitHub Action!
const tools = new Toolkit({
  secrets: ['GOOGLE_CHAT_WEBHOOK']
}).run(async tools => {
  tools.exit.success('We did it!')
})
