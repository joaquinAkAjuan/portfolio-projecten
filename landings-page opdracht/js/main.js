const button = document.getElementById("js--menu");
const closing = document.getElementById("js--close");
const navigation = document.getElementById("js--nav");
const body = document.getElementById("js--body");

button.onclick = function () {
    navigation.style.visibility = "visible";
    navigation.style.opacity = 1;
    body.style.overflow = "hidden";
};
closing.onclick = function () {
    navigation.style.visibility = "hidden";
    body.style.overflow = "visible";
};