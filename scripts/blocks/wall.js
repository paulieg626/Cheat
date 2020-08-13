const wall=extendContent(Wall,"wall", {});
wall.health = 999999999;
wall.requirements(Category.defense,ItemStack.with(Items.copper,0),true);