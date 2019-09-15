import "./assert/css/index.css";
import "./assert/less/index.less";

function createElement() {
    const dom = document.createElement("div");
    dom.innerHTML = _.join(["hello", "world", "你好", "世界12"], "-");
    dom.classList.add("box");
    return dom;
}

const a = new Promise((resolve, reject) => {
    resolve(1);
});

a.then(res => {
    console.log(res, "shuchu");
});

async function ab() {
    return 2;
}

const b = ab();

b.then(res => {
    console.log(res, "威武");
});

console.log(b, "牛逼");
const divDom = createElement();
document.body.appendChild(divDom);
