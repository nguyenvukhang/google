require('dotenv').config()
const { google } = require('googleapis')

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
  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    credentials: {
      client_email: env('GOOGLE_CLIENT_EMAIL'),
      private_key: env('GOOGLE_PRIVATE_KEY').replace(/\\n/g, '\n'),
    },
  })
  const sheets = google.sheets({ version: 'v4', auth })
}

main()
