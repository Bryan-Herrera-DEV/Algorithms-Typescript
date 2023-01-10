import { DoubleLinearSearchRecursion } from "../DoubleLinearSearchRecursion";

describe("BinarySearch", () => {
  const testArray: number[] = [1, 2, 3, 4];

  it("should be defined", () => {
    expect(DoubleLinearSearchRecursion(testArray, 2)).toBeDefined();
  });
  it("should return a number", () => {
    expect(typeof DoubleLinearSearchRecursion(testArray, 2)).toBe("number");
  });
  it("should return -1 if the target is not found in the array", () => {
    expect(DoubleLinearSearchRecursion(testArray, 5)).toBe(-1);
  });
  it("should return -1 if there are no elements in the array", () => {
    expect(DoubleLinearSearchRecursion([], 5)).toBe(-1);
  });
  it("should return the index of the target if it is found in the array", () => {
    expect(DoubleLinearSearchRecursion(testArray, 2)).toBe(1);
  });
  it("should return a correct index of target when the array contains duplicate values", () => {
    expect(DoubleLinearSearchRecursion([1, 2, 2, 3, 3, 3, 4], 2)).toBe(1);
  });
  it("should return the first index when the target is the first item in the array", () => {
    expect(DoubleLinearSearchRecursion(testArray, 1)).toBe(0);
  });
  it("should return the last index when the target is the last item in the array", () => {
    expect(DoubleLinearSearchRecursion(testArray, 4)).toBe(3);
  });
});
