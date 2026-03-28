const appUrl = process.env.APP_URL;
export default {
  title: "Stocks",
  path: "inventory/items/stocks",
  permission: "inv_item_stocks.list",

  content: {
    type: "crud",
    value: {
      endpoint: "/table/inv_item_stocks",

      create: {
        label: "Create",
        icon: "plus",
        permission: "inv_item_stocks.create",
        title: "Create Stock",
        modalClass: "modal-lg",

        fields: [
          {
            name: "item_id",
            label: "Item",
            type: "select2",
            dropdownParent: "#create-modal",
            ajax: {
              useBearer: true,
              term: "search",
              response: { id: "id", text: "name" },
              url: appUrl + "/table/inv_items",
              initList: {
                  url: '/table/inv_items',
                  key: 'item_id',
                  response: {id: 'id', text: 'name'},
              },
            },
            defaultValue: 'item_id',
            defaultFrom: 'queryParam'
          },
          {
            name: "amount",
            label: "Amount",
            type: "text",
            className: "col-md-6",
          },
          {
            name: "record_type",
            label: "Record Type",
            type: "select",
            defaultValue: 'IN',
            options: [
              {label: 'IN', value: 'IN'},
              {label: 'OUT', value: 'OUT'},
            ],
            className: "col-md-6",
          },
          {
            name: "ref_name",
            label: "Ref Name",
            type: "text",
            className: "col-md-6",
          },
          {
            name: "ref_id",
            label: "Ref ID",
            type: "text",
            className: "col-md-6",
          },
        ],
      },

      actions: [
        {
          label: "Detail",
          type: "view",
          icon: "eye",
          permission: "inv_item_stocks.single",
          title: "Stock Detail",
          fields: [
            {
              name: "item_name",
              label: "Item",
              type: "text",
              className: "col-md-6",
            },
            {
              name: "amount",
              label: "Amount",
              type: "text",
              className: "col-md-6",
            },
            {
              name: "record_type",
              label: "Record Type",
              type: "text",
              className: "col-md-6",
            },
            {
              name: "ref_name",
              label: "Ref Name",
              type: "text",
              className: "col-md-6",
            },
            {
              name: "ref_id",
              label: "Ref ID",
              type: "text",
              className: "col-md-6",
            },
            {
              name: "created_at",
              label: "Created At",
              type: "date",
              className: "col-md-6",
            },
          ],
        },
        {
          label: "Edit",
          type: "edit",
          icon: "edit-2",
          permission: "inv_item_stocks.update",
          title: "Edit stock",
          modalClass: "modal-lg",

          fields: [
            {
              name: "item_id",
              label: "Item",
              type: "select2",
              dropdownParent: "#edit-modal",
              ajax: {
                useBearer: true,
                term: "search",
                response: { id: "id", text: "name" },
                initList: {
                  url: "/table/inv_items",
                  key: "item_id",
                  response: { id: "id", text: "name" },
                },
                url: appUrl + "/table/inv_items",
                urlParams: [{ key: "id", value: "id" }],
              },
            },
            {
              name: "amount",
              label: "Amount",
              type: "text",
              className: "col-md-6",
            },
            {
              name: "record_type",
              label: "Record Type",
              type: "text",
              className: "col-md-6",
            },
            {
              name: "ref_name",
              label: "Ref Name",
              type: "text",
              className: "col-md-6",
            },
            {
              name: "ref_id",
              label: "Ref ID",
              type: "text",
              className: "col-md-6",
            },
          ],
        },

        {
          label: "Delete",
          type: "delete",
          icon: "trash",
          class: "text-danger",
          permission: "inv_item_stocks.delete",
        },
      ],

      columns: [
        { key: "item_name", label: "Item", sortable: true, searchable: true },
        { key: "amount", label: "Amount", sortable: true, searchable: true },
        {
          key: "record_type",
          label: "Record Type",
          sortable: true,
          searchable: true,
        },
        {
          key: "ref_name",
          label: "Ref Name",
          sortable: true,
          searchable: true,
        },
        {
          key: "created_at",
          label: "Created At",
          sortable: true,
          type: "date",
        },
      ],
    },
  },
};
