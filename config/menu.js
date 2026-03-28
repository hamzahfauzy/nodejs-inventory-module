export default {
  inventory: {
    label: "Inventory",
    icon: "box",
    permissions: [
      "inv_items.list",
      "categories.list",
      "inv_item_stocks.list",
      "trx_invoices.list",
    ],
    activeState: [
      "/inventory",
      "/inventory/items",
      "/inventory/categories",
      "/inventory/items/stocks",
      "/inventory/procurement",
    ],
    children: {
      categories: {
        label: "Categories",
        route: "/inventory/categories",
        permission: "categories.list",
        activeState: ["/inventory/categories"],
      },
      items: {
        label: "Items",
        route: "/inventory/items",
        permission: "inv_items.list",
        activeState: ["/inventory/items"],
      },
      stocks: {
        label: "Stocks",
        route: "/inventory/items/stocks",
        permission: "inv_item_stocks.list",
        activeState: ["/inventory/items/stocks"],
      },
      procurement: {
        label: "Procurement",
        route: "/inventory/procurement",
        permission: "trx_invoices.list",
        activeState: ["/inventory/procurement"],
      },
    },
  },
};
