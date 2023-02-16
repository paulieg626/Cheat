const energyBall = extend(BasicBulletType,{});
energyBall.shootEffect = Fx.none;
energyBall.smokeEffect = Fx.none;
energyBall.speed = 10;
energyBall.lifetime = 100;
energyBall.damage = 999999999;

const c = extend(BasicBulletType,{});
c.shootEffect = Fx.none;
c.smokeEffect = Fx.none;
c.speed = 5;
c.lifetime = 15;
c.damage = 999999999;

const p = extend(BasicBulletType,{});//LiquidBulletType
//p.liquid = Vars.content.getByName(ContentType.liquid, "cheat-x250")
p.shootEffect = Fx.none;
p.smokeEffect = Fx.neoplasmSplat;
p.speed = 5;
p.lifetime = 15;
p.damage = 999999999;

energyBall.fragBullets = 10;
energyBall.fragBullet = c;
p.fragBullets = 16;
c.fragBullet = p;

const turret = extend(ItemTurret,"turret",{
 init(){
  this.ammo(
    Vars.content.getByName(ContentType.item, "copper"), energyBall,
    Vars.content.getByName(ContentType.item, "beryllium"), energyBall
  );
  this.super$init();
 },
 icons(){
  return [
  Core.atlas.find("block-1"),
  Core.atlas.find(this.name)
  ];
 }
});
turret.buildType = prov(()=>extend(ItemTurret.ItemTurretBuild,turret,{
  
}));
turret.itemCapacity=100000000;
turret.range = 600;
turret.reload = 1;
turret.shots = 2;
turret.health = 900000000;