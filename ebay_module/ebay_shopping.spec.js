const { test, expect } = require('@playwright/test');
const { waitFor } = require('wd/lib/commands');
const { EbayHelper } = require('./ebay_helper.spec');



test('Access a Product via category after applying multiple filters', async ({ page }) => {
  const ebayHelper  = new EbayHelper(page);
  await ebayHelper.invokeWebsite()
  await ebayHelper.searchByCategory()  
  await ebayHelper.addingFilter()
  await ebayHelper.assertingFilter()
});

test('Access a Product via Search', async ({ page }) => {
  const ebayHelper  = new EbayHelper(page);
  await ebayHelper.invokeWebsite()
  await ebayHelper.inputSearchBar()
  await ebayHelper.verifyPageLoads()
  await ebayHelper.assertResultName()
});
