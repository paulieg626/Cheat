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
    rX: 0,
    rY: 0,
    spawnX: 0,
    spawnY: 0,
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
        Groups.unit.each(cons(unit => {if(unit!=null&&unit!=undefined){unit.kill()}}))
      })).size(40);
      //Верх
      table.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-up")), Styles.clearFulli, 30, run(() => {
        if(this.rY<39){this.spawnY=this.spawnY+8;this.rY=this.rY+8}
      })).size(40);
      table.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-" +"clear")), Styles.clearFulli, 30, run(() => {
        this.unitAll = [];
      })).size(40);
      table.row();
       //Лево
      table.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-left")), Styles.clearFulli, 30, run(() => {
        if(this.rX>-39){this.spawnX=this.spawnX-8;this.rX=this.rX-8}
      })).size(40);
      table.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-" +"play")), Styles.clearFulli, 30, run(() => {
        for(var b = 0; b < this.unitAll.length; b++){
          unitsGroup.get(this.unitAll[b]).spawn(this.team, this.spawnX, this.spawnY);
        }
        this.unitAll = [];
      })).size(40);
      //Право
      table.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-right")), Styles.clearFulli, 30, run(() => {
        if(this.rX<39){this.spawnX=this.spawnX+8;this.rX=this.rX+8}
      })).size(40);
      table.row();
      table.button("", run(() => {})).size(40);
      //Низ
      table.button(new TextureRegionDrawable(Core.atlas.find(m.name + "-down")), Styles.clearFulli, 30, run(() => {
        if(this.rY>-39){this.spawnY=this.spawnY-8;this.rY=this.rY-8}
      })).size(40);
      table.button("", run(() => {this.x=this.x-8;this.drawx=this.drawx-8;})).size(40);
    },
    update(tile){
        if(this.pint <= 0){
        this.pint++
        this.loadS();
        }
    },
    draw(){
      Draw.rect(this.block.name,this.x,this.y);
      Draw.rect(this.block.name+"-g",this.spawnX,this.spawnY);
    },
    loadS(){
      this.spawnX = this.x;
      this.spawnY = this.y;
    }
}));
m.floating = true;
m.update = true;
m.configurable = true;