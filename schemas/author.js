export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
    name: 'photo',
    title: 'photo',
    type: 'image',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: []
        }
      ]
    },
    {
    name: 'github',
    title: 'github',
    type: 'string',
    },
        {
    name: 'twitter',
    title: 'twitter',
    type: 'string',
    },
        {
    name: 'skype',
    title: 'skype',
    type: 'string',
    },
        {
    name: 'twitch',
    title: 'twitch',
    type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
