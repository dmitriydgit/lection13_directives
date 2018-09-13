import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppMaterialModules } from './material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './toolbar.component';
import { MainComponent } from './main.component';
import { InnerLinksDirective } from './directives/inner-links.directive';
import { OuterLinksDirective } from './directives/outer-links.directive';
import { FontBoldDirective } from './directives/font-bold.directive';
import { MouseOverDirective } from './directives/mouse-over.directive';
import { SpinnerDirective } from './directives/spinner.directive';
import { TextReducerPipe } from './pipes/pipe';



const routes: Routes = [
	{
		path: '',
		component: MainComponent
	},
	{
		path: ':any',
		component: MainComponent
	}
]

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		CommonModule,
		RouterModule.forRoot(routes),
		// Material Modules
		AppMaterialModules,

	],
	declarations: [
		AppComponent,
		HeaderComponent,
		MainComponent,
		InnerLinksDirective,
		OuterLinksDirective,
		FontBoldDirective,
		MouseOverDirective,
		SpinnerDirective,
		TextReducerPipe
	],
	bootstrap: [AppComponent]
})
export class AppModule { }


