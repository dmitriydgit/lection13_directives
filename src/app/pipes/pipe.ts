import { Pipe, PipeTransform } from '@angular/core';
/*
 *   {{ 'это длинный текст который однозначно надо укоротить' | textReducer:10 }}
*/
@Pipe({ name: 'textReducer' })

export class TextReducerPipe implements PipeTransform {
	transform(value: string, size: number): string {
		return value.substring(0, size) + '...';
	}

}
