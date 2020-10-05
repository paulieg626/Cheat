const magic=extendContent(Wall,"magic", {
add(b, table){
button = table.addImageButton(new TextureRegionDrawable(Vars.content.units().get(b).icon(Cicon.small)), Styles.clearFulli, 50, run(() => {
u = Vars.content.units().get(b);
unit = u.create(this.getTeam());
unit.set(this.drawx(), this.drawy()+8);
unit.add();
})).size(75)
},
buildConfiguration(table){
size = 75;
image = 50;
for(b = 0; b <= Vars.content.units().size; b++){
if(b<Vars.content.units().size){
this.add(b, table);
if(b % 6 == 5){
table.row()
}}else{
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("cheat-unit-all")), Styles.clearTransi, image, run(() => {
for(o = 0; o < Vars.content.units().size; o++){
u = Vars.content.units().get(o);
unit = u.create(this.getTeam());
unit.set(this.drawx(), this.drawy()+8);
unit.add();
}
})).size(size);
}};    
table.row();
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("cheat-units")), Styles.clearTransi, image, run(() => {})).size(size);
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("cheat-null")), Styles.clearTransi, image, run(() => {})).size(size);
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("cheat-players")), Styles.clearTransi, image, run(() => {})).size(size);
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("cheat-null")), Styles.clearTransi, image, run(() => {})).size(size);
table.row()
table.addButton("[#ff0000]Kill", run(() =>{
Vars.unitGroup.all().each(cons(unit=>unit.kill()))
})).size(size);
table.addButton("[#00ff00]Heal", run(() =>{
Vars.unitGroup.all().each(cons(unit=>unit.heal()))
})).size(size);
table.addButton("[#ff4040]Kill", run(() =>{
Vars.player.kill()
})).size(size);
table.addButton("[#40ff40]Heal", run(() =>{
Vars.player.heal()
})).size(size);
},
update(){
this.entity.health = Number.MAX_VALUE
}});
magic.solid = true;
magic.configurable = true;
magic.layer = Layer.turret
magic.update = true;
magic.health = 900000000;
magic.itemCapacity=10;