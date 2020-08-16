const wall = extendContent(Wall, "wall", {
update(tile){
        if(tile.entity.health < tile.entity.maxHealth()){
            tile.entity.heal();
        }
    }
});
wall.update = true
wall.health = 999999999
wall.requirements(Category.defense,ItemStack.with(Items.copper,0),true);