// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'vibecoding-mcp/filtering';
import { asTextContentResult } from 'vibecoding-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Vibecoding from 'vibecoding';

export const metadata: Metadata = {
  resource: 'projects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/projects',
  operationId: 'listProjects',
};

export const tool: Tool = {
  name: 'list_projects',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of coding project ideas with optional filtering by various criteria.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A coding project idea with metadata and requirements',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique identifier for the project idea'\n          },\n          category: {\n            type: 'string',\n            description: 'Category or domain of the project'\n          },\n          createdAt: {\n            type: 'string',\n            description: 'Timestamp when the project idea was created',\n            format: 'date-time'\n          },\n          customerType: {\n            type: 'string',\n            description: 'Target customer or user type'\n          },\n          description: {\n            type: 'string',\n            description: 'Detailed description of the project requirements and goals'\n          },\n          language: {\n            type: 'string',\n            description: 'Primary programming language for the project'\n          },\n          level: {\n            type: 'string',\n            description: 'Difficulty level of the project',\n            enum: [              'Beginner',\n              'Intermediate',\n              'Advanced'\n            ]\n          },\n          license: {\n            type: 'string',\n            description: 'License under which the project idea is shared'\n          },\n          projectType: {\n            type: 'string',\n            description: 'Type or nature of the project'\n          },\n          source: {\n            type: 'string',\n            description: 'Original source or attribution for the project idea'\n          },\n          techStack: {\n            type: 'array',\n            description: 'Array of technologies and frameworks used in the project',\n            items: {\n              type: 'string'\n            }\n          },\n          title: {\n            type: 'string',\n            description: 'Brief, descriptive title of the project'\n          },\n          updatedAt: {\n            type: 'string',\n            description: 'Timestamp when the project idea was last updated',\n            format: 'date-time'\n          }\n        },\n        required: [          'id',\n          'category',\n          'createdAt',\n          'customerType',\n          'description',\n          'language',\n          'level',\n          'license',\n          'projectType',\n          'source',\n          'techStack',\n          'title',\n          'updatedAt'\n        ]\n      }\n    },\n    pagination: {\n      type: 'object',\n      description: 'Pagination information for list responses',\n      properties: {\n        hasMore: {\n          type: 'boolean',\n          description: 'Whether there are more items available beyond this response'\n        },\n        limit: {\n          type: 'integer',\n          description: 'Maximum number of items returned in this response'\n        },\n        offset: {\n          type: 'integer',\n          description: 'Number of items skipped before this response'\n        },\n        total: {\n          type: 'integer',\n          description: 'Total number of items available'\n        }\n      },\n      required: [        'hasMore',\n        'limit',\n        'offset',\n        'total'\n      ]\n    }\n  },\n  required: [    'data',\n    'pagination'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      category: {
        type: 'string',
        description: 'Filter by project category',
      },
      customerType: {
        type: 'string',
        description: 'Filter by target customer type',
      },
      language: {
        type: 'string',
        description: 'Filter by preferred programming language',
      },
      level: {
        type: 'string',
        description: 'Filter by difficulty level',
        enum: ['Beginner', 'Intermediate', 'Advanced'],
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of results to return',
      },
      offset: {
        type: 'integer',
        description: 'Number of results to skip for pagination',
      },
      projectType: {
        type: 'string',
        description: 'Filter by type of project',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Vibecoding, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.projects.list(body)));
};

export default { metadata, tool, handler };
