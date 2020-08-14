color = new Color();
const energyBall = extend(BasicBulletType,{
 draw(b){
 Draw.rect("cheat-b",b.x,b.y,20,20,Time.time()*12+10)
 }
});
energyBall.shootEffect = Fx.none;
energyBall.smokeEffect = Fx.none;
energyBall.speed = 4;
energyBall.lifetime = 200;
energyBall.damage = 999999999;

const turret = extendContent(DoubleTurret,"turret",{
 draw(tile){
  Draw.rect("block-1",tile.drawx(),tile.drawy())
  },
 init(){
  this.ammo(Vars.content.getByName(ContentType.item, "copper"), energyBall,1);
  this.super$init()
 },
 generateIcons(){
  return [
  Core.atlas.find("block-1"),
  Core.atlas.find(this.name)
  ]
 }
});

turret.range = 500
turret.reload = 2;
turret.health = 50000
turret.requirements(Category.turret,ItemStack.with(Items.copper,0),true);