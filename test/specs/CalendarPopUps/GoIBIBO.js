import { Key } from 'webdriverio'

describe('suite', () =>
{
    it('MakeMyTrip', async() =>
    {
        await browser.url("https://www.goibibo.com/");
        await browser.pause(1000);
        await browser.maximizeWindow();
        await browser.pause(1000);
        await browser.$("//span[@class='logSprite icClose']").click();
        await browser.pause(1000);
        await browser.$("//div[@class='sc-12foipm-16 wRKJm fswFld ' and contains(.,'From')]").click();
        await browser.pause(1000);
        await browser.$("//span[.='From']/following-sibling::input").setValue("BLR");
        await browser.pause(1000);
        await browser.$("//p[.='Bengaluru International Airport']").click();
        await browser.pause(1000);
        // await browser.$("//div[@class='sc-12foipm-16 wRKJm fswFld ' and contains(.,'To')]").click();
        // await browser.pause(1000);
        await browser.$("//span[.='To']/following-sibling::input").setValue("BOM");
        await browser.pause(1000);
        await browser.$("//p[.='Chhatrapati Shivaji International Airport']").click();
        await browser.pause(1000);
        await browser.$("//span[.='Departure']").click();
        await browser.pause(1000);
        for(;;)
        {
            try 
            {
                await browser.$("//div[@class='DayPicker-Caption' and .='June 2024']/ancestor::div[@class='DayPicker-Month']/descendant::p[.='22']").click();
                break;
            } 
            catch (error) 
            {
                (await browser.$("//span[@class='DayPicker-NavButton DayPicker-NavButton--next']")).click();                
            }
        }
        await browser.$("//span[.='Return']").click();
        await browser.pause(1000);
        for(;;)
        {
            try 
            {
                await browser.$("//div[@class='DayPicker-Caption' and .='August 2024']/ancestor::div[@class='DayPicker-Month']/descendant::p[.='30']").click();
                break;
            } 
            catch (error) 
            {
                await browser.$("//span[@class='DayPicker-NavButton DayPicker-NavButton--next']").click();                
            }
        }
        await browser.pause(1000);
        let ele = await browser.$("//span[.='SEARCH FLIGHTS']");
        ele.click();
        ele.waitForStable();
        await browser.pause(10000);
    })
})