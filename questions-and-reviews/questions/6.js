



function printTimesTables(n) {
    const count = 1;
    while(count <= 12) {
        const product = n * count;
        console.log(`${count} * ${n} = ${product}`);
        count++;
    }
}

printTimesTables(5);

