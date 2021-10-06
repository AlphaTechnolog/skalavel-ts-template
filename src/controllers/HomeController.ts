import {Controller} from 'skalavel'

export class HomeController extends Controller {
  home(): void {
    this.htmlRes('<h1>Hello, World!</h1>')
  }
}