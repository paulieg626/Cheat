const wall2 = extendContent(Wall, "wall2", {
placed(tile){
for(i=0;i<=10;i++){
Call.removeTile(Vars.world.tileWorld(tile.drawx(),tile.drawy()))
Call.removeTile(Vars.world.tileWorld(tile.drawx()-1,tile.drawy()))
Call.removeTile(Vars.world.tileWorld(tile.drawx()+1,tile.drawy()))
Call.removeTile(Vars.world.tileWorld(tile.drawx(),tile.drawy()+1))
Call.removeTile(Vars.world.tileWorld(tile.drawx(),tile.drawy()-1))
Call.setTile(Vars.world.tileWorld(tile.drawx()+8,tile.drawy()),wall2,tile.entity.getTeam(),0)
Call.setTile(Vars.world.tileWorld(tile.drawx()-8,tile.drawy()),wall2,tile.entity.getTeam(),0)
Call.setTile(Vars.world.tileWorld(tile.drawx(),tile.drawy()+8),wall2,tile.entity.getTeam(),0)
Call.setTile(Vars.world.tileWorld(tile.drawx(),tile.drawy()-8),wall2,tile.entity.getTeam(),0)
}}
});
//wall2.update = true
wall2.health = 99999
wall2.requirements(Category.defense,ItemStack.with(Items.copper,0),true);