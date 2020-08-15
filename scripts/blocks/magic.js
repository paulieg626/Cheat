const magic=extendContent(Vault,"magic", {
update(t){
if(t.entity.items.get(Vars.content.getByName(ContentType.item,"coal"))>=1){
for(i=0;i<=100;i++){
unit = UnitTypes.lich.create(t.getTeam())
unit.set(t.drawx(),t.drawy())
unit.add();
}
t.entity.items.remove(Vars.content.getByName(ContentType.item,"coal"),1)
//Call.removeTile(Vars.world.tileWorld(t.drawx(),t.drawy()))
}
}
});
magic.update = true;
magic.health = 99999;
magic.itemCapacity=10;
magic.requirements(Category.effect,ItemStack.with(Items.copper,0),true);