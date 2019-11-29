
function countme(tagname,obj)
{
    var object={all:'', class:0, id: false, name:0};
    var tags= document.getElementsByTagName(tagname);
    
    
    for(var i=0; i<tags.length;i++)
    {
        for(var k in obj) 
        {
            if(tags[i].hasAttribute(k) && tags[i].getAttribute(k)==obj[k]){
              object[k]+=1;}
    } 
    }
    object.all=tags.length;
    object.id= Boolean(object[k]);
    return object;
}

