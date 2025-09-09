// Docs at https://docusaurus.io/docs

// Replace 'project-blueprint' with {project name}
const projectName = 'Fluxnova'
// Replace 'project-blueprint' with {project name}
const projectSlug = 'fluxnova-website'
// Replace 'FINOS' with {name of copyright owner}
const copyrightOwner = 'FINOS'

module.exports = {
  title: `FINOS ${projectName}`,
  tagline: `AUTOMATE, ORCHESTRATE and ACCELERATE`, 
  url: 'https://finos.org',
  baseUrl: '/',
  trailingSlash: false,
  favicon: 'img/favicon/fluxnova.ico',
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
        alt: 'Fluxnova Logo',
        src: 'img/fluxnova/fluxnova-icon-color.png',
        height: 100,
        width: 100,
      },
      items: [
        {
          type: 'custom-navbarDropdownItem', // use outlined here: https://stackoverflow.com/questions/69173994/docusaurus-2-how-to-add-custom-react-component-in-navbar
          label: 'PROJECT',
          position: 'right',
          dropdownItems: [
            {
              label: 'Introduction to Fluxnova',
              to: '/intro'
            },
            {
              label: 'Getting Started',
              to: '/getting-started'
            },
            {
              label: 'Governance',
              to: '/governance'
            },
            {
              label: 'Roadmap',
              to: '/<PAGE>'
            },
          ]
        },
        {
          type: 'custom-navbarDropdownItem',
          label: 'RESOURCES',
          position: 'right',
          dropdownItems: [
            {
              label: 'Documentation',
              to: '/docs'
            },
            {
              label: 'GitHub',
              to: '/<PAGE>'
            },
            {
              label: 'Migration',
              to: '/migration'
            },
            {
              label: 'FAQs',
              to: '/faqs'
            },
          ]
        },
        {
          type: 'custom-navbarDropdownItem',
          label: 'COMMUNITY',
          position: 'right',
          dropdownItems: [
            {
              label: 'Ways to Contribute',
              to: '/<PAGE>'
            },
            {
              label: 'Join the Conversation',
              to: '/<PAGE>'
            },
          ]
        },
        {
          type: 'custom-navbarDropdownItem',
          label: 'ABOUT US',
          position: 'right',
          dropdownItems: [
            {
              label: 'Lead Maintainers',
              to: '/about-us'
            },
            {
              label: 'Support',
              to: '/<PAGE>'
            },
            {
              label: 'Contact',
              to: '/<PAGE>'
            },
          ]
        }
      ],
    },
    metadata: [
      {name: 'description', content: 'FINOS Fluxnova Website.'},
      {property: 'og:title', content: 'FINOS Fluxnova Website'},
      {property: 'og:description', content: 'FINOS Fluxnova Website.'},
      {property: 'og:image', content: 'https://raw.githubusercontent.com/finos/fluxnova-website/main/website/static/img/feature/feature-img.png'},
      {property: 'og:url', content: 'https:/fluxnova.finos.org/'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'FINOS Fluxnova Website'},
      {name: 'twitter:description', content: 'FINOS Fluxnova Homepage.'},
      {name: 'twitter:image', content: 'https://raw.githubusercontent.com/finos/fluxnova-website/main/website/static/img/feature/feature-img.png'},
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
              label: 'Introduction to Fluxnova',
              to: 'https://www.fluxnova.finos.org/intro'
            },
            {
              label: 'Getting Started',
              to: 'https://www.fluxnova.finos.org/<PAGE>'
            },
            {
              label: 'Governance',
              to: 'https://www.fluxnova.finos.org/governance'
            },
            {
              label: 'Roadmap',
              to: 'https://www.fluxnova.finos.org/roadmap'
            }
          ]
        },
        {
          title: 'COMMUNITY',
          items: [
            {
              label: 'Ways to contribute',
              to: 'https://www.fluxnova.finos.org/<PAGE>'
            },
            {
              label: 'Join the conversation',
              to: 'https://www.fluxnova.finos.org/<PAGE>'
            },
          ]
        },
        {
          title: 'RESOURCES',
          items: [
            {
              label: 'Documentation',
              to: 'https://www.fluxnova.finos.org/<PAGE>'
            },
            // {
            //   label: 'Releases',
            //   to: 'https://www.fluxnova.finos.org/<PAGE>'
            // },
            {
              label: 'GitHub',
              to: 'https://www.fluxnova.finos.org/<PAGE>'
            },
            {
              label: 'Migration guides/tool',
              to: 'https://www.fluxnova.finos.org/migration'
            },
            {
              label: 'FAQs',
              to: 'https://www.fluxnova.finos.org/faqs'
            }
          ]
        },
        {
          title: 'ABOUT US',
          items: [
            {
              label: 'Lead Maintainers',
              to: 'https://www.fluxnova.finos.org/<PAGE>'
            },
            {
              label: 'Support',
              to: 'https://www.fluxnova.finos.org/<PAGE>'
            },
            {
              label: 'Contact Us',
              to: 'https://www.fluxnova.finos.org/<PAGE>'
            }
          ]
        },
      ]
    },
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        }
      }
    ]
  ]
};
