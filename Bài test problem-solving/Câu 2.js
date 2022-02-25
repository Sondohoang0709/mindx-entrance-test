function Merge2Strings(S1, S2) {

    const number = S2.split('')

    const name = S1.split('')

    let i = 0;
    let a = 0;
    const c = [] 

    let ic = 0; 

    while (i < number.length && a < name.length) { 
        
        c[ic++] = number[i++]

        c[ic++] = name[a++];
    }
    while (i < number.length) { 

        c[ic++] = number[i++] 
    }
    while (a < name.length) {

        c[ic++] = name[a++] }
    c.toString()

    console.log(c.join('')); 
}

Merge2Strings("HoangSon", "123456789")