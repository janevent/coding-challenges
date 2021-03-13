//perform basic spring compresstion using the counts of repeated characters

function stringCompression(s){
    let a = s.split('');
    let newS = '';
    let onlyOne = true;

    let i = 0;
    while(i < a.length){
        let n = 1;
        let current = a[i]
        if(a[i] !== a[i+1]){
            newS+=`1${a[i]}`
            i++
        }else{
            onlyOne=false;
            i++
            while(current === a[i] ){
                n++;
                i++
            }
            newS+=`${n}${current}`
        }
    }
    if(onlyOne===true){
        return s
    }else{
        return newS
    }
}

let string = 'abbccdeeefgggg'
console.log(stringCompression(string))