const { add, subtract } = require('./calculator.js');

describe('Calculator Operations', () => {
  describe('add()', () => {
    test('adds two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('handles negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
      expect(add(-5, 10)).toBe(5);
    });

    test('adds zero correctly', () => {
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    test('handles floating-point numbers accurately', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('subtract()', () => {
    test('subtracts two positive numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('returns negative result when subtracting a larger number', () => {
      expect(subtract(3, 5)).toBe(-2);
    });

    test('handles negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
      expect(subtract(5, -3)).toBe(8);
    });

    test('subtracts zero correctly', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
    });

    test('handles floating-point numbers accurately', () => {
      expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
    });
  });
});