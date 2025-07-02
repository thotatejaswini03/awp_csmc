function factorial(n){
            let result = 1;
            if(n==0 || n==1) {
                result = 1;
            }
            else {
                for (let i = 2; i <=n;i++) {
                    result = result * i;
                }
            }
            return result
        }
            
        console.log(factorial(5))
