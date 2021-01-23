import FilaComPilha from '../src/Javascript/FilaComPilha.js'

test('Fila com 2 pilhas',()=>{
    
    let p = new FilaComPilha(5);

    p.enqueue('A');
    p.enqueue('B');
    p.enqueue('C');
    p.enqueue('D');
    p.enqueue('E');

    expect(p.size()).toBe(5);
    expect(p.dequeue()).toBe('A');
    expect(p.size()).toBe(4);
    expect(p.front()).toBe('B');

})