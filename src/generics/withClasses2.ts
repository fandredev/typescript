import { Data } from './../classes/classes';
import { Operation } from './withClasses';

class DifferenceDates extends Operation<Data, string> {

  protected getTime(date: Data): number {
    let { day, month, year } = date

    return new Date(`${day}/${month}/${year}`).getTime()
  }

  public execute() : string {
    const t1 = this.getTime(this.op1)
    const t2 = this.getTime(this.op2)
    const difference = Math.abs(t1 - t2)
    const day = 1000 * 60 * 60 * 24

    return `${Math.ceil(difference / day)} dia(s) `
  }
}

const d1 = new Data(1,4,2020)
const d2 = new Data(3,3,2021)
console.log(new DifferenceDates(d1, d2).execute());
