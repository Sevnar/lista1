class Logaritmo {

    constructor(base = 10, log){
    this.base = base
    this.log = log
    }
    
    somaLog(newLog){
        return new Logaritmo(this.base, this.log * newLog.log)
    }

    potenciaLog(potencia){
        
        return potencia*(this.base)

    }

    solve(){
        let x;
        while(x>1){
            
        }
    }

    }

    test('Teste de criação', ()=> {
        let l = new Logaritmo(2, 10)
        
        expect(l).toBe(new Logaritmo(2,10))
        })

    test('Teste de soma', ()=>{
        let l1 = new Logaritmo(3,5)
        let l2 = new Logaritmo(3,2)

        expect(l1.somaLog(l2).toBe(new Logaritmo(3,10)))
    })