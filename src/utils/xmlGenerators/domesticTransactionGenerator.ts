import { DOMESTIC_TRANSACTION_TEMPLATE } from '../xmlTemplates/index'
import { faker } from '@faker-js/faker'
import { fillTemplate } from '../fillTemplate'

export const generateDomesticTransactionXml = (userId: string, targetAcc: string, currency: string): string => {
  const values = {
    transactionId: faker.string.uuid(),
    currency,
    amount: faker.number.int({ min: 1500, max: 25000 }),
    timestamp: faker.date.recent().toISOString(),
    sourceAcc: faker.finance.accountNumber(8),
    userId,
    targetAcc
  }
  return fillTemplate(DOMESTIC_TRANSACTION_TEMPLATE, values);
}
