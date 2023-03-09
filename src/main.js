import count from "./js/count";
import sum from "./js/multisum";
import './css/iconfont.css'
import './css/common.css'
import './less/common.less'
import './sass/common.sass'
import './sass/common.scss'
import './stylus/common.styl'

let countNum = count(1, 2)
console.log(countNum)
const multiSum = sum(1, 1, 3, 1, 99)
console.log(multiSum)
const countspan = document.querySelector('.countspan')
countspan.innerHTML = countNum
const sumspan = document.querySelector('.sumspan')
sumspan.innerHTML = multiSum