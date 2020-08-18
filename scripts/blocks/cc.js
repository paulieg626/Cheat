const cc = extendContent(Block, "cc", {
update(t){
t.entity.health = Number.MAX_VALUE
c = Vars.state.teams.closestCore(t.drawx(), t.drawy(), t.getTeam());
for(y = 0; y < Vars.content.items().size; y++){
i = Vars.content.items().get(y);
if(c.items.get(i) < 900000000){
c.items.add(i, 10000000)
}
}
}});
cc.update = true;
cc.requirements(Category.effect,ItemStack.with(Items.copper,0),true);