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
          label: 'PRODUCT',
          position: 'right',
          dropdownItems: [
            {
              label: 'Introduction to Fluxnova',
              to: '/intro'
            },
            {
              label: 'Getting Started',
              to: 'https://docs.fluxnova.finos.org'
            },
            {
              label: 'Governance',
              to: '/governance'
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
              to: 'https://docs.fluxnova.finos.org/'
            },
            {
              label: 'GitHub',
              to: 'https://github.com/finos/fluxnova-bpm-platform'
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
              to: '/contribute'
            },
            {
              label: 'Join the Conversation',
              to: 'https://github.com/finos/fluxnova-bpm-platform/discussions'
            },
          ]
        },
        {
          type: 'custom-navbarDropdownItem',
          label: 'ABOUT US',
          position: 'right',
          dropdownItems: [
            {
              label: 'Who We Are',
              to: '/about-us'
            },
            {
              label: 'Contact',
              to: 'https://github.com/finos/fluxnova-bpm-platform/discussions'
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
          title: 'PRODUCT',
          items: [
            {
              label: 'Introduction to Fluxnova',
              to: '/intro'
            },
            {
              label: 'Getting Started',
              to: 'https://docs.fluxnova.finos.org'
            },
            {
              label: 'Governance',
              to: '/governance'
            },
          ]
        },
        {
          title: 'COMMUNITY',
          items: [
            {
              label: 'Ways to contribute',
              to: '/contribute'
            },
            {
              label: 'Join the conversation',
              to: 'https://github.com/finos/fluxnova-bpm-platform/discussions'
            },
          ]
        },
        {
          title: 'RESOURCES',
          items: [
            {
              label: 'Documentation',
              to: 'https://docs.fluxnova.finos.org/'
            },
            {
              label: 'GitHub',
              to: 'https://github.com/finos/fluxnova-bpm-platform'
            },
            {
              label: 'Migration',
              to: '/migration'
            },
            {
              label: 'FAQs',
              to: '/faqs'
            }
          ]
        },
        {
          title: 'ABOUT US',
          items: [
            {
              label: 'Who We Are',
              to: '/about-us'
            },
            {
              label: 'Contact Us',
              to: 'https://github.com/finos/fluxnova-bpm-platform/discussions'
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
