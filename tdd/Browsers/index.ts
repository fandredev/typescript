import { I_Browsers } from './interfaces'
namespace Browsers {
    abstract class Base<Type,Number> implements I_Browsers<Type,Number> {
        name: Type
        data: Type
        version_now: Number
        percent: Number
        year_find: Number
        image_url: Type
        constructor(name: Type, data: Type, version_now: Number, percent: Number, year_find: Number, image_url: Type) {
            this.name = name
            this.data = data
            this.version_now = version_now
            this.percent = percent
            this.year_find = year_find
            this.image_url = image_url
        }
    }
    export class Browsers<Type,Number> extends Base<Type, Number> {
        name: Type
        data: Type
        version_now: Number
        percent: Number
        year_find: Number
        image_url: Type
        constructor(name: Type, data: Type, version_now: Number, percent: Number, year_find: Number, image_url: Type) {
            super(name, data, version_now, percent, year_find, image_url)
            this.name = name
            this.data = data
            this.version_now = version_now
            this.percent = percent
            this.year_find = year_find
            this.image_url = image_url
        }
    }
}


const created = new Browsers.Browsers<string,number>('Google Chrome', '2 de setembro de 2008', 60.0, 59, 2018, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/50px-Google_Chrome_icon_%28September_2014%29.svg.png')
const created2 = new Browsers.Browsers('Safari', '7 de Janeiro de 2003', 11.0, 4, 2013, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/50px-Safari_browser_logo.svg.png')

const browsers = {
    created,
    created2
}

Object.freeze(browsers)
console.log(browsers)

