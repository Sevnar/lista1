import PilhaComFila from '../src/Javascript/PilhaComFila.js'

test('Pilha com filas', ()=> {
    let p = new PilhaComFila(5)

    p.push(1)
    p.push(2)
    p.push(3)
    p.push(4)
    p.push(5)

    expect(p.pop()).toBe(5)
    expect(p.size()).toBe(4)

    p.pop()
    p.pop()
    p.pop()
    p.pop()

    expect(p.size()).toBe(0)
})