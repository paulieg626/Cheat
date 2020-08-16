const magic=extendContent(Vault,"magic", {
update(t){
t.entity.health = Number.MAX_VALUE
if(t.entity.items.get(Vars.content.getByName(ContentType.item,"coal"))>=1){
for(i=0;i<=99;i++){
unit = UnitTypes.lich.create(t.getTeam())
unit.set(t.drawx(),t.drawy())
unit.add();
}
t.entity.items.remove(Vars.content.getByName(ContentType.item,"coal"),1)
//Call.removeTile(Vars.world.tileWorld(t.drawx(),t.drawy()))
}
if(t.entity.items.get(Vars.content.getByName(ContentType.item,"thorium"))>=1){
for(i=0;i<=9;i++){
unit = Vars.content.getByName(ContentType.unit,"cheat-unit").create(t.getTeam())
unit.set(t.drawx(),t.drawy())
unit.add();
}
t.entity.items.remove(Vars.content.getByName(ContentType.item,"thorium"),1)
//Call.removeTile(Vars.world.tileWorld(t.drawx(),t.drawy()))
}
this.super$update(t)
}});
magic.update = true;
magic.health = 999999999;
magic.itemCapacity=10;
magic.requirements(Category.effect,ItemStack.with(Items.copper,0),true);