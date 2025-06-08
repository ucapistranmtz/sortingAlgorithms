export function insertSort (arr:number[]):number[]{
  let result:number[] =arr.slice(); 
  let n = result.length;


  for(let i=1;i<n;i++){
    let item=result[i];
    let j =i-1;
    while (j>=0 && result[j]>item){
        result[j+1]=result[j];
        j--;
    }
    result[j+1]=item;
  }
  return result;
}