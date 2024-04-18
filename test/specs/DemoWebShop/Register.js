import Homepage from "../../pageobjects/DemoWebShop/Homepage.js";
import Generic from "../../pageobjects/Generic.js";

describe('Dempwebshop', () =>
{
    it("Register", async() =>
{
    await Generic.launchDemoWebShop();
    await expect(browser).toHaveUrl("https://demowebshop.tricentis.com/");
    await Homepage.register("Uthpal", "Ramesh", "uthpal.ramesh01@gmail.com", "Qwerty@123", "Qwerty@123");
    await Homepage.login("uthpal.ramesh01@gmail.com", "Qwerty@123");
    await Homepage.addProduct();
    await browser.pause(4000);
})
})