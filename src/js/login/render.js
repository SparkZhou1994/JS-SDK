export default (container) => {
    const tpl = `<form id="form">
    <input id="input" name="uname" type="text" />
    <input name="password" type="password" />
    <input value="login" id="submit" type="submit" />
    </form>`;
    container.innerHTML = tpl;
}