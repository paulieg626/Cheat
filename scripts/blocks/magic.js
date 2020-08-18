const magic=extendContent(Vault,"magic", {
buildConfiguration(t, table){
size = 75;
image = 50;
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("draug")), Styles.clearTransi, image, run(() => {
unit = UnitTypes.draug.create(t.getTeam())
unit.set(t.drawx(),t.drawy())
unit.add();
})).size(size)
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("spirit")), Styles.clearTransi, image, run(() => {
unit = UnitTypes.spirit.create(t.getTeam())
unit.set(t.drawx(),t.drawy())
unit.add();
})).size(size)
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("phantom")), Styles.clearTransi, image, run(() => {
unit = UnitTypes.phantom.create(t.getTeam())
unit.set(t.drawx(),t.drawy())
unit.add();
})).size(size)
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("wraith")), Styles.clearTransi, image, run(() => {
unit = UnitTypes.wraith.create(t.getTeam())
unit.set(t.drawx(),t.drawy())
unit.add();
})).size(size)
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("ghoul")), Styles.clearTransi, image, run(() => {
unit = UnitTypes.ghoul.create(t.getTeam())
unit.set(t.drawx(),t.drawy())
unit.add();
})).size(size)
table.row()
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("revenant")), Styles.clearTransi, image, run(() => {
unit = UnitTypes.revenant.create(t.getTeam())
unit.set(t.drawx(),t.drawy())
unit.add();
})).size(size)
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("lich")), Styles.clearTransi, image, run(() => {
unit = UnitTypes.lich.create(t.getTeam())
unit.set(t.drawx(),t.drawy())
unit.add();
})).size(size)
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("reaper")), Styles.clearTransi, image, run(() => {
unit = UnitTypes.reaper.create(t.getTeam())
unit.set(t.drawx(),t.drawy())
unit.add();
})).size(size)
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("dagger")), Styles.clearTransi, image, run(() => {
unit = UnitTypes.dagger.create(t.getTeam())
unit.set(t.drawx(),t.drawy()+8)
unit.add();
})).size(size)
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("crawler")), Styles.clearTransi, image, run(() => {
unit = UnitTypes.crawler.create(t.getTeam())
unit.set(t.drawx(),t.drawy()+8)
unit.add();
})).size(size)
table.row()
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("titan")), Styles.clearTransi, image, run(() => {
unit = UnitTypes.titan.create(t.getTeam())
unit.set(t.drawx(),t.drawy()+8)
unit.add();
})).size(size)
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("fortress")), Styles.clearTransi, image, run(() => {
unit = UnitTypes.fortress.create(t.getTeam())
unit.set(t.drawx(),t.drawy()+8)
unit.add();
})).size(size)
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("eruptor")), Styles.clearTransi, image, run(() => {
unit = UnitTypes.eruptor.create(t.getTeam())
unit.set(t.drawx(),t.drawy()+8)
unit.add();
})).size(size)
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("chaos-array")), Styles.clearTransi, image, run(() => {
unit = UnitTypes.chaosArray.create(t.getTeam())
unit.set(t.drawx(),t.drawy()+8)
unit.add();
})).size(size)
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("eradicator")), Styles.clearTransi, image, run(() => {
unit = UnitTypes.eradicator.create(t.getTeam())
unit.set(t.drawx(),t.drawy()+8)
unit.add();
})).size(size)
table.row()
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("cheat-unit")), Styles.clearTransi, image, run(() => {
unit = Vars.content.getByName(ContentType.unit,"cheat-unit").create(t.getTeam())
unit.set(t.drawx(),t.drawy())
unit.add();
})).size(size)
table.row();
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("cheat-units")), Styles.clearTransi, image, run(() => {})).size(size);
table.row()
table.addButton("[#ff0000]Kill", run(() =>{
Vars.unitGroup.all().each(cons(unit=>unit.kill()))
})).size(size);
table.addButton("[#00ff00]Heal", run(() =>{
Vars.unitGroup.all().each(cons(unit=>unit.heal()))
})).size(size);
table.row()
table.addImageButton(new TextureRegionDrawable (Core.atlas.find("cheat-players")), Styles.clearTransi, image, run(() => {})).size(size);
table.row()
table.addButton("[#ff4040]Kill", run(() =>{
Vars.player.kill()
})).size(size);
table.addButton("[#40ff40]Heal", run(() =>{
Vars.player.heal()
})).size(size);
},
update(t){
t.entity.health = Number.MAX_VALUE
}});
magic.solid = true;
magic.configurable = true;
magic.layer = Layer.turret
magic.update = true;
magic.health = 900000000;
magic.itemCapacity=10;
magic.requirements(Category.effect,ItemStack.with(Items.copper,0),true);