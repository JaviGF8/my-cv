import { getBarDisplayData } from './barDomain';

describe('getBarDisplayData', () => {
  it('100/100 → percentage 100, bg-primary-darker', () => {
    expect(getBarDisplayData(100, 100)).toEqual({
      percentage: 100,
      colorClass: 'bg-primary-darker',
    });
  });

  it('90/100 → bg-primary-dark', () => {
    expect(getBarDisplayData(90, 100).colorClass).toBe('bg-primary-dark');
  });

  it('75/100 → bg-primary', () => {
    expect(getBarDisplayData(75, 100).colorClass).toBe('bg-primary');
  });

  it('60/100 → bg-secondary-darker', () => {
    expect(getBarDisplayData(60, 100).colorClass).toBe('bg-secondary-darker');
  });

  it('55/100 → bg-secondary-dark', () => {
    expect(getBarDisplayData(55, 100).colorClass).toBe('bg-secondary-dark');
  });

  it('40/100 → bg-secondary', () => {
    expect(getBarDisplayData(40, 100).colorClass).toBe('bg-secondary');
  });

  it('25/100 → bg-accent-darker', () => {
    expect(getBarDisplayData(25, 100).colorClass).toBe('bg-accent-darker');
  });

  it('10/100 → bg-accent-dark', () => {
    expect(getBarDisplayData(10, 100).colorClass).toBe('bg-accent-dark');
  });

  it('9/100 → bg-accent', () => {
    expect(getBarDisplayData(9, 100).colorClass).toBe('bg-accent');
  });

  it('0/100 → percentage 0, bg-accent', () => {
    expect(getBarDisplayData(0, 100)).toEqual({ percentage: 0, colorClass: 'bg-accent' });
  });

  it('50/100 → percentage 50', () => {
    expect(getBarDisplayData(50, 100).percentage).toBe(50);
  });

  it('85/100 → bg-primary (between 75 and 90)', () => {
    expect(getBarDisplayData(85, 100).colorClass).toBe('bg-primary');
  });

  it('50/200 → percentage 25', () => {
    expect(getBarDisplayData(50, 200).percentage).toBe(25);
  });
});
