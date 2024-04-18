import { expect } from "chai";

describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.navigateTo("https://www.facebook.com/");
        await browser.pause(1000);
        await browser.maximizeWindow();
        await browser.$("//a[@data-testid='open-registration-form-button']").click();
        await browser.pause(1000);
        await browser.$("#day").click();
        await browser.pause(1000);
        let options = await browser.$$('#day option');
        console.log(options.length);
        for (let i = 0; i < options.length; i++) 
        {
            let ele = options[i];
            console.log(i, await ele.getText());
            if (await ele.getText() === "30") 
            {
                await ele.click();
                break;    
            }    
        }
        
        await browser.$("#month").click();
        await browser.pause(1000);
        let monthlist = await browser.$$('#month').map( (ele) => ele.getText());
        // console.log(monthlist);
        let mlist = monthlist.toString();
        // console.log(mlist);
        let splitted = mlist.split("\n");
        console.log(splitted);
        expect (splitted).to.be.an('array').to.have.length(12);
        expect (splitted).to.be.an('array').that.includes('Jan');

        // let option = await browser.$$('#month option');
        // console.log(option.length);
        // for (let i = 0; i < option.length; i++) 
        // {
        //     let ele = option[i];
        //     console.log(i, await ele.getText());
        //     if (await ele.getText() === "Dec") 
        //     {
        //         await ele.click();
        //         break;    
        //     }
        // }

        // await browser.$("#year").click();
        // await browser.pause(1000);
        // let opn = await browser.$$('#year option');
        // console.log(opn.length);
        // for (let k = 0; k < opn.length; k++) 
        // {
        //     let e = opn[k];
        //     console.log(k, await e.getText());
        //     if (await e.getText() === "1996") 
        //     {
        //         await e.click();
        //         break;    
        //     }
        // }
        
        // await browser.pause(1000);
        // await browser.$('[name="firstname"]').setValue("Uthpal");
        // await browser.pause(5000);
    })
})