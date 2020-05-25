
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';

  // import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { MatToolbarModule } from '@angular/material/toolbar';
  import { MatListModule } from '@angular/material/list';
  import { MatButtonModule } from '@angular/material/button';
  import { MatDividerModule } from '@angular/material/divider';
  import { MatIconModule } from '@angular/material/icon';




  @NgModule({
    imports: [
      // BrowserAnimationsModule,
      CommonModule,
      MatToolbarModule,
      MatListModule,
      MatButtonModule,
      MatDividerModule,
      MatIconModule
    ],
    exports: [
      MatToolbarModule,
      MatListModule,
      MatButtonModule,
      MatDividerModule,
      MatIconModule
    ]
  })

  export class AngularMaterialModule { }
