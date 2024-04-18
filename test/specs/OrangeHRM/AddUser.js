import WelcomePage from "../../pageobjects/OrangeHRM/WelcomePage.js";
import Generic from "../../pageobjects/Generic.js";
import Homepage from "../../pageobjects/OrangeHRM/Homepage.js";
import AdmAddUserPage from "../../pageobjects/OrangeHRM/AdmAddUserPage.js";

describe('CRM-Admin', () =>
{
    it('UserCreation', async () =>
{
    await Generic.launchOrangeHRM();
    await expect(browser).toHaveUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await WelcomePage.loginaction();
    await Homepage.admintab();
    await AdmAddUserPage.addUser("Jack", "jack@2", "uthpal@123", "uthpal@123");
    await AdmAddUserPage.searchUser("ravimb@12", "Ravi M B")
    await browser.pause(4000);
})
})