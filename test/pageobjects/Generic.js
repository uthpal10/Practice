import { expect } from "chai";

class Launch
{   
    async launchOrangeHRM()
    {
        await browser.navigateTo("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await browser.refresh();
        await browser.pause(1000);
        await browser.maximizeWindow();
        await browser.pause(1000);
    }

    async launchDemoWebShop()
    {
        await browser.navigateTo("https://demowebshop.tricentis.com/");
        await browser.pause(1000);
        await browser.maximizeWindow();
        await browser.pause(1000);
    }

    async launchIGP()
    {
        await browser.url("https://www.igp.com/");
        await browser.pause(1000);
        await browser.maximizeWindow();
        await browser.pause(1000);
    }

    async launchCheapFlights()
    {
        let url = await browser.url("https://www.in.cheapflights.com/");
        
        await browser.pause(1000);
        await browser.maximizeWindow();
        await browser.pause(1000);
    }
}
export default new Launch();