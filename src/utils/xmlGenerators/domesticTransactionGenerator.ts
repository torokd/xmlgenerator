import { CARD_TRANSACTION_TEMPLATE } from '../xmlTemplates/index'
import { faker } from '@faker-js/faker'
import { fillTemplate } from '../fillTemplate'

export const generateDomesticTransactionXml = (sourceAcc: string, targetAcc: string): string => {
  const values = {
    transactionId: faker.string.uuid(),
    currency: "HUF",
    amount: faker.number.int({ min: 1500, max: 25000 }),
    timestamp: faker.date.recent().toISOString(),
    sourceAcc,
    targetAcc
  }
  return fillTemplate(CARD_TRANSACTION_TEMPLATE, values);
}
