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

import { Ang2TagCloudModule } from 'ang2-tag-cloud';

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
<app-ang 
[tags]="tagArray" 
(onSelect)="onSelectionChane($event)" 
maxFontSize="6" 
minFontSize="1"></app-ang>

```

## attributes

```xml
tags                :  array of tags or  array of objects , required. data source for tag list ( if its an object array then each object must contain a key "name" to hold the                          tag name"
onSelect            : callback function that is executed when a new tag is selected. e.g. (onSelectionChane)="onSelectionChane($event)"
minFontSize         : number, minimum allowed font size
maxFontSize         : number, maximum allowed font size
```