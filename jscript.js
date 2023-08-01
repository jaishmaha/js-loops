//1.Print N numbers in reverse order
var n= parseInt(prompt("Enter the value for N:"));
for(var i=n;i>=1;i--)
{
	console.log(i);
}


//2.Print N odd numbers

var n= parseInt(prompt("Enter the value for N:"));
var i;
for(i=1;i<=n;i++)
{
	if(i%2!==0)
	{
		console.log(i);
	}
}

//3.Calculate sum of a number

let x=parseInt(prompt("Enter any integer value:"));
let sum=0;
while(x!=0)
{
	let rem=x%10;
	x=(x-rem)/10;
	sum=sum+rem;
}
console.log("sum=",sum);

//4.tables

var num= parseInt(prompt("Enter the value:"));
var ans;
for(var i=0; i<=10; i++)
{
	ans= num * i;
	console.log(`${num} * ${i} = ${ans}`);
}

//5.Check number is prime or not

var n=parseInt(prompt("Enter any Integer value:"));
var i,sum=0;
for(i=1;i<=n;i++)
{
    if(n%i==0)
	{
        sum++;
    }  
}
if(sum==2)
{
    console.log(`${n} is a prime Number`);

}
else
{
	console.log(`${n} is not a prime Number`)
}