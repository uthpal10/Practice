import { Key } from 'webdriverio'

class Homepage
{
    get cakesTab()
    {
        return $("//a[@data-item-name='Cakes']/descendant::span[@class='selection-panel-text Paragraph-14-S--Regular ']");
    }

    get desCakesTab()
    {
        return $("//a[@data-item-name='Designer Cakes']/descendant::span[@class='selection-panel-text Paragraph-14-S--Regular ']");
    }

    get cake1lnk()
    {
        return $("//div[@data-sku='JVS1190832']/descendant::span[@class='Paragraph-16-M--Semibold']");
    }

    get shortlistIcon()
    {
        return $("//button[@data-sku='JVS1190832']");
    }

    get addToCartBtn()
    {
        return $("//button[@id='add-cart']");
    }

    get cartIcon()
    {
        return $("//a[@class='top-action-col s-cart waves-effect']");
    }

    get pinCodefld()
    {
        return $("//input[@id='location-input']");
    }

    get selFlavourDD()
    {
        return $("//div[@class='flavour-drop-down']");
    }

    get selFlavourOption()
    {
        return $("//div[@class='flavour-options-container active']");
    }

    get selectDateCal()
    {
        return $("//button[@id='show-Select_Date']");
    }

    get selDelivDate()
    {
        return $("//span[contains(.,'April')]/ancestor::div[@id='ui-datepicker-div']/descendant::a[.='13']");
    }

    get selTimeDD()
    {
        return $("//div[@id='timepicker']");
    }

    get Timeoptions()
    {
        return $$("//div[@class='timeslotOptions']");
    }

    async addProdToCart(pincode)
    {
        await this.cakesTab.click();
        await this.desCakesTab.click();
        await browser.scroll(0,100);
        await this.cake1lnk.click();
        await browser.scroll(0,300);
        await this.pinCodefld.click();
        await this.pinCodefld.setValue(pincode);
        await this.selectDateCal.click();
        await this.selDelivDate.click();
        await this.selTimeDD.click();
        await browser.scroll(0,200);
        let options = await browser.$$("//div[@class='timeslotOptions']");
        options.map( async (ele) =>
        {
            if (await ele.getText() === "09am - 01pm") 
            {
                await ele.click();    
            }
        })
        await this.selFlavourDD.click()
        let allflavours = await browser.$$("//div[@class='flavour-options product-attr-revamp Paragraph-14-S--Regular']");
        for (let i=0; i<allflavours.length; i++)
        {
            let ele = allflavours[i];
            if (await ele.getText() === "Red Velvet") 
            {
                await ele.click();
                break;    
            }
        }  
        await this.addToCartBtn.click();
        await this.cartIcon.click();
        await browser.pause(5000);
    }
}
export default new Homepage();