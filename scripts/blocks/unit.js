const unit = extendContent(UnitType,"unit",{});
unit.create(prov(() => new JavaAdapter(FlyingUnit, {
drawStats(){},
drawEngine(){},
draw(){
Draw.rect("cheat-unit",this.x,this.y,Time.time()*12+10)
}
})))
const b = extend(BasicBulletType,{
draw(t){
Draw.rect("cheat-b",t.x,t.y,10,10,-Time.time()*12+10)
}
});
b.homingRange = 120;
b.homingPower = 500;
b.damage = 99999999;
b.lifetime = 200;
b.speed = 1;
const g = extendContent(Weapon,"g",{});
g.bullet = b;
g.range = 500;
g.reload = 55;
g.width = 19;
g.alternate = true;
g.inaccuracy = 8;
unit.health = 99999;
unit.flying = true;
unit.update = true;
unit.weapon = g;