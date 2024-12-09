import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class Ang2TagCloudComponent {
    tagArray: any;
    tag: any[];
    maxFontSize: number;
    minFontSize: number;
    animateTags: boolean;
    showInCircle: boolean;
    circleRadius: number;
    startPoint: number;
    onSelectionChane: EventEmitter<any>;
    ngOnInit(): void;
    tagSelection(id: any): void;
    isStringsArray(arr: any): any;
    processData(): void;
    addAnimation(tag: any[]): void;
    getRandFontSize(max: number, min: number): number;
    getRandomInt(quantity: number, maxValue?: number): number[];
    animateStop: boolean;
    myInterval: any;
    moveTags(animateFlag: boolean): void;
    stopAnimation(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Ang2TagCloudComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Ang2TagCloudComponent, "ang2-tag-cloud", never, { "tag": { "alias": "tag"; "required": false; }; "maxFontSize": { "alias": "maxFontSize"; "required": false; }; "minFontSize": { "alias": "minFontSize"; "required": false; }; "animateTags": { "alias": "animateTags"; "required": false; }; "showInCircle": { "alias": "showInCircle"; "required": false; }; "circleRadius": { "alias": "circleRadius"; "required": false; }; "startPoint": { "alias": "startPoint"; "required": false; }; }, { "onSelectionChane": "onSelectionChane"; }, never, never, true, never>;
}
