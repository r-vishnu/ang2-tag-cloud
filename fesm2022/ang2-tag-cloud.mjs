import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class Ang2TagCloudService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: Ang2TagCloudService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: Ang2TagCloudService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: Ang2TagCloudService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class Ang2TagCloudComponent {
    tagArray = [];
    tag = [];
    maxFontSize = 1;
    minFontSize = 20;
    animateTags = false;
    showInCircle = true;
    circleRadius = 100;
    startPoint = 100;
    onSelectionChane = new EventEmitter();
    ngOnInit() {
        this.processData();
    }
    tagSelection(id) {
        this.onSelectionChane.emit(this.tag[id]);
    }
    isStringsArray(arr) { return arr.every((i) => typeof i === "string"); }
    processData() {
        if (this.isStringsArray(this.tag)) {
            if (this.animateTags || this.showInCircle) {
                this.addAnimation(this.tag);
            }
            else {
                this.tagArray = this.tag.map((item) => {
                    return {
                        name: item,
                        size: {
                            "font-size": `${this.getRandFontSize(this.maxFontSize, this.minFontSize)}px`
                        }
                    };
                });
            }
        }
        else {
            if (this.animateTags || this.showInCircle) {
                let o = this.tag.map((x) => x.name);
                this.addAnimation(o);
            }
            else {
                this.tagArray = this.tag.map((obj) => {
                    return {
                        name: obj.name,
                        size: {
                            "font-size": `${this.getRandFontSize(this.maxFontSize, this.minFontSize)}px`
                        }
                    };
                });
            }
        }
    }
    addAnimation(tag) {
        let r = this.circleRadius;
        let randomeNumbers = this.getRandomInt(this.tag.length);
        let eee = r / this.tag.length;
        let randomeRadius = new Array(this.tag.length).fill(1).map((e, index) => this.getRandFontSize((index + 1) * eee, index * eee));
        this.tagArray = tag.map((item, index) => {
            let theta = randomeNumbers[index] * 2 * Math.PI;
            let xx = (index % 2) ? randomeRadius[index] : r;
            let yy = (index % 2) ? r : randomeRadius[index];
            let x = this.startPoint + xx * Math.cos(theta);
            let y = this.startPoint + xx * Math.sin(theta);
            let sdf = this.startPoint + r * Math.cos(theta);
            let red = this.startPoint + r * Math.cos(theta - 2.76);
            return {
                name: item,
                size: {
                    "font-size": `${this.getRandFontSize(this.maxFontSize, this.minFontSize)}px`,
                    left: `${x}px`,
                    top: `${y}px`,
                    position: "absolute",
                    opacity: 1
                },
                xMax: (sdf < red) ? red : sdf,
                xMin: (sdf > red) ? red : sdf,
                theta: theta,
                moveRight: true
            };
        });
    }
    getRandFontSize(max, min) {
        return Math.random() * (max - min) + min;
    }
    getRandomInt(quantity, maxValue = 1) {
        let max = maxValue;
        if (maxValue == 1) {
            max = quantity * 5;
        }
        const arr = [];
        let count = 0;
        while (arr.length < quantity) {
            ++count;
            let candidateInt = (Math.random() * (max - 0) + 0);
            if (maxValue == 1) {
                candidateInt = candidateInt / max;
            }
            // if(arr.length<(max-2) && count<5){
            //   let a = arr.filter(x=> x+2)
            // }
            if (arr.indexOf(candidateInt) === -1)
                arr.push(candidateInt);
        }
        return (arr);
    }
    animateStop = true;
    myInterval = null;
    moveTags(animateFlag) {
        if (!this.animateTags) {
            return;
        }
        this.animateStop = animateFlag;
        this.myInterval = setInterval(() => {
            if (!animateFlag) {
                let jjj = [...this.tagArray];
                this.tagArray = [];
                this.tagArray = jjj.map((tag, index) => {
                    let left = tag.size.left;
                    let { moveRight } = tag;
                    let h = parseInt(tag.size.left.slice(0, -2));
                    let opacity = 1;
                    let ran = this.getRandFontSize(4, 0);
                    if (h + ran <= tag.xMax && moveRight) {
                        left = `${h + ran}px`;
                        opacity = 1;
                    }
                    else {
                        moveRight = false;
                    }
                    if (h - ran >= tag.xMin && !moveRight) {
                        opacity = 0.5;
                        left = `${h - ran}px`;
                    }
                    else {
                        moveRight = true;
                    }
                    // let top = `${parseInt(tag.size.top.slice(0, -2))+2}px`;
                    let size = { ...tag.size, ...{ left }, ...{ opacity } };
                    return { ...tag, ...{ size: size }, ...{ moveRight } };
                });
            }
        }, 50);
    }
    stopAnimation() {
        if (this.animateTags) {
            this.animateStop = true;
            clearInterval(this.myInterval);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: Ang2TagCloudComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.0.1", type: Ang2TagCloudComponent, isStandalone: true, selector: "ang2-tag-cloud", inputs: { tag: "tag", maxFontSize: "maxFontSize", minFontSize: "minFontSize", animateTags: "animateTags", showInCircle: "showInCircle", circleRadius: "circleRadius", startPoint: "startPoint" }, outputs: { onSelectionChane: "onSelectionChane" }, ngImport: i0, template: "<div class=\"ang2-tag-cloud\" (mouseenter)=\"moveTags(false)\" (mouseleave)=\"stopAnimation()\">\r\n    <ul  id=\"tagcloud\" class=\"ang2-tag-cloud_list\" >\r\n      @for (tag of tagArray; let idx = $index; track tag.name) {\r\n       <li [ngStyle]=\"tag.size\">\r\n         <a \r\n         onmouseover=\"this.style.color='orange';\" onmouseout=\"this.style.color='';\"\r\n         (click)=\"tagSelection(idx)\">{{tag.name}}</a> \r\n       </li>\r\n     }\r\n         </ul>\r\n  </div>", styles: [".ang2-tag-cloud{position:relative;height:200px;width:200px}ul.ang2-tag-cloud_list li{list-style:none;margin-right:4px;animation:CRT 5s infinite linear}ul.ang2-tag-cloud_list li a{display:block;text-decoration:none;color:#a69a9a;cursor:pointer;padding:3px 10px}ul.ang2-tag-cloud_list li a:hover{font-size:200%}ul.ang2-tag-cloud_list li a .active{font-size:105%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: Ang2TagCloudComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ang2-tag-cloud', imports: [CommonModule], template: "<div class=\"ang2-tag-cloud\" (mouseenter)=\"moveTags(false)\" (mouseleave)=\"stopAnimation()\">\r\n    <ul  id=\"tagcloud\" class=\"ang2-tag-cloud_list\" >\r\n      @for (tag of tagArray; let idx = $index; track tag.name) {\r\n       <li [ngStyle]=\"tag.size\">\r\n         <a \r\n         onmouseover=\"this.style.color='orange';\" onmouseout=\"this.style.color='';\"\r\n         (click)=\"tagSelection(idx)\">{{tag.name}}</a> \r\n       </li>\r\n     }\r\n         </ul>\r\n  </div>", styles: [".ang2-tag-cloud{position:relative;height:200px;width:200px}ul.ang2-tag-cloud_list li{list-style:none;margin-right:4px;animation:CRT 5s infinite linear}ul.ang2-tag-cloud_list li a{display:block;text-decoration:none;color:#a69a9a;cursor:pointer;padding:3px 10px}ul.ang2-tag-cloud_list li a:hover{font-size:200%}ul.ang2-tag-cloud_list li a .active{font-size:105%}\n"] }]
        }], propDecorators: { tag: [{
                type: Input
            }], maxFontSize: [{
                type: Input
            }], minFontSize: [{
                type: Input
            }], animateTags: [{
                type: Input
            }], showInCircle: [{
                type: Input
            }], circleRadius: [{
                type: Input
            }], startPoint: [{
                type: Input
            }], onSelectionChane: [{
                type: Output
            }] } });

/*
 * Public API Surface of ang2-tag-cloud
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Ang2TagCloudComponent, Ang2TagCloudService };
//# sourceMappingURL=ang2-tag-cloud.mjs.map
