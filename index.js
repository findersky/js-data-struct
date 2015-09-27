/***************************************************************************
 > File Name        : index.js
 > Author           : zhoutk
 > Mail             : zhoutk@189.cn
 > Create Time      : 2015-09-18 10:44
 ***************************************************************************/

var LinkedList = require('./LinkedList');
var DList = require('./DoubleLinkedList');
var Dictionary = require('./Dictionary');
var Hashtable = require('./hashtable');
var llist = new LinkedList();
var dlist = new DList();
var dic = new Dictionary();
var ht = new Hashtable();
var ht2 = new Hashtable();

//ht.put("marry","13301028044");
//ht.put("john","13901028044");
//ht2.put("john","13901028044");
////ht.remove("john");
//ht.display();
//
////console.log(ht.get("marry"));
//console.log(ht.size());



dic.add("Mike","123");
dic.add("David","345");
dic.add("John","678");
//console.log(dic.size());
//dic.remove("David");
dic.add("jake","9909");
//console.log(dic.size());
//dic.clear();
//console.log(dic.size());

dic.showAll();
console.log("size is : "+dic.size());

//llist.insert("5");
//llist.insert("6","5");
//llist.add("7");
//llist.remove("6");
//llist.add("8");
//llist.add("9");
//llist.display();
//console.log("size is : "+llist.size());


//dlist.add("4");
//dlist.insert("8");
//dlist.remove("4");
//dlist.add("5");
//dlist.insert("6","4");
//
//dlist.dispReverse();
//console.log("size is : "+dlist.size());





