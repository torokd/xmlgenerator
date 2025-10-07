import { CARD_TRANSACTION_TEMPLATE } from '../xmlTemplates/index'
import { faker } from '@faker-js/faker'
import { fillTemplate } from '../fillTemplate'

export const generateCardTransactionXml = (userId: string, accountNumber: string, currency: string): string => {
  const values = {
    transactionId: faker.string.uuid(),
    currency,
    amount: faker.number.int({ min: 1500, max: 25000 }),
    timestamp: faker.date.recent().toISOString(),
    userId,
    accountNumber
  }
  return fillTemplate(CARD_TRANSACTION_TEMPLATE, values);
}
