function greet(name) {
    if(name == null){
        return 'Hello, my friend.';
    }
    else if(!Array.isArray(name)){
        if(name == name.toUpperCase()){
        return `HELLO ${name}!`;
        }
    }
    else if(Array.isArray(name)){
        if(name.length > 2){
            var arrUpperCase = []
            var flag = false
            
            for (i = 0; i < name.length; i++) {
                if (name[i] == name[i].toUpperCase()) {
                    arrUpperCase.push(`${name[i]}`)
                    name.splice(i, 1)
                    flag = true;             
                }
            }
                if(flag == true){
                    return `Hello, ${name.join(' and ')}. AND HELLO ${arrUpperCase}!`;
                }
                
                var addText = name.splice(0, 2).join(', ') + ', and ' + name.splice(-1);  
                    return `Hello, ${addText}.`;
        }
        else if(name.length == 2){
            var Font = name[0].split(',');
            var Back = name[1].split(',');
            
            if(Back.length > 1){
                var addFont = Font.splice('');
                var addBack = Back.splice(0, 2).join(', and');
                    return `Hello, ${addFont}, ${addBack}.`;
            }
            
            return `Hello, ${name.join(' and ')}.`;        
        }
      
    }
            return `Hello, ${name}.`; 
}

module.exports = greet; 