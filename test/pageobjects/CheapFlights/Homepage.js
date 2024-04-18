import { expect } from "chai";

class Home
{
    get FromvalueRemfld()
    {
        return $("//div[@class='c_neb-item-close']");
    }

    get Fromfld()
    {
        return $("//input[@aria-label='Flight origin input']");
    }

    get Tofld()
    {
        return $("//input[@aria-label='Flight destination input']");
    }

    get enterFromData()
    {
        return $("//li[@aria-label='New Delhi, National Capital Territory of India, India']");
    }

    get enterToData()
    {
        return $("//li[@aria-label='Bengaluru, Karnataka, India']");
    }

    get startDateDD()
    {
        return $("//div[@aria-label='Start date']");
    }

    get wayDD()
    {
        return $("//span[.='Return']");
    }

    get wayDD()
    {
        return $("//span[.='Return']");
    }

    get DDoptions()
    {
        return $$("//li[@role='option']");
    }

    get DirectFlightCheckBox()
    {
        return $("//input[@class='PVIO-input']");
    }

    get searchBtn()
    {
        return $("//button[@aria-label='Search']");
    }

    get cheapestTab()
    {
        return $("//span[.='Cheapest']");
    }

    async bookFlight(trip, from, To, monthAndYear, date)
    {
        await this.wayDD.click();
        await browser.pause(1000);
        let opt = await this.DDoptions;
        opt.forEach( async(element) => 
        {
            let text = await element.getText();
            if(expect([text]).to.deep.include([trip]));
            {
                element.click();
            }
        });
        // await this.FromvalueRemfld.click();
        // await browser.pause(1000);
        // await this.Fromfld.setValue(from);
        // await browser.pause(1000);
        // await this.enterFromData.click();
        // await browser.pause(1000);
        // await this.Tofld.setValue(To);
        // await browser.pause(1000);
        // await this.enterToData.click();
        // await browser.pause(1000);
        // await this.startDateDD.click();
        // await browser.pause(1000);
        // for(;;)
        // {
        //     try 
        //     {
        //         await browser.$("//caption[.='"+monthAndYear+"']/ancestor::table[@class='or3C or3C-wrapper']/descendant::div[.='"+date+"']").doubleClick();
        //         break; 
        //     } 
        //     catch (error) 
        //     {
        //         await browser.$("//div[@class='OV9e-month-nav']/descendant::div[@aria-label='Next month']").click();
        //     }
        // }
        // await browser.pause(1000);
        // await browser.scroll(0, -150);
        // await this.DirectFlightCheckBox.click();
        // await browser.pause(1000);
        // await this.searchBtn.click();
        // await browser.pause(1000);
        // let allwin = await browser.getWindowHandles();
        // for(let i=0; i<allwin.length; i++)
        // {
        //     await browser.switchToWindow(allwin[i]);
        //     console.log(`${i} ---> Title is ---> ${await browser.getTitle()}`);
        //     await browser.pause(1000);
        //     console.log(`${i} ---> URL is ---> ${await browser.getUrl()}`);;
        // }
        // await browser.switchToWindow(allwin[1]);
        // await browser.pause(1000);
        // await this.cheapestTab.click();
        // await browser.pause(1000);
        // let flightdetails = await browser.$$("//div[@class='J0g6-operator-text']");

        // let flightprices = await browser.$$("//div[@class='f8F1-price-text']");

        // let flist = await flightdetails.map( (ele) => ele.getText());
        // console.log(flist);

        // expect(flist).to.be.an('array').to.have.length(15, "Notfound the specified number");
        // expect(flist).to.be.an('array').that.contains("Air India Express", "Not found the specified matching element");
        
        // let fplist = await flightprices.map( (ele) => ele.getText());
        // console.log(fplist);

        // expect(fplist).to.be.an('array').to.have.length(15);
        // expect(fplist).to.be.an('array').that.contains('₹ 11,630');

        // flightdetails.map(async (ele) =>
        // {
        //     console.log(await ele.getText());
        //     await browser.pause(2000);
        // })

        // for(let i=0; i<flightdetails.length; i++)
        // {
        //     let flight = await flightdetails[i].getText();
        //     await browser.pause(1000);
        //     let price = await flightprices[i].getText();
        //     await browser.pause(1000);  
        //     console.log(`Name of the flight is ---> ${flight} and price is ---> ${price}`);
        // }
    }
}
export default new Home;