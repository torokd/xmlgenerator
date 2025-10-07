export const DOMESTIC_TRANSACTION_TEMPLATE = `
  <DomesticTransaction>
    <TransactionId>{{transactionId}}</TransactionId>
    <Currency>{{currency}}</Currency>
    <Amount>{{amount}}</Amount>
    <Timestamp>{{timestamp}}</Timestamp>
    <UserId>{{userId}}</UserId>
    <SourceAcc>{{sourceAcc}}</SourceAcc>
    <TargetAcc>{{targetAcc}}</TargetAcc> 
  </DomesticTransaction>
`