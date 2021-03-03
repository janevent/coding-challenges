function CompareLists(llist1, llist2) {
    console.log('list1', llist1);
    console.log('list2', llist2);
    let dummy1 = llist1;
    let dummy2 = llist2;
    
    while(dummy1 !== null && dummy2 !== null){
        console.log('1data',dummy1.data)
        console.log('2data', dummy2.data)
        if(dummy1.data !== dummy2.data){
            return 0
        }
        dummy1 = dummy1.next;
        dummy2 = dummy2.next;
    }
    
    if(dummy1 === null && dummy2 === null){
        return 1
    }else{
        return 0
    }
}