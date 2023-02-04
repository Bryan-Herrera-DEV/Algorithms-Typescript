import { LinkedListNode } from "../linkedListNode";
export interface ILinkedListNode<Values> {
  value: Values;
  next: null;
}
describe("LinkedListNode", () => {
  it("Debe crear un nodo de lista con el valor", () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it("Debe crear un nodo de lista con un objeto como valor", () => {
    const nodeValue = { value: 1, key: "test" };
    const nodeList = new LinkedListNode<{
      value: number;
      key: string;
    }>(nodeValue);

    expect(nodeList.value.value).toBe(1);
    expect(nodeList.value.key).toBe("test");
    expect(nodeList.next).toBeNull();
  });

  it("Debe enlazar los nodos entre si", () => {
    const node2 = new LinkedListNode(2);
    const node1 = new LinkedListNode(1, node2);

    expect(node1.next).toBeDefined();
    expect(node2.next).toBeNull();
    expect(node1.value).toBe(1);
    expect(node1.next?.value).toBe(2);
  });
  it("Debe convertir el nodo en cadena", () => {
    const node = new LinkedListNode<string | number>(1);

    expect(node.toString()).toBe("1");

    node.value = "string value";
    expect(node.toString()).toBe("string value");
  });

  it("Debe convertir el nodo en cadena con un 'stringifier' personalizado", () => {
    const nodeValue = { value: 1, key: "test" };
    const node = new LinkedListNode<{
      value: number;
      key: string;
    }>(nodeValue);
    const toStringCallback = (value: { value: number; key: string }): string => `value: ${value.value}, key: ${value.key}`;

    expect(node.toString(toStringCallback)).toBe("value: 1, key: test");
  });
});
