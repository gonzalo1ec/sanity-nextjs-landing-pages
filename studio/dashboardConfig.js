export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ea1bd2996ccd002063afd72',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6qevik5z',
                  apiId: '0ab0f04f-9d2d-4fbe-ac4a-a098a9728ead'
                },
                {
                  buildHookId: '5ea1bd29a81ffd01d0b6c0c8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-chth8864',
                  apiId: '63aed0e5-a82a-4654-938c-cccbd5920331'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gonzalo1ec/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-chth8864.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
