import { Key } from 'webdriverio'

describe('suite', () =>
{
    it('MakeMyTrip', async() =>
    {
        await browser.url("https://www.makemytrip.com/");
        await browser.pause(1000);
        await browser.maximizeWindow();
        await browser.pause(1000);
        await browser.$("//span[.='From']/ancestor::label[@for='fromCity']").click();
        await browser.pause(1000);
        await browser.$("//input[@placeholder='From']").setValue("BLR");
        await browser.pause(1000);
        await browser.$("//p[.='Bengaluru International Airport']").click();
        await browser.pause(1000);
        await browser.$("//span[.='To']/ancestor::label[@for='toCity']").click();
        await browser.pause(1000);
        await browser.$("//input[@placeholder='To']").setValue("DXN");
        await browser.pause(1000);
        await browser.$("//p[.='Dubai International']").click();
        await browser.pause(1000);
        await browser.$("//span[.='Departure']").click();
        await browser.pause(1000);
        let monthAndYear = "April 2024";
        let date = 13;
        
        for(;;)
        {
            try 
            {
                await browser.$("//div[@class='DayPicker-Caption' and contains(.,'"+monthAndYear+"')]/ancestor::div[@class='DayPicker-Month']/descendant::p[.='"+date+"']").click();
                break;
            } 
            catch (error) 
            {
                await browser.$("//span[@aria-label='Next Month' and @class='DayPicker-NavButton DayPicker-NavButton--next']").click();
            }
        }
        await browser.pause(1000);
        await browser.$("//span[@class='lbl_input appendBottom10' and text()='Return']").click();
        await browser.pause(1000);
        let monthAndYear1 = "May";
        let date1 = 1;
        
        for(;;)
        {
            try 
            {
                await browser.$("//div[@class='DayPicker-Caption' and contains(.,'"+monthAndYear1+"')]/ancestor::div[@class='DayPicker-Month']/descendant::p[.='"+date1+"']").click();
                break;
            } 
            catch (error) 
            {
                await browser.$("//span[@aria-label='Next Month' and @class='DayPicker-NavButton DayPicker-NavButton--next']").click();
            }
        }
        await browser.pause(1000);
        await browser.$("//a[.='Search']").click();
        await browser.pause(3000);
    })

})