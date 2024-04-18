describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.navigateTo("https://www.in.cheapflights.com/flight-search/BLR-DEL/2024-04-16/2024-05-24?fs=fdDir=true;stops=~0&sort=bestflight_a");
        await browser.maximizeWindow();
        await browser.pause(1000);
        let prices = await browser.$$("//div[@class='f8F1-price-text']");

        console.log(prices.length);

        prices.forEach(async element => {
            console.log(await element.getText());
        });
    
    })
})