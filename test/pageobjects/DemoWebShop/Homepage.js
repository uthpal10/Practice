class Homepage
{
    get registerlink()
    {
        return $("//a[.='Register']");
    }

    get loginlink()
    {
        return $("//a[.='Log in']");
    }

    get loginbtn()
    {
        return $("//input[@class='button-1 login-button']");
    }

    get maleRadiobtn()
    {
        return $("#gender-male");
    }

    get femaleRadiobtn()
    {
        return $("gender-female");
    }

    get firstnamefld()
    {
        return $("#FirstName");
    }

    get lastnamefld()
    {
        return $("#LastName");
    }

    get lastnamefld()
    {
        return $("#LastName");
    }
    
    get emailfld()
    {
        return $("#Email");
    }

    get passwordfld()
    {
        return $("#Password");
    }

    get confirmPwdfld()
    {
        return $("#ConfirmPassword");
    }

    get registerbtn()
    {
        return $("#register-button");
    }

    get Electronics()
    {
        return $("//ul[@class='top-menu']/descendant::a[normalize-space()='Electronics']");
    }

    get cellPhones()
    {
        return $("//ul[@class='sublist firstLevel active']/descendant::a[normalize-space()='Cell phones']");
    }

    get addToCart()
    {
        return $("//div[@data-productid='43']/descendant::input[@class='button-2 product-box-add-to-cart-button']");
    }

    get ShoppingCart()
    {
        return $("//span[.='Shopping cart']");
    }

    get logout()
    {
        return $("//a[.='Log out']");
    }

    async register(fn, ln, email, pwd, cpwd)
    {
        await this.registerlink.click();
        await this.maleRadiobtn.click();
        await this.firstnamefld.setValue(fn);
        await this.lastnamefld.setValue(ln);
        await this.emailfld.setValue(email);
        await this.passwordfld.setValue(pwd);
        await this.confirmPwdfld.setValue(cpwd);
        await this.registerbtn.click();
    }

    async login(email, pwd)
    {
        await this.loginlink.click();
        await this.emailfld.setValue(email);
        await this.passwordfld.setValue(pwd);
        await this.loginbtn.click();
    }

    async addProduct()
    {
        await this.Electronics.moveTo();
        await this.cellPhones.click();
        await this.addToCart.click();
        await this.ShoppingCart.click();
        await browser.pause(2000);
        await this.logout.click();
    }
}
export default new Homepage();