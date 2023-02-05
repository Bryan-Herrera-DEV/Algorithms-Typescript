export interface ILinkedListNode<T> {
  value: T;
  next: unknown;
  toString: (callback: (value: T) => string) => string;
}
export interface ILinkedListNodeWhithotGeneric {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  next: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toString: (callback?: (value: any) => string) => string;
}


export class LinkedListNode<T> implements ILinkedListNode<T> {
  value: T;
  next: ILinkedListNode<T> | ILinkedListNodeWhithotGeneric | null;
  constructor(value: T, next: ILinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  toString (callback?: (value: T) => string) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
