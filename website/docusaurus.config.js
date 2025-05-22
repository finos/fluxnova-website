// Docs at https://docusaurus.io/docs

// Replace 'project-blueprint' with {project name}
const projectName = 'Flowave'
// Replace 'project-blueprint' with {project name}
const projectSlug = 'flowave-website'
// Replace 'FINOS' with {name of copyright owner}
const copyrightOwner = 'FINOS'

module.exports = {
  title: `FINOS ${projectName}`,
  tagline: `FINOS ${projectName}`, 
  url: 'https://finos.org',
  baseUrl: '/',
  trailingSlash: false,
  favicon: 'img/favicon/favicon-finos.ico',
  projectName: `FINOS ${projectName}`,
  organizationName: 'FINOS',
  customFields: {
    repoUrl: `https://github.com/finos/${projectSlug}`,
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: ['https://fonts.googleapis.com/css?family=Overpass:400,400i,700'],
  themeConfig: {
    navbar: {
      title: `FINOS ${projectName}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
      },
      items: [
        {
          href: 'https://github.com/finos/flowave-website',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    metadata: [
      {name: 'description', content: 'FINOS Flowave Website.'},
      {property: 'og:title', content: 'FINOS Flowave Website'},
      {property: 'og:description', content: 'FINOS Flowave Website.'},
      {property: 'og:image', content: 'https://raw.githubusercontent.com/finos/flowave-website/main/website/static/img/feature/feature-img.png'},
      {property: 'og:url', content: 'https:/flowave.finos.org/'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'FINOS Flowave Website'},
      {name: 'twitter:description', content: 'FINOS Flowave Homepage.'},
      {name: 'twitter:image', content: 'https://raw.githubusercontent.com/finos/flowave-website/main/website/static/img/feature/feature-img.png'},
    ],
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} ${projectName} - ${copyrightOwner}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
        href: 'https://finos.org'
      },
      links: [
        {
          title: 'FINOS',
          items: [
            {
              label: 'FINOS Website',
              to: 'https://www.finos.org/',
            },
            {
              label: 'Community Handbook',
              to: 'https://community.finos.org/',
            },
            {
              label: 'FINOS Projects',
              to: 'https://landscape.finos.org',
            }
          ]
        },
        {
          title: 'About FINOS',
          items: [
            {
              label: 'FINOS Projects on GitHub',
              to: 'https://github.com/finos',
            },
            {
              label: 'Engage the FINOS Community',
              to: 'https://www.finos.org/engage-with-our-community',
            },
            {
              label: 'FINOS News and Events',
              to: 'https://www.finos.org/news-and-events',
            }
          ]
        },
      ]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ]
};
