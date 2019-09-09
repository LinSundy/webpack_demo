import _ from 'lodash';
import './assert/css/index.css';
import './assert/less/index.less';

function createElement() {
    let dom = document.createElement('div');
    dom.innerHTML = _.join(['hello', 'world', '你好', '世界'], '-');
    dom.classList.add('box');
    return dom;
}

let divDom = createElement();
document.body.appendChild(divDom);

