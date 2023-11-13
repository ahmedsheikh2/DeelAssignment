class Deel {
    constructor(page) {
      this.page = page;
    }
  
    get typerole() {
      return this.page.locator('//input[@placeholder="Select a role"]');
    }
  
    async typeRole(role) {
      const input = this.typerole;
      await input.clear();
      await input.type(role);
      await input.press('Enter'); 
    }
  
    get selectaccountant() {
      return this.page.locator('//div[text()="Accountant"]');
    }
  
    selectAccountant() {
      return this.selectaccountant.click();
    }

    get selectqaEngineer() {
        return this.page.locator('//div[text()="QA Engineer"]');
    }
    
      selectQAEngineer() {
        return this.selectqaEngineer.click();
    }

    get selectsoftwareEngineer() {
        return this.page.locator('//div[text()="Software Engineer"]');
    }
    
      selectSoftwareEngineer() {
        return this.selectsoftwareEngineer.click();
    }
  
    get selectcountry() {
      return this.page.locator('//input[@placeholder="Select a country"]');
    }
  
    async typeBrazil(brazil) {
      const input = this.selectcountry;
      await input.clear();
      await input.type(brazil);
    }
    
    async typeCanada(canada) {
      const input = this.selectcountry;
      await input.clear();
      await input.type(canada);
    }
    
    async typeJapan(japan) {
      const input = this.selectcountry;
      await input.clear();
      await input.type(japan);
    }

    get selectbrazil() {
        return this.page.locator('//p[text()="Brazil"]');
    }
    
      selectBrazil() {
        return this.selectbrazil.click();
    }
    get selectcanada() {
        return this.page.locator('//p[text()="Canada"]');
    }
    
      selectCanada() {
        return this.selectcanada.click();
    }
    get selectjapan() {
        return this.page.locator('//p[text()="Japan"]');
    }
    
      selectJapan() {
        return this.selectjapan.click();
    }


    get searchbutton() {
        return this.page.locator('//button[text()="Search"]');
    }
    
    clickSearchButton() {
        return this.searchbutton.click();
    }


     // Assertions Locators

      getaccountantAssertionMessage() {
        return this.page.locator('//h2[text()="Accountant"]');
      }
      getqaAssertionMessage() {
        return this.page.locator('//h2[text()="QA Engineer"]');
      }
      getsoftwareEngineerAssertionMessage() {
        return this.page.locator('//h2[text()="Software Engineer"]');
      }
  


  }
  
  export default Deel;
  