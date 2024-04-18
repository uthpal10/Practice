import Generic from "../../pageobjects/Generic.js";
import WelcomePage from "../../pageobjects/IGP/WelcomePage.js";
import Homepage from "../../pageobjects/IGP/Homepage.js";

describe('IGP', () =>
{
    it('cart', async() =>
    {
    await Generic.launchIGP();
    await expect(browser).toHaveUrl("https://www.igp.com/");
    await WelcomePage.Signin("uthpal.ramesh10@gmail.com", "UthpalRamesh@1024");
    await Homepage.addProdToCart(560010);
    })
})