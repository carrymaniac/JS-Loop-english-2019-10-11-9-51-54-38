console.log("start")
for (let i=1;i<10;i++){
    for(let j=1;j<=i;j++){
        console.log(i+" * "+j+" = "+(i*j))
    }
}
console.log("end")


document.write('<table class="table" border="1">');
for (let i=1;i<10;i++){
    document.write('<tr>');
    for(let j=1;j<=i;j++){
        document.write('<td>'+i+" * "+j+" = "+(i*j)+"</td>");
    }
    document.write('</tr>');
}
document.write('</table>');


