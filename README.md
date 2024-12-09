# ang2-tag-cloud


##Angular Tag Cloud


## Installation

To install this library, run:

```bash
$ npm install ang2-tag-cloud --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Ang2TagCloudComponent } from 'ang2-tag-cloud';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ang2TagCloudModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage it in your code

```xml
<ang2-tag-cloud 
[tag]="tag" />

```

## attributes

```xml
tags                :  array of tags or  array of objects , required. data source for tag list ( if its an object array then each object must contain a key "name" to hold the                          tag name"
onSelect            : callback function that is executed when a new tag is selected. e.g. (onSelectionChane)="onSelectionChane($event)"
minFontSize         : number, minimum allowed font size
maxFontSize         : number, maximum allowed font size
animateTags         : if true show animation effect of hover
showInCircle        : if false then show items in column and if u need in row give display:flex to class 'ang2-tag-cloud_list', by default it will be true and tags will display in circle
circleRadius        : number, the radius of circle
startPoint          : number, start point of circle 
```