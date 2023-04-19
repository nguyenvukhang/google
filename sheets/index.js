require('dotenv').config()
const { GoogleSpreadsheet } = require('google-spreadsheet')

/**
 * @param { 'GOOGLE_PRIVATE_KEY_ID'
 *        | 'GOOGLE_PRIVATE_KEY'
 *        | 'GOOGLE_CLIENT_EMAIL'
 *        | 'GOOGLE_CLIENT_ID'
 *        | 'SPREADSHEET_ID' } name
 * @returns {string}
 */
function env(name) {
  if (!process.env[name]) throw new Error(`Env not found: ${v}`)
  return process.env[name]
}

async function main() {
  const doc = new GoogleSpreadsheet(env('SPREADSHEET_ID'))
  await doc.useServiceAccountAuth({
    client_email: env('GOOGLE_CLIENT_EMAIL'),
    private_key: env('GOOGLE_PRIVATE_KEY'),
  })
  await doc.loadInfo()
  await doc.updateProperties({ title: 'renamed spreadsheet!' })
}

main()
