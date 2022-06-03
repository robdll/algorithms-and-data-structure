class HashTable {

    constructor() {
      this.table = new Array(63);
      this.size = 0;
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length;
    }
  
    set(key, value) {
      const index = this.hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            this.table[index][i][1] = value;
            return;
          }
        }
        this.table[index].push([key, value]);
      } else {
        this.table[index] = [];
        this.table[index].push([key, value]);
      }
      this.size++;
    }
  
    get(key) {
      const index = this.hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[index][i][0] === key) {
            return this.table[index][i][1];
          }
        }
      }
      return undefined;
    }
  
    remove(key) {
      const index = this.hash(key);
  
      if (this.table[index] && this.table[index].length) {
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[index][i][0] === key) {
            this.table[index].splice(i, 1);
            this.size--;
            return true;
          }
        }
      } else {
        return false;
      }
    }
  
    toString() {
      this.table.forEach((values, index) => {
        const chainedValues = values.map(
          ([key, value]) => `[ ${key}: ${value} ]`
        );
        console.log(`${index}: ${chainedValues}`);
      });
    }
  }

const ht = new HashTable();

ht.set("France", 12);
ht.set("Spain", 15);

console.log('Ht Size:', ht.size); // 3
ht.toString();
// 3: [ Spain: 15 ]
// 24: [ France: 12 ]
ht.remove("Spain");
ht.toString();
// 24: [ France: 12 ]
