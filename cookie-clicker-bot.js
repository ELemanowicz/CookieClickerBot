
function startCookieClicking() {
    loopedClick();
}

function loopedClick() {
    setTimeout(() => {
        clickCookie();
        clickUpgradeIfAvailable();
        clickProductIfAvailable();
        loopedClick();
    }, 10);
}

function clickCookie() {
    document.getElementById("bigCookie").click();
}

function clickUpgradeIfAvailable() {
    const activeUpgrade = document.querySelector(".upgrade.enabled");
    if (activeUpgrade) {
        activeUpgrade.click();
    }
}

function clickProductIfAvailable() {
    const activeHelper = document.querySelector(".product.unlocked.enabled");
    if (activeHelper) {
        activeHelper.click();
    }
}

startCookieClicking();