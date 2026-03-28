const appUrl = process.env.APP_URL;
export default {
  title: "Items",
  path: "inventory/items",
  permission: "inv_items.list",

  content: {
    type: "crud",
    value: {
      endpoint: "/table/inv_items",

      create: {
        label: "Create",
        icon: "plus",
        permission: "inv_items.create",
        title: "Create Item",
        modalClass: "modal-lg",

        fields: [
          {
            name: "organization_id",
            label: "Organization",
            type: "select2",
            dropdownParent: "#create-modal",
            ajax: {
              useBearer: true,
              term: "search",
              response: { id: "id", text: "name" },
              url: appUrl + "/table/organizations",
            },
          },
          { name: "code", label: "Code", type: "text", className: "col-md-6" },
          { name: "sku", label: "SKU", type: "text", className: "col-md-6" },
          { name: "name", label: "Name", type: "text", className: "col-md-6" },
          { name: "unit", label: "Unit", type: "text", className: "col-md-6" },
          { name: "description", label: "Description", type: "textArea" },
        ],
      },

      actions: [
        {
          label: "Detail",
          type: "view",
          icon: "eye",
          permission: "inv_items.single",
          title: "item Detail",
          fields: [
            {
              name: "organization_name",
              label: "Organization",
              type: "text",
              className: "col-md-6",
            },
            {
              name: "code",
              label: "Code",
              type: "text",
              className: "col-md-6",
            },
            { name: "sku", label: "SKU", type: "text", className: "col-md-6" },
            {
              name: "name",
              label: "Name",
              type: "text",
              className: "col-md-6",
            },
            {
              name: "unit",
              label: "Unit",
              type: "text",
              className: "col-md-6",
            },
            { name: "description", label: "Description", type: "text" },
            // { name: "metadata", label: "Metadata", type: "object" },
            {
              name: "created_at",
              label: "Created At",
              type: "date",
              className: "col-md-6",
            },
            {
              name: "updated_at",
              label: "Updated At",
              type: "date",
              className: "col-md-6",
            },
          ],
        },
        {
          label: "Edit",
          type: "edit",
          icon: "edit-2",
          permission: "inv_items.update",
          title: "Edit item",
          modalClass: "modal-lg",

          fields: [
            {
              name: "organization_id",
              label: "Organization",
              type: "select2",
              dropdownParent: "#edit-modal",
              ajax: {
                useBearer: true,
                term: "search",
                response: { id: "id", text: "name" },
                initList: {
                  url: "/table/organizations",
                  key: "organization_id",
                  response: { id: "id", text: "name" },
                },
                url: appUrl + "/table/organizations",
                urlParams: [{ key: "id", value: "id" }],
              },
            },
            {
              name: "code",
              label: "Code",
              type: "text",
              className: "col-md-6",
            },
            { name: "sku", label: "SKU", type: "text", className: "col-md-6" },
            {
              name: "name",
              label: "Name",
              type: "text",
              className: "col-md-6",
            },
            {
              name: "unit",
              label: "Unit",
              type: "text",
              className: "col-md-6",
            },
            { name: "description", label: "Description", type: "textArea" },
          ],
        },

        {
          label: "Delete",
          type: "delete",
          icon: "trash",
          class: "text-danger",
          permission: "inv_items.delete",
        },
      ],

      columns: [
        { key: "code", label: "Code", sortable: true, searchable: true },
        { key: "name", label: "Name", sortable: true, searchable: true },
        { key: "organization_name", label: "Organization", sortable: true },
        { key: "sku", label: "SKU", sortable: true, searchable: true },
        { key: "unit", label: "Unit", sortable: true, searchable: true },
        {
          key: "created_at",
          label: "Created At",
          sortable: true,
          type: "date",
        },
        {
          key: "updated_at",
          label: "Updated At",
          sortable: true,
          type: "date",
        },
      ],
    },
  },
};
