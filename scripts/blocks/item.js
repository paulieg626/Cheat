const item=extendContent(ItemSource,"item", {});
item.health = 99999
item.itemCapacity=100;
item.requirements(Category.distribution,ItemStack.with(Items.copper,0),true);