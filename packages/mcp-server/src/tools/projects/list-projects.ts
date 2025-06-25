// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  description: 'Retrieve a list of coding project ideas with optional filtering by various criteria.',
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
    },
  },
};

export const handler = async (client: Vibecoding, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.projects.list(body));
};

export default { metadata, tool, handler };
