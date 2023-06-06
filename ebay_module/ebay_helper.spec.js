const { expect } = require('@playwright/test');


exports.EbayHelper = class EbayHelper {
    constructor(page) {this.page = page;}

/**
 * @param goto To invoke website ebay on browser
 */
async invokeWebsite(){
    await page.goto('http://www.ebay.com/');
}
/**
 * Shopping through searching by category
 */
async  searchByCategory(){
    await page.locator("//button[@id='gh-shop-a']").click()
    await page.locator("//a[text()='Cell phones & accessories']").click()
    await page.locator("//a[text()='Cell Phones & Smartphones']").click()
    
    await page.waitForTimeout(5000)
    await page.locator("(//button[contains(@type,'button')])[2]").click()
  
}
/**
 * Adding filters to refine the search results
 */
async addingFilter(){
    await page.waitForTimeout(5000)
    await page.locator("//span[text()='Screen Size']").click()
    await page.locator("//input[@id='c3-subPanel-Screen%20Size_6%20in%20or%20More_cbx']").click()
    await page.locator("//div[@id='c3-mainPanel-price']").click()
    await page.locator("//input[@aria-label='Minimum Value, US Dollar']").fill("50")
    await page.locator("//input[@aria-label='Maximum Value, US Dollar']").fill("500")
    await page.locator("//span[text()='Item Location']").click()
    await page.locator("//input[@value='US Only']").click()
    await page.locator("//button[text()='Apply']").click()
}
/**
 * Verifying filters to assert the search results
 */
async assertingFilter(){
    await page.locator("(//button[@type='button'])[5]").click()
    await expect(page.locator("(//span[@class='brm__item-label'])[1]")).toContainText("Screen Size: 6 in or More");
    await expect(page.locator("(//span[@class='brm__item-label'])[2]")).toContainText("Price: $50.00 to $500.00 filter applied");
    await expect(page.locator("(//span[@class='brm__item-label'])[3]")).toContainText("Item Location: US Only filter applied");                                                                          
  
}
/**
 * Change category and input the search
 */
async inputSearchBar(){
    await page.locator("//input[@id='gh-ac']").fill("macbook")
    await page.locator("//select[@id='gh-cat']").click()
    await page.waitForTimeout(5000)
    await page.locator("//select[@id='gh-cat']//option//following-sibling::option[text()='Computers/Tablets & Networking']").press(Enter)
    await page.locator("//input[@id='gh-btn']").click()
}
/**
 * Verify if page loads completely
 */
async verifyPageLoads(){
    await page.waitForLoadState('networkidle');
    await page.waitForFunction(() => document.readyState === 'complete');
}
/**
 * Assert result name of the first search
 */
async assertResultName(){
    await expect(page.locator("(//div[@class='s-item__info clearfix'])[2]")).toContainText("MacBook");                                                                          

}
}