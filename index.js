const { Toolkit } = require('actions-toolkit')

// Run your GitHub Action!
Toolkit({
  secrets: ['SUPER_SECRET_KEY']
}).run(async tools => {
  tools.exit.success('We did it!')
})
