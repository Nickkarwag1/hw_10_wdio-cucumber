async function maximize() {
    await browser.maximizeWindow();
}

async function reloadSession() {
    await browser.reloadSession();
}
export { maximize, reloadSession };
