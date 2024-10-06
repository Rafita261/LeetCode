function isAnagram(str1, str2){
    return str1.split('').sort().join('') == str2.split('').sort().join('')
}
function groupAnagram(strings){
    let result = []
    let visited = []
    for(i = 0; i < strings.length; i++){
        visited[i] = false ;
    }
    for(i = 0; i < strings.length; i++){
        let group = []
        for(j = 0; j < strings.length; j++){
            if(!visited[j] && isAnagram(strings[i],strings[j])){
                group.push(strings[j])
                visited[j] = true ;
            }
        }
        if(group.length!=0)
        result.push(group)
    }
    return result ;  
}

function main(){
    let t=['leacr','azaz', 'dev', 'zaza', 'ten', 'ved','edv', 'ten','clear','net']
    console.log(groupAnagram(t))
}
main();