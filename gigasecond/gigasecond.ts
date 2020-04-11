export default class Gigasecond {
  private dateInt: Date;
  constructor(date: Date) {
    this.dateInt = date;
  }
  date(): Date {
    const gigasecondInMs = Math.pow(10, 12);

    return new Date(this.dateInt.getTime() + gigasecondInMs);
  }
}
