// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Vibecoding from 'vibecoding';

const client = new Vibecoding({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource projects', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.projects.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.list(
        {
          category: 'category',
          customerType: 'customerType',
          language: 'language',
          level: 'Beginner',
          limit: 1,
          offset: 0,
          projectType: 'projectType',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Vibecoding.NotFoundError);
  });
});
