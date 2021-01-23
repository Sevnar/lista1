class AgendaList {

    val newList = ArrayList<pessoa>()
    var count:Int = 0

    fun addPessoa(p:pessoa) {
        if (count<10) {
            newList.add(p)
            this.count++
        }else{
            print("Lista de vetor cheia")
        }
    }

    fun removePessoa(p:pessoa){
        if (newList.contains(p)){
            newList.remove(p)
            print("Pessoa removida.")
            this.count--
        }else{
            print("Pessoa não cadastrada.")
        }


    }

    fun buscaPessoa(p: pessoa): pessoa? {
        if (newList.contains(p)) {
           return newList.get(newList.indexOf(p))
        }else{
            print("Pessoa não cadastrada")
            return null
        }
    }

    fun printAgenda(){
        for (i in 0..newList.size-1){
            println(newList.get(i))
        }
    }

    fun printPessoa(i:Int){
        if (newList.contains(newList.get(i))){
            println(newList.get(i))
        }else{
            println("Pessoa não cadastrada")
        }
    }
}