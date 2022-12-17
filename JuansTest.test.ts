import {Juans} from './juansPage'
const juans = new Juans ()

describe('xyz test ', () => {
    test('customer login', async () =>{
    await juans.navigate()
    await juans.click(juans.customerLgn)
    await juans.click(juans.userSelect)
    await juans.click(juans.optionSelect)
    await juans.click(juans.loginBtn)
    await juans.click(juans.transactionBtn)
    await juans.click(juans.depositBtn)
    await juans.click(juans.withdrawlBtn)
    await juans.click(juans.homeBtn)

    })

    test('bank manager login', async () =>{
        await juans.navigate()
        await juans.click(juans.bankManagerBtn)
        await juans.click(juans.addCustomer)
        await juans.click(juans.openAccount)
        await juans.click(juans.customerBtn)
        await juans.driver.quit()
    })

});
