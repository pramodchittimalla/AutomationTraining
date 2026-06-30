let sname:string[] = ["suresh", "mahesh" , "naresh"];

let smarks:number[]=[75,80,82];
let updatedMarks:number;
let avg:number=0;


for(const value of smarks){
    updatedMarks=10+value;
    console.log(updatedMarks);
    avg = avg+updatedMarks;
}

console.log(avg/3);
