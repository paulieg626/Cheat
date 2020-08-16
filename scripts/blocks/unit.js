const unit = extendContent(UnitType,"unit",{});
unit.create(prov(() => new JavaAdapter(FlyingUnit, {
drawStats(){},
drawEngine(){},
update(){
this.health = Number.MAX_VALUE
this.super$update()
},
draw(){
Draw.rect("cheat-unit",this.x,this.y,Time.time()*12+10)
}
})))
const b = extend(BasicBulletType,{
draw(t){
Draw.rect("cheat-b",t.x,t.y,10,10,-Time.time()*12+10)
}
});
b.shootEffect = Fx.none;
b.smokeEffect = Fx.none;
b.homingRange = 200;
b.homingPower = 1000;
b.damage = 999999999;
b.lifetime = 300;
b.speed = 10;
const g = extendContent(Weapon,"g",{});
g.shots = 60;
g.bullet = b;
g.reload = 10;
g.width = 19;
g.alternate = true;
g.inaccuracy = 8;
unit.speed = 5;
unit.range = 3000;
unit.health = 999999999;
unit.flying = true;
unit.update = true;
unit.weapon = g;