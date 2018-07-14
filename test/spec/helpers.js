/* globals jest */
import {
  dateToNumber,
  numberToDate
} from '../../lib/helpers';

describe('helpers', () => {
  describe('dateToNumber', () => {
    it('returns a date transformed to a number', () => {
      const date = new Date('1/1/70 14:15');
      expect(dateToNumber(date)).toEqual(date.getTime());
    });

    it('returns same number if passed a number', () => {
      expect(dateToNumber(10)).toEqual(10);
    });
  });

  describe('numberToDate', () => {
    it('returns a number transformed to a date', () => {
      expect(numberToDate(123)).toEqual(new Date(123));
    });

    it('returns same date if passed a date', () => {
      const date = new Date('1/1/70 14:15');
      expect(numberToDate(date)).toBe(date);
    });
  });
});
