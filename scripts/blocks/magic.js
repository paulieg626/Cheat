var unitsGroup = [];
var teamsGroup = [];

const m = extendContent(Block, "magic",{
    init(){
        this.super$init();
        unitsGroup = Vars.content.units()
        teamsGroup = Team.baseTeams
    }
})

m.buildType = prov(() => extend(Building,{
    pint: 0,
    unitAll: [],
    addButtonTeam(i, table){
      table.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-" + i)), Styles.clearFulli, 30, run(() => {
        this.team = teamsGroup[i]
        Vars.player.team(teamsGroup[i])
    })).size(40);
    },
    addButtonUnit(b, table){
        table.button(new TextureRegionDrawable(unitsGroup.get(b).icon(Cicon.small)), Styles.clearFulli, 30, run(() => {
          this.unitAll.push(b);
        })).size(40);
    },
    buildConfiguration(table) {
      for(var i = 0; i < teamsGroup.length; i++){
          this.addButtonTeam(i, table)
      };
      table.row();
      for(var b = 0; b < unitsGroup.size; b++){
        this.addButtonUnit(b, table);
        if(b % 6 == 5){
            table.row()
        }
      };
      table.row();
      table.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-" +"kill")), Styles.clearFulli, 30, run(() => {
        Groups.unit.each(cons(unit => unit.kill()))
      })).size(40);
      table.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-" +"clear")), Styles.clearFulli, 30, run(() => {
        this.unitAll = [];
      })).size(40);
      table.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-" +"play")), Styles.clearFulli, 30, run(() => {
        for(var b = 0; b < this.unitAll.length; b++){
          unitsGroup.get(this.unitAll[b]).spawn(this.team, this.spawnX, this.spawnY);
        }
        this.unitAll = [];
      })).size(40);
    },
    loadTex(){
        this.spawnX = this.x;
        this.spawnY = this.y;
    },
    update(tile){
        if(this.pint <= 0){
        this.loadTex()
        this.pint++
        }
    }
}));
m.update = true;
m.configurable = true;