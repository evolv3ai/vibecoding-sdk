// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Projects extends APIResource {
  /**
   * Retrieve a list of coding project ideas with optional filtering by various
   * criteria.
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    return this._client.get('/projects', { query, ...options });
  }
}

export interface ProjectListResponse {
  data: Array<ProjectListResponse.Data>;

  /**
   * Pagination information for list responses
   */
  pagination: ProjectListResponse.Pagination;
}

export namespace ProjectListResponse {
  /**
   * A coding project idea with metadata and requirements
   */
  export interface Data {
    /**
     * Unique identifier for the project idea
     */
    id: string;

    /**
     * Category or domain of the project
     */
    category: string;

    /**
     * Timestamp when the project idea was created
     */
    createdAt: string;

    /**
     * Target customer or user type
     */
    customerType: string;

    /**
     * Detailed description of the project requirements and goals
     */
    description: string;

    /**
     * Primary programming language for the project
     */
    language: string;

    /**
     * Difficulty level of the project
     */
    level: 'Beginner' | 'Intermediate' | 'Advanced';

    /**
     * License under which the project idea is shared
     */
    license: string;

    /**
     * Type or nature of the project
     */
    projectType: string;

    /**
     * Original source or attribution for the project idea
     */
    source: string;

    /**
     * Array of technologies and frameworks used in the project
     */
    techStack: Array<string>;

    /**
     * Brief, descriptive title of the project
     */
    title: string;

    /**
     * Timestamp when the project idea was last updated
     */
    updatedAt: string;
  }

  /**
   * Pagination information for list responses
   */
  export interface Pagination {
    /**
     * Whether there are more items available beyond this response
     */
    hasMore: boolean;

    /**
     * Maximum number of items returned in this response
     */
    limit: number;

    /**
     * Number of items skipped before this response
     */
    offset: number;

    /**
     * Total number of items available
     */
    total: number;
  }
}

export interface ProjectListParams {
  /**
   * Filter by project category
   */
  category?: string;

  /**
   * Filter by target customer type
   */
  customerType?: string;

  /**
   * Filter by preferred programming language
   */
  language?: string;

  /**
   * Filter by difficulty level
   */
  level?: 'Beginner' | 'Intermediate' | 'Advanced';

  /**
   * Maximum number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip for pagination
   */
  offset?: number;

  /**
   * Filter by type of project
   */
  projectType?: string;
}

export declare namespace Projects {
  export { type ProjectListResponse as ProjectListResponse, type ProjectListParams as ProjectListParams };
}
