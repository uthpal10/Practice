import Generic from "../../pageobjects/Generic.js";

describe('IGP', () =>
{
    it('Register', async() =>
{
    await Generic.launchIGP();
    await expect(browser).toHaveUrl("https://www.igp.com/");
    await browser.$("//a[@data-item-name='New Arrivals']").click();
    await browser.pause(1000);
    let allnames = await browser.$$("//div[@class='product-grid-item product-grid-item-revamp col s3']/descendant::div[@class='product-name-w product-name-w-revamp']");
    console.log(allnames.length);

    for (let i = 0; i < allnames.length; i++) 
    {
        let name = allnames[i].getText();
        await browser.pause(1000);
        console.log(name);
    }

    let prices = await browser.$$("//div[@class='product-grid-item product-grid-item-revamp col s3']/descendant::span[@class='Paragraph-16-M--Semibold']");
    console.log(prices.length);

    for (let j = 0; j < prices.length; j++) 
    {
        let price = prices[j].getText();
        await browser.pause(1000);
        console.log(price);
    }
    await browser.pause(5000);
})
})