export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db30700673d059f1c434ade',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-p6yu9wku',
                  apiId: '26a116e5-593f-4219-900b-1f055fbf9e56'
                },
                {
                  buildHookId: '5db30701b68a7580b38e52f1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8h1usuf6',
                  apiId: '67921ef6-eebc-4d89-a63f-f94a7a83a714'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peter/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8h1usuf6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
