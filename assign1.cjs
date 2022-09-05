const data=require('./battles (1).json');

// const data=require('./battles (1).json');

let count=0;
const func=(param)=>{
    res={};
    data.forEach((element)=>{
        res[element[param]]=res[element[param]]? res[element[param]]+1 :1;
        
    });

    // console.log(res);
    let max=0;
    for(x in res){
        if(max<res[x]){
            max=res[x];
            key=x;
        }
    }
    return {key,max};
}

const output={
    "mostActive":{

    'Attacker king':func("attacker_king"),
    'Defender King': func("defender_king"),
    'Region':func("region"),
    'Name':func("name")

},
"attacker outcome":{
    "Win": ()=>{
        let win=0;
        let loss=0;
    
        data.forEach(battle=>{
              
            if(battle.attacker_king===output.mostActive['Attacker king']['key'] && battle.attacker_outcome=="win"){
                
                win++;
            }
    
            loss=output.mostActive['Attacker king']['max']-win;
        })
        return {win,loss}
    },
    value:"",
    // "Loss": func1("loss")
}

}




console.log(output)
output['attacker outcome']['value']=output['attacker outcome']['Win']()
console.log(output)










