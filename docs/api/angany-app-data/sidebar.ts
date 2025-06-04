import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/angany-app-data/angany-app-data",
    },
    {
      type: "category",
      label: "Dashboard",
      items: [
        {
          type: "doc",
          id: "api/angany-app-data/list-call-details-api-v-1-dashboard-call-details-get",
          label: "List Call Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-app-data/get-dashboard-summary-api-v-1-dashboard-summary-get",
          label: "Get Dashboard Summary",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Logs",
      items: [
        {
          type: "doc",
          id: "api/angany-app-data/list-logs-api-v-1-calls-call-id-logs-get",
          label: "List Logs",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Calls",
      items: [
        {
          type: "doc",
          id: "api/angany-app-data/list-calls-api-v-1-calls-call-ids-get",
          label: "List Calls",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Transcriptions",
      items: [
        {
          type: "doc",
          id: "api/angany-app-data/list-transcriptions-api-v-1-calls-call-id-transcriptions-get",
          label: "List Transcriptions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Performance Events",
      items: [
        {
          type: "doc",
          id: "api/angany-app-data/list-performance-events-api-v-1-calls-call-id-performance-events-get",
          label: "List Performance Events",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-app-data/calculate-component-times-api-v-1-calls-call-id-performance-events-calculation-get",
          label: "Calculate Component Times",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
