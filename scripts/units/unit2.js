try{
const unit = extendContent(UnitType,"mega_boss",{});
unit.create(prov(() => new JavaAdapter(FlyingUnit, {
drawStats(){},
drawEngine(){},
update(){
this.health = Number.MAX_VALUE
this.super$update()
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
b.damage = Number.MAX_VALUE;
b.lifetime = 350;
b.speed = 20;
const g = extendContent(Weapon,"g",{});
g.shots = 80;
g.bullet = b;
g.reload = 1;
g.width = 19;
g.alternate = true;
g.inaccuracy = 8;
unit.speed = 8;
unit.range = 3000;
unit.health = 900000000;
unit.flying = true;
unit.update = true;
unit.weapon = g;
}catch(e){}