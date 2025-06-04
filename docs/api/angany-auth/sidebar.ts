import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/angany-auth/angany-auth-service",
    },
    {
      type: "category",
      label: "API Keys",
      items: [
        {
          type: "doc",
          id: "api/angany-auth/list-api-keys-api-v-1-api-keys-get",
          label: "List Api Keys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-auth/create-api-key-api-v-1-api-keys-post",
          label: "Create Api Key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/angany-auth/get-available-scopes-api-v-1-api-keys-scopes-get",
          label: "Get Available Scopes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-auth/get-api-key-api-v-1-api-keys-api-key-id-get",
          label: "Get Api Key",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-auth/update-api-key-api-v-1-api-keys-api-key-id-put",
          label: "Update Api Key",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/angany-auth/delete-api-key-api-v-1-api-keys-api-key-id-delete",
          label: "Delete Api Key",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/angany-auth/get-api-key-stats-api-v-1-api-keys-stats-get",
          label: "Get Api Key Stats",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
