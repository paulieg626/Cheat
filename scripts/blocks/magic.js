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
}
if(t.entity.items.get(Vars.content.getByName(ContentType.item,"sand"))>=1){
for(i=0;i<=99;i++){
unit = UnitTypes.draug.create(t.getTeam())
unit.set(t.drawx(),t.drawy())
unit.add();
}
t.entity.items.remove(Vars.content.getByName(ContentType.item,"sand"),1)
}
if(t.entity.items.get(Vars.content.getByName(ContentType.item,"copper"))>=1){
for(i=0;i<=99;i++){
unit = UnitTypes.reaper.create(t.getTeam())
unit.set(t.drawx(),t.drawy())
unit.add();
}
t.entity.items.remove(Vars.content.getByName(ContentType.item,"copper"),1)
}
if(t.entity.items.get(Vars.content.getByName(ContentType.item,"thorium"))>=1){
for(i=0;i<=9;i++){
unit = Vars.content.getByName(ContentType.unit,"cheat-unit").create(t.getTeam())
unit.set(t.drawx(),t.drawy())
unit.add();
}
t.entity.items.remove(Vars.content.getByName(ContentType.item,"thorium"),1)
}
}});
magic.layer = Layer.turret
magic.update = true;
magic.health = 900000000;
magic.itemCapacity=10;
magic.requirements(Category.effect,ItemStack.with(Items.copper,0),true);