describe('suite', () =>
{
    it('Title', async() =>
    {
        await browser.navigateTo("https://www.in.cheapflights.com/");
        await browser.pause(2000);
        await browser.maximizeWindow();
        await browser.pause(2000);
        await browser.$("//*[name()='svg' and @class='c8LPF-icon']").click();
        await browser.pause(5000);
    })
})