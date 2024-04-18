class AdmAddUser
{
    get EmpNamefld()
    {
        return $("//div[@class='oxd-input-group oxd-input-field-bottom-space' and .='Employee Name']/descendant::input[@placeholder='Type for hints...']");
    }

    get usernamefld()
    {
        return $("//div[@class='oxd-input-group oxd-input-field-bottom-space' and .='Username']/descendant::input[@class='oxd-input oxd-input--active']");
    }

    get passwordfld()
    {
        return $("//div[@class='oxd-input-group oxd-input-field-bottom-space' and .='Password']/descendant::input[@class='oxd-input oxd-input--active']");
    }

    get confirmpwdfld()
    {
        return $("//div[@class='oxd-input-group oxd-input-field-bottom-space' and .='Confirm Password']/descendant::input[@class='oxd-input oxd-input--active']");
    }

    get userroleDD()
    {
        return $("//div[@class='oxd-input-group oxd-input-field-bottom-space' and contains(.,'User Role')]/descendant::div[@class='oxd-select-text oxd-select-text--active']");
    }

    get ESS()
    {
        return $("//span[.='ESS']")
    }

    get statusDD()
    {
        return $("//div[@class='oxd-input-group oxd-input-field-bottom-space' and contains(.,'Status')]/descendant::div[@class='oxd-select-text oxd-select-text--active']");
    }

    get Enabled()
    {
        return $("//span[.='Enabled']");
    }

    get savebtn()
    {
        return $("//button[normalize-space()='Save']");
    }

    get cancelbtn()
    {
        return $("//button[normalize-space()='Cancel']");
    }

    get userNameSrchfld()
    {
        return $("//div[@class='oxd-grid-item oxd-grid-item--gutters' and .='Username']/descendant::input[@class='oxd-input oxd-input--active']");
    }

    get userRoleSrchDD()
    {
        return $("//div[@class='oxd-grid-item oxd-grid-item--gutters' and contains(.,'User Role')]/descendant::div[@class='oxd-select-text oxd-select-text--active']");
    }

    get empNameSrchfld()
    {
        return $("//div[@class='oxd-grid-item oxd-grid-item--gutters' and .='Employee Name']/descendant::div[@class='oxd-autocomplete-text-input oxd-autocomplete-text-input--active']")
    }

    get StatusSrchDD()
    {
        return $("//div[@class='oxd-input-group oxd-input-field-bottom-space' and contains(.,'Status')]/descendant::div[@class='oxd-select-text oxd-select-text--active']")
    }

    get srchbtn()
    {
        return $("//button[normalize-space()='Search']");
    }

    async addUser(ename, un, pwd, cpwd)
    {
        await this.userroleDD.click();
        await this.ESS.click();
        await this.EmpNamefld.setValue(ename);
        await this.statusDD.click();
        await this.Enabled.click();
        await this.usernamefld.setValue(un);
        await this.passwordfld.setValue(pwd);
        await this.confirmpwdfld.setValue(cpwd);
        await this.savebtn.click();
        await browser.pause(3000);
    }

    async searchUser(empun, empname)
    {
        // await this.userNameSrchfld.setValue(empun);
        await this.userRoleSrchDD.click();
        await this.ESS.click();
        // await this.empNameSrchfld.setValue(empname);
        await this.StatusSrchDD.click();
        await this.Enabled.click();
        await this.srchbtn.click();
    }    
}
export default new AdmAddUser();