class Product{
    constructor(code, name, amount, cost){
        this.code = code;
        this.name = name;
        this.amount = amount;
        this.cost = cost;
  
    }
  
    info(){
        return `Código: ${this.code()}  Nombre: ${this.name()}  Cantidad: ${this.amount()}  Costo: ${this.cost()}`
    }
  
  
  }

  class Node{
    constructor(data, next){
        this.data = data
        this.next = next
        this.prev = prev
    
    }
  }

  class Inventory{
    constructor(){
        this.primero= null
        this.ultimo = null;
    }
  

    add(data){
        let newData = new Node(data)
        let last = this.primero
        newData.next = null;
        if(this.primero == null){
            newData.prev = null;
            this.primero = newData
        }else{
            while(last.next != null){
                last = last.next
                newData.prev = last;
            }

        }
    }    

        

  list(){ 
    let current = this.primero;
    let list = "";

    if (this.primero != null) {
      while (current) {
        list += current.info();
        current = current.next;
      }
      return list;
    } else {
      return null
    }
    
}

reverseList(){
    let current = this.ultimo;
    let list = ""
    if(this.primero != null){
        while(current){
            list += current.info()
            current = current.prev
        }
        return list

    }else{
        return null
    }
}

insertAt(data, index){
    
    }

removeData(data){
    
}

search(code){
    let current = this.primero
    while(current){
        if(current.code == code){
            return current;

        }else{
            return null;
        }

    }
    

}


}


let inventory2 = new Inventory();

const agregar = document.getElementById("addBtn");
agregar.addEventListener('click', function(){
    let name=document.getElementById("name").value;
    let code = document.getElementById("code").value;
    let cantidad = document.getElementById("amount").value;
    let cost = document.getElementById("price").value;

    let pNuevo = new Product(name, code, cantidad, cost);
     inventory2.add(pNuevo);
     document.getElementById("listOfProducts").innerHTML = "<p>Se agrego el producto correctamente</p>"
})

const remove =document.getElementById("deleteBtn");
remove.addEventListener('click', function(){
    const Delete = inventory2.removeData(document.getElementById("productDel").value)
    document.getElementById("remove").value = ``
    if(Delete == true){
        document.getElementById("list").innerHTML = "<h4> El prodcuto se ha eliminado </h4>"
        }else{
            document.getElementById("list").innerHTML = "<h4> El producto no existe </h4>"
        }
})



// const listIndex = document.getElementById("insertAt");
// insertAt.addEventListener('click', function(){

    

// })

const search=document.getElementById("search");
search.addEventListener('click', function(){
    const code = inventory2.search(document.getElementById("searchCode").value)
    document.getElementById("searchCode").value = ``
    if(code != null){
        return `${code.info}`
    }else{
        document.getElementById("list").innerHTML = `<h4>El producto no existe</h4>`

    }


    
})

const List=document.getElementById("listBtn"); 
List.addEventListener('click', function(){
    if(inventory2.list()){
        document.getElementById("listOfProducts").innerHTML = `${inventory2.list()}`

    }else{
        document.getElementById("listOfProducts").innerHTML = "<h4> No hay productos en nuestra bodega </h4>"
    }
})

const reverseList=document.getElementById("reverseList");
reverseList.addEventListener('click', function(){
    if(inventory2.list()){
        document.getElementById("listOfProducts").innerHTML = `${inventory2.reverseList()}`

    }else{
        document.getElementById("listOfProducts").innerHTML = "<h4> No hay productos en nuestra bodega </h4>"
    }
    
    
})