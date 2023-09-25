export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'overview', type: 'string', title: 'Small overview'},
    {name: 'image', type: 'image', title: 'Image'},
    // {name: 'slug', type: 'slug', title: 'Slug', options: {source: 'title'}},
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {type: 'block'},
        {type: 'image', fields: [{type: 'text', name: 'alt', title: 'Alternative Text'}]},
      ],
    },
  ],
}
