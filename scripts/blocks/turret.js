const energyBall = extend(BasicBulletType,{});
energyBall.shootEffect = Fx.none;
energyBall.smokeEffect = Fx.none;
energyBall.speed = 5;
energyBall.lifetime = 200;
energyBall.damage = 999999999;

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
    this.handleLiquid(this,Vars.content.getByName(ContentType.liquid, "cheat-x50"),1)
    this.handleItem(this,Items.copper)
    this.health = Number.MAX_VALUE;
    this.super$updateTile();
  }/*,
  draw(tile){
    Draw.rect("block-1",this.tile.drawx(),this.tile.drawy());
  },*/
}));
turret.itemCapacity=100000000;
turret.range = 500;
turret.reload = 1;
turret.health = 900000000;