class Node { 
	constructor(key, val) { 
		this.key = key; 
		this.val = val; 
		this.prev = null; 
		this.next = null; 
	} 
} 

const LRUCache = function(cap) { 
	this.cap = cap; 
	this.count = 0; 
	this.head = null; 
	this.tail = null; 
	this.cache = new Map(); 
}
	// Returns the value of the given key 
	this.get = function(key) { 
		if (!this.cache.has(key)) { 
			return -1; 
		} 
 
		const node = this.cache.get(key); 
		this.use(key); 
		return node.val; 
	}; 
 
	// Adds new item in the list 
	this.put = function(key, val) {
		if (this.cache.has(key)) { 
			const node = this.cache.get(key); 
			node.val = val; 
			this.use(key); 
			this.cache.set(key, node); 
		} else { 
			if (this.count >= this.cap) { 
				this.evict(); 
			}
			this.insert(key, val);
			this.use(key); // may not be needed
		}
	};

	// Uses the cache with given key and marks it as most recently used
	
            this.use = function(key) {
                const node = this.cache.get(key);
                if (node === this.head) {
                    return;
                } else if (node === this.tail) {
                    node.prev.next = null;
                    this.tail = node.prev;
                    node.prev = null;
                    node.next = this.head;
                    this.head.prev = node;
                    this.head = node;
                } else {
                    if (node.prev) {
                        node.prev.next = node.next;
                    }
                    if (node.next) {
                        node.next.prev = node.prev;
                    }
                    node.next = this.head;
                    node.prev = null;
                    this.head.prev = node;
                    this.head = node;
                }
         };
        
            // Removes the least recent used cache
            this.evict = function() {
                const keyToEvict = this.tail ? this.tail.key : null;
                if (!this.tail) {
                    return;
                } else if (this.head === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else {
                    this.tail.prev.next = null;
                    this.tail = this.tail.prev;
                }
                if (keyToEvict) {
                    this.count--;
                    this.cache.delete(keyToEvict);
                }
            };
        
            // Helper function to add new cache in the queue
            
        this.insert = function(key, val) {
                const node = new Node(key, val);
                //console.log('node at first time', node)
                this.count++;
                this.cache.set(key, node);
                if (!this.head) {
                    this.head = node;
                    this.tail = node;
                } else {
                    this.head.prev = node;
                    node.next = this.head;
                    this.head = node;
                }
                //console.log('head', this.head)
                //console.log('tail', this.tail)
            };
        
            this.display = function(){
                if(!this.head){
                    return 'nothing to display'
                }else{
                    let nav = this.head
                    while(nav){
                        console.log('key: ',nav.key, 'Value: ', nav.val)
                        nav = nav.next
                    }
                }
            }
        
        //node = { key: 2, val: 'b', prev: null, next: { key: 1, val: 'a', prev: { key: 2, val: 'b', prev: null, next: null }, next: null } }
        //head = { key: 2, val: 'b', prev: null, next: { key: 1, val: 'a', prev: { key: 2, val: 'b', prev: null, next: null }, next: null } }
        
        const lru = new LRUCache(4);
     //   lru.put(1, 'a');  create a new node, assign this node to head & tail, cached the key of this request
        lru.put(2,'b')
        lru.put(3, 'c')
        const lru1 = new LRUCache(4);
        lru.put(1, 'a'); // create a new node, assign this node to head & tail, cached the key of this request
        lru.put(2,'b')
        lru.put(3, 'c');
        lru.put(4, 'd');
        lru.display();
        lru.get(3);
        console.log("======<<>>>>>>>>=========")
        lru.display();
        lru.put(5, 'e');
        lru.use(2);
        console.log("======<<>>>>>>>>=========")
        lru.display();