
function maxArea(height: number[]): number {
    const a:number[]=[];
    let l=0;
    let r=height.length-1;
    let max=0;
    do{
       let s=Math.min(height[l],height[r]);
       const area=s*(r-l);
       if (area>max){
        max=area;
       }
       if(s===height[l]){
        l+=1
       }else{
        r-=1
       }
    
    }while(l<r)
     return max;
};

 