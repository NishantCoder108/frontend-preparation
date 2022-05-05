
function terniarySearch(l ,r ,key, arr){


    while(l <= r){
        let mid1 = l + parseInt((r-l)/3 , 10)
        let mid2 = r - parseInt((r-l)/3 , 10)


        if(arr[mid1] == key){
            return mid1;
        }

        if(arr[mid2] == key){
            return mid2;
        }


        if(key < arr[mid1]){
            l = mid1 -1 ;

        }

        if(key  > arr[mid2]){
            r = mid2 + 1;
        }

        else{
            l = mid1 + 1;
            r = mid2 -1;
        }
    }

    return -1;
}

let l,r,key,arr;

l=0;
r=9;
key=6;
arr=[1,3,4,6,7,8,9,,10,12]

console.log(terniarySearch(l,r,key,arr))