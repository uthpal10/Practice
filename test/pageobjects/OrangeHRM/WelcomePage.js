class WelcomePage
{
    get usernamefld()
    {
        return $("//input[@name='username']");
    }

    get passwordfld()
    {
        return $("//input[@name='password']");
    }

    get submitbtn()
    {
        return $("//button[@type='submit']");
    }

    async loginaction()
    {
        await this.usernamefld.setValue("Admin");
        await this.passwordfld.setValue("admin123");
        await this.submitbtn.click();
    }
}
export default new WelcomePage();