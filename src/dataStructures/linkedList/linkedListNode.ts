export interface ILinkedListNode<T = unknown> {
  value: T;
  next: ILinkedListNode<T> | null;
  toString: (callback: (value: T) => string) => string;
}

export class LinkedListNode<T> implements ILinkedListNode<T> {
  value: T;
  next: ILinkedListNode<T> | null;
  constructor(value: T, next: ILinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  toString (callback?: (value: T) => string) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
