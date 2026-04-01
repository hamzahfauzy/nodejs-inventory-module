import inventory_items from "./pages/inventory_items.js";
import inventory_item_stocks from "./pages/inventory_item_stocks.js";
import inventory_categories from "./pages/inventory_categories.js";
import inventory_procurement from "./pages/inventory_procurement.js";
import inv_items from "./databases/model/items.js";
import inv_item_stocks from "./databases/model/item_stocks.js";
import menu from "./config/menu.js";
import { eventBus } from "#libs/eventBus.js";
import { getModel } from "#database/database.registry.js";

export default {
  // context {register, ui, db}
  init(context) {
    for (const m in menu) {
      context.ui.registerMenu(m, menu[m]);
    }
    context.ui.registerPage("inventory/items", inventory_items);
    context.ui.registerPage("inventory/categories", inventory_categories);
    context.ui.registerPage("inventory/items/stocks", inventory_item_stocks);
    context.ui.registerPage("inventory/procurement", inventory_procurement);
    context.register.table("inv_items", inv_items);
    context.register.table("inv_item_stocks", inv_item_stocks);
    context.register.migration(
      "inventory",
      "app/inventory/databases/migrations",
    );

    eventBus.on('trx_invoices.beforeCreate', async context => {
      const itemModel = getModel('inv_items')

      const items = context.payload.items

      // 1️⃣ Ambil semua ref_id unik
      const ids = [...new Set(items.map(item => item.ref_id))]

      // 2️⃣ Query sekali pakai IN
      const dbItems = await itemModel.findAll({
          where: {
              id: ids
          }
      })

      // 3️⃣ Buat lookup map supaya cepat
      const itemMap = {}

      for (const dbItem of dbItems) {
          itemMap[dbItem.id] = dbItem
      }

      // 4️⃣ Inject ke payload
      for (const item of items) {
          const dbItem = itemMap[item.ref_id]

          if (dbItem) {
              item.name = dbItem.name
              item.ref_name = 'inv_items'
          }
      }
    })
  },
};
