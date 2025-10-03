import { CARD_TRANSACTION_TEMPLATE } from '../xmlTemplates/cardTransactionTemplate'
import { faker } from '@faker-js/faker'

// helper to replace placeholders
function fillTemplate(template: string, values: Record<string, string | number>) {
  return Object.keys(values).reduce((acc, key) => {
    const regex = new RegExp(`{{${key}}}`, 'g')
    return acc.replace(regex, String(values[key]))
  }, template)
}

// random transactionId
//const randomTransactionId = () => `TX${Math.floor(100000 + Math.random() * 900000)}`

// random currency
const randomCurrency = "HUF";

// random amount (between 1 and 5000)
const randomAmount = 5000

// timestamp
const currentTimestamp = () => new Date().toISOString()

// main generator
export const generateCardTransactionXml = (userId: string, accountNumber: string): string => {
  const values = {
    transactionId: faker.string.uuid(),
    currency: randomCurrency,
    amount: randomAmount,
    timestamp: currentTimestamp(),
    userId,
    accountNumber
  }

  return fillTemplate(CARD_TRANSACTION_TEMPLATE, values)
}
