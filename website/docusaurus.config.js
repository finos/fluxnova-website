// Docs at https://docusaurus.io/docs

// Replace 'project-blueprint' with {project name}
const projectName = 'Flowave'
// Replace 'project-blueprint' with {project name}
const projectSlug = 'flowave-website'
// Replace 'FINOS' with {name of copyright owner}
const copyrightOwner = 'FINOS'

module.exports = {
  title: `FINOS ${projectName}`,
  tagline: `AUTOMATE, ORCHESTRATE and ACCELERATE`, 
  url: 'https://finos.org',
  baseUrl: '/',
  trailingSlash: false,
  favicon: 'img/favicon/flowave.ico',
  projectName: `FINOS ${projectName}`,
  organizationName: 'FINOS',
  customFields: {
    repoUrl: `https://github.com/finos/${projectSlug}`,
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: ['https://fonts.googleapis.com/css?family=Overpass:400,400i,700'],
  headTags: [
    { tagName: 'link', attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" } },
    { tagName: 'link', attributes: { rel: "preconnect", href: "https://fonts.gstatic.com" } },
    { tagName: 'link', attributes: { href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap", rel: "stylesheet" } }
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Flowave Logo',
        src: 'img/flowave/flowave-icon-color.png',
        height: 100,
        width: 100,
      },
      items: [
        {
          label: 'PROJECT',
          to: '/intro',
          position: 'right',
        },
        {
          label: 'RESOURCES',
          to: 'https://flowave.finos.org/<PAGE>',
          position: 'right',
        },
        {
          label: 'COMMUNITY',
          to: 'https://flowave.finos.org/<PAGE>',
          position: 'right',
        },
        {
          label: 'ABOUT US',
          to: '/about-us',
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
        src: 'img/finos/finos-white.png',
        href: 'https://finos.org'
      },
      links: [
        {
          title: 'PROJECT',
          items: [
            {
              label: 'Introduction to Flowave',
              to: 'https://www.flowave.finos.org/<PAGE>'
            },
            {
              label: 'Getting Started',
              to: 'https://www.flowave.finos.org/<PAGE>'
            },
            {
              label: 'Governance',
              to: 'https://www.flowave.finos.org/<PAGE>'
            },
            {
              label: 'Roadmap',
              to: 'https://www.flowave.finos.org/<PAGE>'
            }
          ]
        },
        {
          title: 'COMMUNITY',
          items: [
            {
              label: 'Ways to contribute',
              to: 'https://www.flowave.finos.org/<PAGE>'
            },
            {
              label: 'Join the conversation',
              to: 'https://www.flowave.finos.org/<PAGE>'
            },
            {
              label: 'Standards',
              to: 'https://www.flowave.finos.org/<PAGE>'
            },
            {
              label: 'Blog and News',
              to: 'https://www.flowave.finos.org/<PAGE>'
            }
          ]
        },
        {
          title: 'RESOURCES',
          items: [
            {
              label: 'Documentation',
              to: 'https://www.flowave.finos.org/<PAGE>'
            },
            {
              label: 'Releases',
              to: 'https://www.flowave.finos.org/<PAGE>'
            },
            {
              label: 'FINOS Materials',
              to: 'https://www.flowave.finos.org/<PAGE>'
            },
            {
              label: 'How to contribute',
              to: 'https://www.flowave.finos.org/<PAGE>'
            },
            {
              label: 'Migration guides/tool',
              to: 'https://www.flowave.finos.org/<PAGE>'
            }
          ]
        },
        {
          title: 'ABOUT US',
          items: [
            {
              label: 'Lead Maintainers',
              to: 'https://www.flowave.finos.org/<PAGE>'
            },
            {
              label: 'FINOS Liason',
              to: 'https://www.flowave.finos.org/<PAGE>'
            },
            {
              label: 'Support',
              to: 'https://www.flowave.finos.org/<PAGE>'
            },
            {
              label: 'Contact Us',
              to: 'https://www.flowave.finos.org/<PAGE>'
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
