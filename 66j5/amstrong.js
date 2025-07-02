
        function amstrong(n){
            let m=n;
            let sum = 0
            while(n>0){
                
                let d=n%10
                sum+=(d*d*d)
                n=Math.floor(n/10)


            }
            if(sum==m){
                return true


            }
            else {
                return false
            }
        }
        console.log(amstrong(153))
    