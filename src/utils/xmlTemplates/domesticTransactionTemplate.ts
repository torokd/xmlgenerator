export const DOMESTIC_TRANSACTION_TEMPLATE = `
  <CardTransaction>
    <TransactionId>{{transactionId}}</TransactionId>
    <Currency>{{currency}}</Currency>
    <Amount>{{amount}}</Amount>
    <Timestamp>{{timestamp}}</Timestamp>
    <UserId>{{userId}}</UserId>
    <SourceAcc>{{sourceAcc}}</SourceAcc>
    <TargetAcc>{{targetAcc}}</TargetAcc> 
  </CardTransaction>
`