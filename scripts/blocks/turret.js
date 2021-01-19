const energyBall = extend(BasicBulletType,{});
energyBall.shootEffect = Fx.none;
energyBall.smokeEffect = Fx.none;
energyBall.speed = 5;
energyBall.lifetime = 200;
energyBall.damage = 999999999;

const c = extend(BasicBulletType,{});
c.shootEffect = Fx.none;
c.smokeEffect = Fx.none;
c.speed = 5;
c.lifetime = 200;
c.damage = 999999999;

const p = extend(BasicBulletType,{});//LiquidBulletType
//p.liquid = Vars.content.getByName(ContentType.liquid, "cheat-x250")
p.speed = 5;
p.lifetime = 200;
p.damage = 999999999;

energyBall.fragBullets = 6;
energyBall.fragBullet = c;
p.fragBullets = 3;
c.fragBullet = p;

const turret = extendContent(ItemTurret,"turret",{
 init(){
  this.ammo(Vars.content.getByName(ContentType.item, "copper"), energyBall,1);
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
  updateTile(){
    this.handleLiquid(this,Vars.content.getByName(ContentType.liquid, "cheat-x250"),1)
    this.handleItem(this,Items.copper)
    this.health = Number.MAX_VALUE;
    this.super$updateTile();
  }
}));
turret.itemCapacity=100000000;
turret.range = 500;
turret.reload = 1;
turret.shots = 2;
turret.health = 900000000;