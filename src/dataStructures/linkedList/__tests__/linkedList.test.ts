import { LinkedList } from "../linkedList";

describe("LinkedList", () => {
  it("Debe crear una lista enlazada vacía", () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe("");
  });

  it("Debe añadir un nodo a la lista enlazada", () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append<number>(1);
    linkedList.append<number>(2);

    expect(linkedList.toString()).toBe("1,2");
    expect(linkedList.tail?.next).toBeNull();
  });

  it("Debe añadir un nodo a la lista enlazada con 'prepend'", () => {
    const linkedList = new LinkedList();

    linkedList.prepend(2);
    expect(linkedList.head?.toString()).toBe("2");
    expect(linkedList.tail?.toString()).toBe("2");

    linkedList.append(1);
    linkedList.prepend(3);

    expect(linkedList.toString()).toBe("3,2,1");
  });
});
