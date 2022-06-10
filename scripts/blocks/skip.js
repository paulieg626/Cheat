const skip = extend(Block, "skip", {});

skip.buildType = () => extend(Building, {
update(){},
buildConfiguration(table) {
table.button(new TextureRegionDrawable(Core.atlas.find("cheat-play")), Styles.defaulti, 30, run(() => {
const dialog = new BaseDialog("[pink]Скип волн");
dialog.setFillParent(false);
const text = new Label("[red]1");
dialog.cont.add(text);
dialog.cont.row();
dialog.cont.slider(1,99999999,1,new Floatc({get: function (value){text.setText("[red]"+value)}}))
dialog.buttons.button("@ok", run(() => {
dialog.hide();
var i = text.getText().toString();
i=i.replace(/\D+/g,"");
Vars.state.wave=Number(i);
//Действие
})).width(125);
dialog.row();
dialog.buttons.button("@back", run(() => {
dialog.hide();
})).width(125);
dialog.show()
})).size(40);
}
});
skip.update = true;
skip.configurable = true;