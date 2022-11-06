/*import the api for the currencies as soon as you load with fetch and useeffect
 create a state for currency option
 set currency options with the data fetched from api in the useeffect
 pass those currency options as props to both currency rows
 then make them selectable
 make a state for fromcurrency and for tocurrency then set them in the useeffect 
 pass the fromcuurency and tocurrency as props and then set them as values in the select tag

 create a prop onchangecurrency and set it to onchange in the currencyrow
 and set it to a function that takes the event and sets currency to event.target.value

 create a state for amount by default 1
 create a state for amountinfromCurrency by default true just to be true if the amount is typed
 in the from and false otherwise

 create an exchange rate state and set it on render to first currency rate

 write some basic code that says that if amountinfromcurreny so fromamount(new var) gets amount
 and toamount get amount*exchange rate and vice versa
 then pass them as props then put them as value 
 
 create onchangeamount prop set to onchange attribute
 then handlechange should setamount and setamountinfromcurrency

 finally fetch a new link each time from or to currency changes
 and set the exchange rate to data.rates[tocurrency] .. of course if from currency and to currency are true


 */