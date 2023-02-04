/* eslint-disable @typescript-eslint/no-explicit-any */
import Comparator from "../../utils/Comparator";

interface ILinkedListNode {
  value: number;
  next: null;
  toString: (callback: any) => string;
}

export default class LinkedList {
  head: ILinkedListNode | null;
  tail: ILinkedListNode | null;
  compare: Comparator;
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction: any) {
    /** @var LinkedListNode */
    this.head = null;

    /** @var LinkedListNode */
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }
}