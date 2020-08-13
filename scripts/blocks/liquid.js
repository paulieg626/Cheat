speed = 10;
const liquid=extendContent(LiquidSource,"liquid", {});
liquid.health = 999999999;
liquid.requirements(Category.liquid,ItemStack.with(Items.copper,0),true);