import { Base } from './base'
namespace N_Disease {
    export class Covid<str, num> extends Base<str, num> { }
}
const date = new Date()
const createdRegistry: Readonly<object> = new N_Disease.Covid(
    'covid 19',
    'América',
    'Brazil',
    'São Paulo',
    'WHO',
    739503,
    304930,
    396737,
    38406,
    date.toString()
)

console.log(createdRegistry)