import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/angany-configuration/angany-configuration-api",
    },
    {
      type: "category",
      label: "My Organization",
      items: [
        {
          type: "doc",
          id: "api/angany-configuration/update-my-organization-api-v-1-my-organization-put",
          label: "Update My Organization",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Trunks",
      items: [
        {
          type: "doc",
          id: "api/angany-configuration/list-trunks-api-v-1-trunks-get",
          label: "List Trunks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/create-trunk-api-v-1-trunks-post",
          label: "Create Trunk",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/angany-configuration/get-trunk-api-v-1-trunks-trunk-id-get",
          label: "Get Trunk",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/delete-trunk-api-v-1-trunks-trunk-id-delete",
          label: "Delete Trunk",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/angany-configuration/update-trunk-api-v-1-trunks-trunk-id-put",
          label: "Update Trunk",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      items: [
        {
          type: "doc",
          id: "api/angany-configuration/list-users-api-v-1-users-get",
          label: "List Users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/create-user-api-v-1-users-post",
          label: "Create User",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/angany-configuration/read-user-api-v-1-users-user-id-get",
          label: "Read User",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/update-user-api-v-1-users-user-id-put",
          label: "Update User",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/angany-configuration/delete-user-api-v-1-users-user-id-delete",
          label: "Delete User",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/angany-configuration/invite-user-api-v-1-users-invite-post",
          label: "Invite User",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Current User",
      items: [
        {
          type: "doc",
          id: "api/angany-configuration/get-current-user-api-v-1-users-me-get",
          label: "Get Current User",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/list-my-sessions-api-v-1-users-me-sessions-get",
          label: "List My Sessions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/get-my-session-details-api-v-1-users-me-sessions-session-id-get",
          label: "Get My Session Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/revoke-my-session-api-v-1-users-me-sessions-session-id-to-revoke-delete",
          label: "Revoke My Session",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Resources",
      items: [
        {
          type: "doc",
          id: "api/angany-configuration/create-resource-api-v-1-resources-post",
          label: "Create Resource",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/angany-configuration/list-resources-api-v-1-resources-get",
          label: "List Resources",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/get-resource-api-v-1-resources-resource-id-get",
          label: "Get Resource",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/delete-resource-api-v-1-resources-resource-id-delete",
          label: "Delete Resource",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/angany-configuration/update-resource-api-v-1-resources-resource-id-put",
          label: "Update Resource",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Transcriber",
      items: [
        {
          type: "doc",
          id: "api/angany-configuration/create-transcriber-api-v-1-transcriber-configurations-post",
          label: "Create Transcriber",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/angany-configuration/list-transcriber-api-v-1-transcriber-configurations-get",
          label: "List Transcriber",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/get-transcriber-api-v-1-transcriber-configurations-config-id-get",
          label: "Get Transcriber",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/update-transcriber-api-v-1-transcriber-configurations-config-id-put",
          label: "Update Transcriber",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/angany-configuration/delete-transcriber-api-v-1-transcriber-configurations-config-id-delete",
          label: "Delete Transcriber",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Synthesizer",
      items: [
        {
          type: "doc",
          id: "api/angany-configuration/create-synthesizer-api-v-1-synthesizer-configurations-post",
          label: "Create Synthesizer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/angany-configuration/list-synthesizer-api-v-1-synthesizer-configurations-get",
          label: "List Synthesizer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/get-synthesizer-api-v-1-synthesizer-configurations-config-id-get",
          label: "Get Synthesizer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/update-synthesizer-api-v-1-synthesizer-configurations-config-id-put",
          label: "Update Synthesizer",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/angany-configuration/delete-synthesizer-api-v-1-synthesizer-configurations-config-id-delete",
          label: "Delete Synthesizer",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Agentic",
      items: [
        {
          type: "doc",
          id: "api/angany-configuration/create-agentic-api-v-1-agentic-configurations-post",
          label: "Create Agentic",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/angany-configuration/list-agentic-api-v-1-agentic-configurations-get",
          label: "List Agentic",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/get-agentic-api-v-1-agentic-configurations-config-id-get",
          label: "Get Agentic",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/update-agentic-api-v-1-agentic-configurations-config-id-put",
          label: "Update Agentic",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/angany-configuration/delete-agentic-api-v-1-agentic-configurations-config-id-delete",
          label: "Delete Agentic",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Conversation",
      items: [
        {
          type: "doc",
          id: "api/angany-configuration/create-conversation-api-v-1-conversation-configurations-post",
          label: "Create Conversation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/angany-configuration/list-conversation-api-v-1-conversation-configurations-get",
          label: "List Conversation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/get-conversation-api-v-1-conversation-configurations-config-id-get",
          label: "Get Conversation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/update-conversation-api-v-1-conversation-configurations-config-id-put",
          label: "Update Conversation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/angany-configuration/delete-conversation-api-v-1-conversation-configurations-config-id-delete",
          label: "Delete Conversation",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "AI Providers",
      items: [
        {
          type: "doc",
          id: "api/angany-configuration/create-provider-api-v-1-providers-post",
          label: "Create Provider",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/angany-configuration/list-providers-api-v-1-providers-get",
          label: "List Providers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/get-provider-api-v-1-providers-provider-id-get",
          label: "Get Provider",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/update-provider-api-v-1-providers-provider-id-put",
          label: "Update Provider",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/angany-configuration/delete-provider-api-v-1-providers-provider-id-delete",
          label: "Delete Provider",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Providers Brands",
      items: [
        {
          type: "doc",
          id: "api/angany-configuration/list-providers-api-v-1-provider-brands-get",
          label: "List Providers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/get-provider-api-v-1-provider-brands-brand-key-services-service-type-path-engines-engine-identifier-get",
          label: "Get Provider",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/get-provider-form-schema-api-v-1-provider-brands-brand-key-services-service-type-path-engines-engine-identifier-form-schema-get",
          label: "Get Provider Form Schema",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Scenarios",
      items: [
        {
          type: "doc",
          id: "api/angany-configuration/create-scenario-api-v-1-scenarios-post",
          label: "Create Scenario",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/angany-configuration/list-scenarios-api-v-1-scenarios-get",
          label: "List Scenarios",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/get-scenario-api-v-1-scenarios-scenario-id-get",
          label: "Get Scenario",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/angany-configuration/update-scenario-api-v-1-scenarios-scenario-id-put",
          label: "Update Scenario",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/angany-configuration/delete-scenario-api-v-1-scenarios-scenario-id-delete",
          label: "Delete Scenario",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
