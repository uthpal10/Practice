class Homepage
{
    
    get accountIcon()
    {
        return $("//img[@id='img-black']");
    }

    get emailIdfld()
    {
        return $("//input[@id='email']");
    }

    get pwdfld()
    {
        return $("//input[@id='passwd']");
    }

    get signinbtn()
    {
        return $("//button[@data-action='login']");
    }
    
    get ()
    {
        return $();
    }

    async Signin(email, pwd)
    {
        await this.accountIcon.click();
        await this.emailIdfld.setValue(email);
        await this.pwdfld.setValue(pwd);
        await this.signinbtn.click();
        await browser.pause(2000);
    }
}
export default new Homepage();