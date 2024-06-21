import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextPipeService {

  limitText(text: string, limite: number){
    const count = text.length
    text = text.slice(0, limite)
    if(count > limite){
      text += '...'
    }
    return text
  }
}
