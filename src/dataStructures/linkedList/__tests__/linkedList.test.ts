import { LinkedList } from "../linkedList";

describe("Probando Estructura de datos: Linked-List", () => {
  it("Debe crear una lista enlazada vacia", () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it("Debe agregar un nodo a la lista enlazada", () => {
    const linkedList = new LinkedList();

    linkedList.append<number>(1);

    expect(linkedList.head?.value).toBe(1);
    expect(linkedList.tail?.value).toBe(1);
  });
  it("Debe agregar dos nodo a la lista enlazada", () => {
    const linkedList = new LinkedList();

    linkedList.append<number>(1);
    linkedList.append<number>(2);

    expect(linkedList.head?.value).toBe(1);
    expect(linkedList.tail?.value).toBe(2);
  });
  it("Debe agregar un nodo y luego agregar otro nodo pero al inicio de la lista", () => {
    const linkedList = new LinkedList();

    linkedList.append<number>(1);
    linkedList.prepend<number>(2);

    expect(linkedList.head?.value).toBe(2);
    expect(linkedList.tail?.value).toBe(1);
  });

  it("Debe agregar dos nodo a la lista enlazada y luego testear el metodo toString", () => {
    const linkedList = new LinkedList();

    linkedList.append<number>(1);
    linkedList.append<number>(2);
    linkedList.append<number>(3);
    linkedList.append<number>(4);

    expect(linkedList.toString()).toBe("1,2,3,4");
  });
});
