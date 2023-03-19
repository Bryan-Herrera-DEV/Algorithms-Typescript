import { ILinkedListNode, LinkedListNode } from "./linkedListNode";

export class LinkedList {
  head: ILinkedListNode<unknown> | null;
  tail: ILinkedListNode<unknown> | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append<T>(value: T) {
    const newNode = new LinkedListNode<T>(value);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend<T>(value: T) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * @return {LinkedList[]}
   */
  toArray(): LinkedListNode<unknown>[] {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * @returns {string}
   */
  toString(callback?: (value: unknown) => string): string {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }
}
