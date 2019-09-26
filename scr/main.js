let code = document.querySelector('#code')
let style = document.querySelector('#style')
let slow = document.querySelector('#slow')
let normal = document.querySelector('#normal')
let fast = document.querySelector('#fast')
let pause = document.querySelector('#pause')
//防抖动
function preventBehavior(e) {
    e.preventDefault();
};
document.addEventListener("touchmove", preventBehavior, { passive: false }, false);
let duration = 50
fast.addEventListener('click', () => {
    duration = 0
})
normal.addEventListener('click', () => {
    duration = 50
})
slow.addEventListener('click', () => {
    duration = 100
})
pause.addEventListener('click', () => {
    if (start) {
        start = false
        pause.textContent = '继续'
    } else {
        start = true
        pause.textContent = '暂停'
        if (n < string.length) {
            step()
        }
        else return
    }
})
let start = true
let string =
    `/*桂宝寒，你就是个渣男
    现在把你的龟头画出来给大家看看*/
/*先找个地方把写代码的位置固定下*/
#code{
   box-shadow:0 0 5px #000;
}
/*再设置几个可以调速度的按钮吧*/
.speed{
    display:flex;
    height: 20px;
    width: 50px;
    box-shadow: 0 0 3px 0;
}
/*然后就在下面画杰尼龟吧*/

/*先把背景颜色设定一下*/
#demo{
    background: rgb(156, 213, 231);
    display:flex;
    justify-content:center;
    align-items: center;
    position:relative;
}
/*规定个地方画杰尼龟吧！*/
#preview{
    height: 400px;
    width: 400px; 
    position: absolute;
    border:1px red solid;
}
/*然后画两个眼睛吧*/
.eye {
    height: 120px;
    width: 90px;
    border-top-left-radius: 50% 50%;
    border-top-right-radius: 50% 50%;
    border-bottom-left-radius: 50% 15%;
    border-bottom-right-radius: 50% 15%;
    background:black;
}
.eye.right {
    transform: rotate(-5deg);
}
.eye.left {
    transform: rotate(5deg);
}
/*加上眼瞳*/
.iris-right2 {
    height: 80px;
    width: 80px;
    background: rgb(125, 41, 35);
    border-radius: 50%;
}

.iris-left2 {
    height: 80px;
    width: 80px;
    background: rgb(125, 41, 35);
    border-radius: 50%;
}

.iris-right3 {
    height: 60px;
    width: 45px;
    background: white;
    border-radius: 50%;
    transform: rotate(27deg);
}

.iris-left3 {
    height: 60px;
    width: 45px;
    background: white;
    border-radius: 50%;
    transform: rotate(36deg);
}

.iris-right4 {
    height: 35px;
    width: 8px;
    background: white;
    border-radius: 50%;
    transform: rotate(-15deg)
}

.iris-left4 {
    height: 32px;
    width: 8px;
    background: white;
    border-radius: 50%;
    transform: rotate(-25deg)
}

.iris-right5 {
    height: 10px;
    width: 4px;
    background: white;
    border-radius: 50%;
    transform: rotate(-15deg)
}

.iris-left5 {
    height: 10px;
    width: 4px;
    background: white;
    border-radius: 50%;
    transform: rotate(-25deg)
}
.iris-right1 {
    height: 100px;
    width: 70px;
    background: black;
    border-radius: 50%;
    transform: rotate(3deg);
}

.iris-left1 {
    height: 100px;
    width: 70px;
    background: black;
    border-radius: 50%;
    transform: rotate(17deg);
}
/*加上眉毛*/
.brow-left {
    height: 10px;
    width: 35px;
    border: 1px solid;
    border-color: black transparent transparent transparent;
    border-radius: 50%;
    transform: rotate(40deg);
}

.brow-right {
    height: 10px;
    width: 35px;
    border: 1px solid;
    border-color: black transparent transparent transparent;
    border-radius: 50%;
    transform: rotate(-40deg);
}
/*再来画画鼻子*/
.nose-left {
    height: 0px;
    width: 15px;
    border-style: solid;
    border-color: rgb(44, 49, 42) transparent transparent transparent;
    border-width: 1px;
    transform: rotate(-38deg) translateX(20px);
}
.nose-right {
    height: 0px;
    width: 15px;
    border-style: solid;
    border-color: rgb(44, 49, 42) transparent transparent transparent;
    border-width: 1px;
    transform: rotate(38deg) translateX(-20px);
}
/*然后是最麻烦的嘴巴*/
/*先画上嘴唇吧*/
.mouse-top.left {
    height: 10px;
    width: 180px;
    background: rgb(76, 48, 47);
    border-top-left-radius: 75% 100%;
    border-top-right-radius: 25% 100%;
}
.mouse-top.right {
    height: 10px;
    width: 180px;
    background: rgb(76, 48, 47);
    border-top-right-radius: 75% 100%;
    border-top-left-radius: 25% 100%;
}  
/*然后是下嘴唇*/

.mouse-bottom.left {
    height: 70px;
    width: 180px;
    background: rgb(76, 48, 47);
    border-top-left-radius: 0;
    border-bottom-left-radius: 100%;
}
.mouse-bottom.right {
    height: 70px;
    width: 180px;
    background: rgb(76, 48, 47);
    border-top-right-radius: 0;
    border-bottom-right-radius: 100%;
}
/*最后再加上小舌头*/
.tr {
    height: 180px;
    width: 300px;
    background: rgba(190, 69, 58, 1);
    border-radius: 50%;
}

.br {
    background: rgba(190, 69, 58, 1);
    height: 180px;
    width: 300px;
    border-radius: 50%;
}
.tf {
    height: 180px;
    width: 300px;
    background: rgba(190, 69, 58, 1);
    border-radius: 50%;
}

.bf {
    height: 180px;
    width: 300px;
    background: rgba(190, 69, 58, 1);
    border-radius: 50%;
    overflow: hidden;
}
.sr {
    height: 60px;
    width: 113px;
    background: rgb(247, 145, 140);
    border-bottom-right-radius: 60% 45%;
    border-top-right-radius: 60% 55%;
    border-bottom-left-radius: 1%;
    border-top-left-radius: 40% 50%;
}

.sl {
    height: 70px;
    width: 180px;
    background: rgb(247, 145, 140);
    border-bottom-right-radius: 0%;
    border-top-right-radius: 60% 55%;
    border-bottom-left-radius: 1%;
    border-top-left-radius: 40% 50%;
}

/*再把边框去掉*/
#preview{
    border:none;
}
/*就快完成了，还差一点点小细节*/
#preview{
    display:none;
}
#image{
    display:block;
}
/*桂宝寒，快点含住自己的龟头，我dnm*/
`
let string2 = ""
let n = 0
let step = () => {
    if (start) {
        setTimeout(() => {
            if (string[n] === '\n') {
                string2 += '<br>'
            }
            if (string[n] === ' ') {
                string2 += '&nbsp'
            }
            else {
                string2 += string[n]
            }
            style.innerHTML = string.substring(0, n)
            code.innerHTML = string2
            code.scrollTo(0, 9999)
            n += 1
            if (n < string.length) {
                step()
            }
        }, duration)
    }
}
step()
