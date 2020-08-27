import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(CSSRulePlugin, MotionPathPlugin, ScrollToPlugin, ExpoScaleEase, RoughEase, SlowMo);


function shake() {
    let anim = null;
    let historyPoints = [[15,25]];
    const amountEl = $('.about__el').length;
    let wrap = $('.js-snack__wrap');
    let confSnake = {
        height: 800,
        width: wrap.width(),
        gap : 30
    };

    let svg = Snap($(".snake")[0]);
    let figure = svg.select('path');
    let curLine = 0;
    let curPoint = {x:15,y:25};
    let curNumPoint = 0;
    let listPoints = [];
    let points = [
        [[confSnake.gap/2,25],[ confSnake.width/2,255], [confSnake.width-(confSnake.gap/2) ,25]],
        [[confSnake.gap/2,855],[confSnake.width/2,855],[confSnake.width-(confSnake.gap/2),855]]
    ];
    points = points.concat(createPoints(855, 855, 855 ,570, 800, 30));
    function createPoints(xc1, xc2, xc3 ,min, max, gap) {
        let arr = [];
        let x1 = xc1;
        let x2 = xc2;
        let x3 = xc3;
        for(let i = amountEl/2; i > 0; i--){
            if(i % 2 !== 0 ) {
                x1 += max+ gap;
                x2 += min+ gap;
                x3 += max+ gap;
                arr.push([[confSnake.gap/2,x1],[confSnake.width/2,x2],[confSnake.width-(confSnake.gap/2),x3]])
            } else {
                x1 += min+ gap;
                x2 += max+ gap;
                x3 += min+ gap;
                arr.push([[confSnake.gap/2,x1],[confSnake.width/2,x2],[confSnake.width-(confSnake.gap/2),x3]])
            }
        }
        return arr
    }

    // let nextPoint = getNextPoint(prevPoint, curLine, curNumPoint,points);
    // let numNextPoint = randomInteger(1, nextPoint.length);

    listPoints.push(...addListPoints(15));

    animateSnake(listPoints);
    callbackAnimate();
    function addListPoints(amount) {
        // let curLine = 0;
        // let curPoint = {x:15,y:25};
        // let curNumPoint = 0;
        let list = [];
        for (let i = amount; i >= 0; i--){
            let nextPoint = getNextPoint(historyPoints, curLine, curNumPoint,points,amountEl);
            let numNextPoint = randomInteger(0, nextPoint.length-1);
            curPoint =  {x:nextPoint[numNextPoint].cor[0], y:nextPoint[numNextPoint].cor[1]};
            curLine = nextPoint[numNextPoint].curLine;
            curNumPoint = nextPoint[numNextPoint].curNumPoint;
            historyPoints.push(nextPoint[numNextPoint].cor);
            list.push(curPoint);
        }

       historyPoints = historyPoints.splice(historyPoints.length - 3,historyPoints.length);
       return list;
    }
    function newAnimate() {
        animateSnake(addListPoints(15));
    }
    function animateSnake(path) {
        let easy = ["none", "sine", "power0","power1", "circ"];
        anim = gsap.to('#snake', {
            motionPath : {
                path: path,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                curviness: 0
            },
            transformOrigin: "50% 50%",
            duration: path.length*2,
            ease: easy[randomInteger(0,4)],
            onComplete: function (){
                console.log('callback');
                newAnimate()
            }
        });
    }
    function callbackAnimate() {
        let snake1 = "M32.62,5.3l.09-.06L32.56,5l-.28.17-1.69-.12a4,4,0,0,0-1.46-1.39,2.27,2.27,0,0,0-2.25-.21c-.38.19-.46.38-.94.48L25.45,4h0a5.16,5.16,0,0,1-1.69-.38,10.86,10.86,0,0,1-2.3-1.68C19-.22,17-.41,13.34.56a16.42,16.42,0,0,0-3.86,1.8c-3,2.07-6.17,2.07-7.43,1.33-.26-.15-.78-.48-1.22-.77-1.27-.61-1.07-.25.52,1,2.07,1.57,3,1.74,6.92.57,1.5-.44,2.55-1.36,4.24-2.08a8.23,8.23,0,0,1,4.24-.8,5.89,5.89,0,0,1,3,1.11c1.48,1.16,2.95,2.45,4.39,2.66.32,0,.83.08,1.27.13h0A2.43,2.43,0,0,1,27,5.7c.8.75,3,.37,3.55-.19a.32.32,0,0,0,.09-.17l1.65.12.3.15.14-.24Z";
        let snake2 = "M31.59,2.06,31.68,2l-.15-.24-.28.17-.63-.06A3.84,3.84,0,0,0,29.13.42a2.28,2.28,0,0,0-2.25-.2c-.38.18-.46.37-.94.47-.14,0-.31.05-.49.07-.44.05-.95.08-1.27.13-1.44.22-2.91,1.5-4.39,2.67a6,6,0,0,1-3,1.1,8.2,8.2,0,0,1-4.24-.79c-1.69-.73-2.74-1.65-4.24-2.09C4.33.61,3.42.78,1.35,2.36-.24,3.57-.44,3.92.83,3.31c.44-.28,1-.62,1.22-.77,1.26-.73,4.44-.73,7.43,1.33a16,16,0,0,0,3.86,1.8c3.69,1,5.68.78,8.12-1.38a10.86,10.86,0,0,1,2.3-1.68,5.2,5.2,0,0,1,1.69-.37A2.44,2.44,0,0,1,27,2.46c.8.75,3,.38,3.55-.18a.67.67,0,0,0,.06-.12l.65.06.3.16.14-.25Z";
        animateSnakeBody(snake2, function () {});
        setTimeout(()=>{
            animateSnakeBody(snake1, callbackAnimate);
        },550);

    }
    function animateSnakeBody(path, callback) {
        figure.animate({'d':path},
            500,mina.linear,callback);
    }
    function debounce(f, t) {
        return function (args) {
            let previousCall = this.lastCall;
            this.lastCall = Date.now();
            if (previousCall && ((this.lastCall - previousCall) <= t)) {
                clearTimeout(this.lastCallTimer);
            }
            this.lastCallTimer = setTimeout(() => f(args), t);
        }
    }
    function ressize() {
        if(window.innerWidth > 1023){
        } else if(window.innerWidth > 767){
        } else {
        }

        anim.pause();
        anim.progress(0);
        anim.kill();
        historyPoints = [[15,25]];
        confSnake = {
            height: 800,
            width: $('.js-snack__wrap').width(),
            gap : 30
        };
        points = [
            [[confSnake.gap/2,25],[ confSnake.width/2,255], [confSnake.width-(confSnake.gap/2) ,25]],
            [[confSnake.gap/2,855],[confSnake.width/2,855],[confSnake.width-(confSnake.gap/2),855]]
        ];
        points = points.concat(createPoints(855, 855, 855 ,570, 800, 30));

        console.log(points);
        newAnimate();
    }

    window.addEventListener('resize', debounce(ressize, 100));

}

function getNextPoint(historyPoints,curLine, curNumPoint,points,amountEl) {
    let arr = [];
        if(curLine > 0 ){
            arr.push({
                cor: points[curLine-1][curNumPoint],
                curLine: curLine-1,
                curNumPoint: curNumPoint
            });
        }
        if(curNumPoint > 0){
            arr.push({
                    cor: points[curLine][curNumPoint-1],
                    curLine: curLine,
                    curNumPoint: curNumPoint-1
            })
        }
        if (curNumPoint < 2){
            arr.push({
                    cor: points[curLine][curNumPoint+1],
                    curLine: curLine ,
                    curNumPoint: curNumPoint+1
            });
        }
        if (curLine < amountEl / 2){
            arr.push({
                    cor: points[curLine+1][curNumPoint],
                    curLine: curLine+1,
                    curNumPoint: curNumPoint
            });
        }
    if(historyPoints.length < 2) return arr;
    return arr.filter(point =>point.cor[0] !== historyPoints[historyPoints.length-2][0] || point.cor[1] !== historyPoints[historyPoints.length-2][1]);
}

function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

(function () {
    shake();
})();
