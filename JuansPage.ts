import {BasePage} from './basePage'
import {By} from 'selenium-webdriver'

export class Juans extends BasePage {
    homeBtn: By = By.xpath('//button[text()="Home"]')
    bankManagerBtn: By = By.xpath('//button[text()="Bank Manager Login"]')
    loginBtn: By = By.xpath('//button[text()="Login"]')
    transactionBtn: By = By.xpath('//button[@ng-class = "btnClass1"]')
    depositBtn: By = By.xpath('//button[@ng-class = "btnClass2"]')
    withdrawlBtn: By = By.xpath('//button[@ng-class = "btnClass3"]')
    logOutBtn: By = By.xpath('//button[@ng-show = "logout"]')
    customerLgn: By = By.xpath('//button[text()="Customer Login"]')
    userSelect: By = By.xpath('//select[@id="userSelect"]')
    optionSelect:By = By.xpath('//option[text() = "Hermoine Granger"]')
    addCustomer:By = By.xpath('//button[@ng-class = "btnClass1"]')
    openAccount:By = By.xpath('//button[@ng-class = "btnClass2"]')
    customerBtn:By = By.xpath('//button[@ng-class = "btnClass3"]')
     
   

    constructor() {
        super({url:"https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login/"})

 };

};   