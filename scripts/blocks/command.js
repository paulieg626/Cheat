const skip = extend(Block, "command", {});

skip.buildType = () => extend(Building, {
update(){},
buildConfiguration(table) {
table.button(new TextureRegionDrawable(Core.atlas.find("cheat-play")), Styles.defaulti, 30, run(() => {
const dialog = new BaseDialog("Командный блок");
const table = dialog.cont;
dialog.setFillParent(true);

const text = new TextArea("");
text.setMessageText("Вводите команды (JS)");
table.add(text).width(300);
//table.add(new Label(Core.settings.getDataDirectory().child("last_log.txt")));
dialog.buttons.button("@ok", run(() => {
dialog.hide();
var code = text.getText();
if(Vars.net.client()){
 print("online: /js " + code);
 Call.sendChatMessage("/js " + code);
}else{
 print("offline: /js " + code);
 Vars.mods.getScripts().runConsole(code);
}
})).width(250);
dialog.buttons.row();
dialog.buttons.button("@back", run(() => {
dialog.hide();
})).width(250);
dialog.show()
})).size(40);
}
});
skip.update = true;
skip.configurable = true;