// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Vibecoding } from '../client';

export abstract class APIResource {
  protected _client: Vibecoding;

  constructor(client: Vibecoding) {
    this._client = client;
  }
}
