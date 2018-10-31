import { Document } from '@contentful/rich-text-types';

export default {
  nodeType: 'document',
  nodeClass: 'block',
  data: {},
  content: [
    {
      nodeType: 'paragraph',
      nodeClass: 'block',
      data: {},
      content: [
        {
          nodeType: 'text',
          value: 'hello world',
          marks: [],
          data: {},
        },
      ],
    },
  ],
} as Document;