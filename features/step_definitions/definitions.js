const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');

Given(/^打开客户端$/, async function () {
    await driver.sleep(5*1000)
});

When(/^点击侧边栏$/, async function () {

    await driver.elementByAndroidUIAutomator('new UiSelector().className("android.widget.ImageButton")').click()
});

Then(/^点击头像$/, async function () {

    await driver.elementById('org.cnodejs.android.md:id/tv_login_name').click();
});

Given(/^登录输入"([^"]*)"$/, async function (text) {

    await driver.elementById('org.cnodejs.android.md:id/edt_access_token').sendKeys(text);
});

When(/^点击登录$/, async function () {

    await driver.elementById('org.cnodejs.android.md:id/btn_login').click();
});

