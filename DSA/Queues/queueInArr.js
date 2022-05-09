class Queue{
    constructor(){
        this.queue = [];
    }

    isEmpty(){
        return this.queue.length == 0;
    }

    //Insertion in Last or push
    enqueue(value){
       return this.queue.push(value);

    }

    dequeue(){

        if(this.isEmpty()){
            return("Queue is Empty")
        }
        return this.queue.shift();
    }

    front(){
        return this.queue[0]
    }
    display(){
        let i =0;
        while( this.queue.length > i){
            console.log(this.queue[i])

            i++;
        }
    }
}

let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
// queue.dequeue()

queue.display()