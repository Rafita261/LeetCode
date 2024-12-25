function isValid(t){
      let stack=[];
      for(j of t){
            if(j=="("||j=="{" || j=="["){
            stack.push(j) ;
            }
            else{
                  if(stack.length==0){
                        return false ;
                  }
                  switch(j){
                        case ")" : test="("; break;
                        case "}" : test="{"; break;
                        case "]" : test="[" ; break ;
                  }
                  if(test==stack[stack.length-1]){
                        stack.pop()
                  }
                  else{
                        return false ;
                  }
            }
      }
      return(stack.length===0)
}