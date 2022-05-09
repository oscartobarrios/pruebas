const { Given, When, Then } = require('@cucumber/cucumber');





/*Given('I navigate to page {kraken-string}', async function(url) {
    return await this.driver.url(url);
}); */


When('I enter email {kraken-string}', async function(email) {
    let element = await this.driver.$('#ember7');
    return await element.setValue(email);

});

When('I enter password {kraken-string}', async function(password) {
    let element = await this.driver.$('#ember9')
    return await element.setValue(password);
});



When('I click in login', async function(){
    return await this.driver.$('#ember11').click();
});



When('I go to Tags and click on it', async function(){
    let element = await this.driver.$("*=Tags")
    return element.click();
});



When('Search the first tag on the list', async function(){
    let  element = await this.driver.$(".gh-list-chevron");
    antiguoTag = element.getText();

    return await element.click();
});



When('Change the name of the tag for {kraken-string}', async function(nombreTag){
    return await this.driver.$("#tag-name").setValue(nombreTag);
});



When('I click in button save', async function(){
    return await this.driver.$("span=Save").click();
})

Then('I navigate to page',async function(){
    //todo
})



//scenerario 2
When('I go to settings page', async function() {
    let element = await this.driver.$('[href="#/settings/"]');
    return await element.click()
})

When("I click in Staff", async function(){
    let element = await this.driver.$("#staff_svg__Regular");
    return await element.click()
})

When("I choose admin user", async function() {
    let element = await this.driver.$('h3=Admin test');
    return await element.click();
})

When ('I enter old password {kraken-string}', async function(old_password){
    let element = await this.driver.$('#user-password-old');
    return await element.setValue(old_password);
})

When('I enter new password {kraken-string}', async function(new_password){
    let element = await this.driver.$('#user-password-new');
    return await element.setValue(new_password);
})

When ('I enter verification of new password {kraken-string}', async function(password_confirm) {
    let element = await this.driver.$('#user-new-password-verification');
    return await element.setValue(password_confirm);
})

When('I click change password', async function() {
    let element = await this.driver.$("span=Change Password");
    return await element.click();
})


When('The new password should be old password', async function() {
    await this.driver.$('[href="#/settings/staff/"]').click()
    await this.driver.$('h3=Admin test').click();
    await this.driver.$('#user-password-old').setValue("NPruebasA123");
    await this.driver.$('#user-password-new').setValue("PruebasA123");
    await this.driver.$('#user-new-password-verification').setValue("PruebasA123");

    return await this.driver.$("span=Change Password").click();


})

Then('I navegate to page', function(){

})

/*
//scenario3
When('I go to view Site', async function() {
    let element = await this.driver.$('[href="#/site/"]');
    return await element.click();
})

/*When('I navigate to', async function() {
    let element = await this.driver.$(".gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button");
    return await element.click();
}) */

/*
When('I enter name {kraken-string}', async function(name) {
    let element = await this.driver.$("input[placeholder='Jamie Larson']");
    return await element.setValue(name);
} )

When('I enter email-user {kraken-string}', async function(email) {
    let element = await this.driver.$("#input-email");
    return await element.setValue(email);
})

When('I click button Sign up', async function() {
    let element = await this.driver.$("button=Sign up");
    return await element.click();
})

Then("I navigate to page", async function(){
    //todo

})


*/

//Scenario 4

When('I go to Members page', async function(){
    let element = await this.driver.$("[href='#/members/']");
    return await element.click();

})

When('I pick the first member of the list', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/table[1]/tbody[1]/tr[1]/a[1]/div[1]/div[1]/p[1]");
    return await element.click();
})

When('I click configuration member', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/header[1]/section[1]/span[1]/button[1]/span[1]/*[name()='svg'][1]");
    return await element.click();
})

When('I click delete member', async function() {
    let element = await this.driver.$(".red");
    return await element.click();
})

When('I click confirm delete member', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[2]/section[1]/div[2]/button[2]/span[1]");
    return await element.click();
})

Then('I navigate to page', async function() {
    //todo
}) 

//scenario 5

When('I go to Drafs page', async function(){
    let element = await this.driver.$("[href='#/posts/?type=draft']");
    return await element.click();

})

When('I pick the first post of the list', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]/p[1]");
    return await element.click();
})

When('I click settings post', async function() {
    let element = await this.driver.$("/html[1]/body[1]/div[2]/div[1]/main[1]/button[1]/span[1]/*[name()='svg'][1]");
    return await element.click();
})


When('I click delete post', async function() {
    let element = await this.driver.$("span*=Delete post");
    return await element.click();
})

When('I click confirm delete post', async function() {
    let element = await this.driver.$("span=Delete");
    return await element.click();
})

Then('I navigate to page', async function() {
    //todo
})






