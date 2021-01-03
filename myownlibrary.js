function bounceoff(var1,var2) {
    if (var1.x - var2.x < var2.width/2 + var1.width/2
      && var2.x - var1.x < var2.width/2 + var1.width/2) {
        var1.velocityX = var1.velocityX * (-1);
        var2.velocityX = var2.velocityX * (-1);
  }
  if (var1.y - var2.y < var2.height/2 + var1.height/2
    && var2.y - var1.y < var2.height/2 + var1.height/2){
      var1.velocityY = var1.velocityY * (-1);
      var2.velocityY = var2.velocityY * (-1);
  }
}

function is_Touching(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
      return true;
  }
  else {
    return false;
  }
}