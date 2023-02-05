/* eslint-disable @typescript-eslint/no-explicit-any */
import Comparator from "../../utils/Comparator";
import {
  LinkedListNode,
  ILinkedListNodeWhithotGeneric
} from "./linkedListNode";

export class LinkedList {
  head: ILinkedListNodeWhithotGeneric | null;
  tail: ILinkedListNodeWhithotGeneric | null;
  compare: Comparator;
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction?: any) {
    /** @var LinkedListNode */
    this.head = null;

    /** @var LinkedListNode */
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * @param {*[]} values - Array de valores que necesitan ser convertidos a lista enlazada
   * @return {LinkedList}
   */
  fromArray<T>(values: T[]) {
    values.forEach((value: T) => this.append(value));

    return this;
  }

  /**
   * @return {LinkedListNode[]} - Array de nodos
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback?: (value: unknown) => string): string {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append<T>(value: T) {
    const newNode = new LinkedListNode<T>(value);

    // Si todavía no hay cabecera hacemos que el nuevo nodo sea una cabecera.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Adjuntar nuevo nodo al final de la lista enlazada
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
    // Hacer que el nuevo nodo sea una cabecera.
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    // Si aún no hay cola hagamos del nuevo nodo una cola.
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }
}
