class Homepage
{
    get adminbtn()
    {
        return $("//span[.='Admin']");
    }

    get addbtn()
    {
        return $("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']");
    }
    
    get PIMbtn()
    {
        return $("//span[.='PIM' and @class='oxd-text oxd-text--span oxd-main-menu-item--name']");
    }

    async admintab()
    {
        await this.adminbtn.click();
        await this.addbtn.click();
    }
}
export default new Homepage();