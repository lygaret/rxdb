/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started with RxDB',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'overview',
          label: 'Overview'
        },
        'quickstart',
        'install',
        'dev-mode',
        'tutorials/typescript',
      ]
    },
    {
      type: 'category',
      label: 'Core Entities',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'rx-database',
          label: 'RxDatabase'
        },
        {
          type: 'doc',
          id: 'rx-schema',
          label: 'RxSchema'
        },
        {
          type: 'doc',
          id: 'rx-collection',
          label: 'RxCollection'
        },
        {
          type: 'doc',
          id: 'rx-document',
          label: 'RxDocument'
        },
        {
          type: 'doc',
          id: 'rx-query',
          label: 'RxQuery'
        }
      ]
    },
    {
      type: 'category',
      label: '💾 Storages',
      items: [
        {
          type: 'doc',
          id: 'rx-storage',
          label: 'RxStorage Overview'
        },
        {
          type: 'doc',
          id: 'rx-storage-dexie',
          label: 'Dexie.js'
        },
        {
          type: 'doc',
          id: 'rx-storage-indexeddb',
          label: 'IndexedDB 👑'
        },
        {
          type: 'doc',
          id: 'rx-storage-opfs',
          label: 'OPFS 👑'
        },
        {
          type: 'doc',
          id: 'rx-storage-memory',
          label: 'Memory'
        },
        {
          type: 'doc',
          id: 'rx-storage-sqlite',
          label: 'SQLite 👑'
        },
        {
          type: 'doc',
          id: 'rx-storage-filesystem-node',
          label: 'Filesystem Node 👑'
        },
        {
          type: 'doc',
          id: 'rx-storage-mongodb',
          label: 'MongoDB'
        },
        {
          type: 'doc',
          id: 'rx-storage-denokv',
          label: 'DenoKV'
        },
        {
          type: 'doc',
          id: 'rx-storage-foundationdb',
          label: 'FoundationDB'
        }
      ],
    },
    {
      type: 'category',
      label: 'Storage Wrappers',
      items: [
        {
          type: 'doc',
          id: 'schema-validation',
          label: 'Schema Validation'
        },
        {
          type: 'doc',
          id: 'encryption',
          label: 'Encryption'
        },
        {
          type: 'doc',
          id: 'key-compression',
          label: 'Key Compression'
        },
        {
          type: 'doc',
          id: 'logger',
          label: 'Logger 👑'
        },
        {
          type: 'doc',
          id: 'rx-storage-remote',
          label: 'Remote RxStorage'
        },
        {
          type: 'doc',
          id: 'rx-storage-worker',
          label: 'Worker RxStorage 👑'
        },
        {
          type: 'doc',
          id: 'rx-storage-shared-worker',
          label: 'SharedWorker RxStorage 👑'
        },
        {
          type: 'doc',
          id: 'rx-storage-memory-mapped',
          label: 'Memory Mapped RxStorage 👑'
        },
        {
          type: 'doc',
          id: 'rx-storage-sharding',
          label: 'Sharding 👑'
        },
        {
          type: 'doc',
          id: 'rx-storage-localstorage-meta-optimizer',
          label: 'Localstorage Meta Optimizer 👑'
        },
        {
          type: 'doc',
          id: 'electron',
          label: 'Electron'
        }
      ],
    },
    {
      type: 'category',
      label: '🔄 Replication',
      items: [
        'replication',
        {
          type: 'doc',
          id: 'replication-http',
          label: 'HTTP Replication'
        },
        {
          type: 'doc',
          id: 'replication-server',
          label: 'RxServer Replication'
        },
        {
          type: 'doc',
          id: 'replication-graphql',
          label: 'GraphQL Replication'
        },
        {
          type: 'doc',
          id: 'replication-websocket',
          label: 'WebSocket Replication'
        },
        {
          type: 'doc',
          id: 'replication-couchdb',
          label: 'CouchDB Replication'
        },
        {
          type: 'doc',
          id: 'replication-webrtc',
          label: 'WebRTC P2P Replication'
        },
        {
          type: 'doc',
          id: 'replication-firestore',
          label: 'Firestore Replication'
        },
        {
          type: 'doc',
          id: 'replication-nats',
          label: 'NATS Replication'
        }
      ],
    },
    {
      type: 'category',
      label: 'Server',
      items: [
        {
          type: 'doc',
          id: 'rx-server',
          label: 'RxServer'
        },
        {
          type: 'doc',
          id: 'rx-server-scaling',
          label: 'RxServer Scaling'
        }
      ],
    },
    {
      type: 'category',
      label: 'How RxDB works',
      items: [
        {
          type: 'doc',
          id: 'transactions-conflicts-revisions',
          label: 'Transactions Conflicts Revisions'
        },
        {
          type: 'doc',
          id: 'query-cache',
          label: 'Query Cache'
        },
        {
          type: 'doc',
          id: 'plugins',
          label: 'Creating Plugins'
        },
        {
          type: 'doc',
          id: 'errors',
          label: 'Errors'
        }
      ],
    }, {
      type: 'category',
      label: 'Advanced Features',
      items: [
        {
          type: 'category',
          label: 'Migration',
          items: [
            {
              type: 'doc',
              id: 'migration-schema',
              label: 'Schema Migration'
            },
            {
              type: 'doc',
              id: 'migration-storage',
              label: 'Storage Migration'
            }
          ],
        },
        {
          type: 'doc',
          id: 'rx-attachment',
          label: 'Attachments'
        },
        {
          type: 'doc',
          id: 'rx-pipeline',
          label: 'RxPipelines'
        },

        {
          type: 'doc',
          id: 'reactivity',
          label: 'Custom Reactivity'
        },

        {
          type: 'doc',
          id: 'rx-state',
          label: 'RxState'
        },

        {
          type: 'doc',
          id: 'rx-local-document',
          label: 'Local Documents'
        },

        {
          type: 'doc',
          id: 'cleanup',
          label: 'Cleanup'
        },

        {
          type: 'doc',
          id: 'backup',
          label: 'Backup'
        },

        {
          type: 'doc',
          id: 'leader-election',
          label: 'Leader Election'
        },
        {
          type: 'doc',
          id: 'middleware',
          label: 'Middleware'
        },

        {
          type: 'doc',
          id: 'crdt',
          label: 'CRDT'
        },

        {
          type: 'doc',
          id: 'population',
          label: 'Population'
        },

        {
          type: 'doc',
          id: 'orm',
          label: 'ORM'
        },
        {
          type: 'doc',
          id: 'fulltext-search',
          label: 'Fulltext Search 👑'
        },
        {
          type: 'doc',
          id: 'articles/javascript-vector-database',
          label: 'Vector Database'
        },
        {
          type: 'doc',
          id: 'query-optimizer',
          label: 'Query Optimizer 👑'
        },
        {
          type: 'doc',
          id: 'third-party-plugins',
          label: 'Third Party Plugins'
        }
      ],
    },
    {
      type: 'category',
      label: 'Performance',
      items: [
        {
          type: 'doc',
          id: 'rx-storage-performance',
          label: 'RxStorage Performance'
        },
        {
          type: 'doc',
          id: 'nosql-performance-tips',
          label: 'NoSQL Performance Tips'
        },
        {
          type: 'doc',
          id: 'slow-indexeddb',
          label: 'Slow IndexedDB'
        },
        {
          type: 'doc',
          id: 'articles/localstorage-indexeddb-cookies-opfs-sqlite-wasm',
          label: 'LocalStorage vs. IndexedDB vs. Cookies vs. OPFS vs. WASM-SQLite'
        }
      ],
    },
    {
      type: 'category',
      label: 'Releases',
      // label: '🆕 Releases',
      items: [
        {
          type: 'doc',
          id: 'releases/16.0.0',
          label: '16.0.0'
        },
        {
          type: 'doc',
          id: 'releases/15.0.0',
          label: '15.0.0'
        },
        {
          type: 'doc',
          id: 'releases/14.0.0',
          label: '14.0.0'
        },
        {
          type: 'doc',
          id: 'releases/13.0.0',
          label: '13.0.0'
        },
        {
          type: 'doc',
          id: 'releases/12.0.0',
          label: '12.0.0'
        },
        {
          type: 'doc',
          id: 'releases/11.0.0',
          label: '11.0.0'
        },
        {
          type: 'doc',
          id: 'releases/10.0.0',
          label: '10.0.0'
        },
        {
          type: 'doc',
          id: 'releases/9.0.0',
          label: '9.0.0'
        },
        {
          type: 'doc',
          id: 'releases/8.0.0',
          label: '8.0.0'
        }
      ],
    },
    {
      type: 'category',
      label: 'Articles',
      items: [
        'offline-first',
        'downsides-of-offline-first',
        'why-nosql',
        'nodejs-database',
        'alternatives',
        'react-native-database',
        'articles/angular-database',
        'articles/browser-database',
        'articles/browser-storage',
        'articles/data-base',
        'articles/embedded-database',
        'articles/flutter-database',
        'articles/frontend-database',
        'articles/in-memory-nosql-database',
        'articles/ionic-database',
        'articles/ionic-storage',
        'articles/json-database',
        'articles/websockets-sse-polling-webrtc-webtransport',
        'articles/localstorage',
        'articles/mobile-database',
        'articles/progressive-web-app-database',
        'articles/react-database',
        'articles/realtime-database',
        'articles/angular-indexeddb',
        'articles/react-indexeddb',
        'capacitor-database',
        'electron-database',
        'articles/optimistic-ui',
        'articles/local-database',
        'articles/react-native-encryption',
        'articles/vue-database',
        'articles/vue-indexeddb',
        'articles/jquery-database',
        'articles/firestore-alternative',
        'articles/firebase-realtime-database-alternative',
        'articles/offline-database',
        'articles/zero-latency-local-first',
        'articles/indexeddb-max-storage-limit',
        'articles/json-based-database',
        'articles/reactjs-storage',
        'articles/json-based-database'
      ],
    },
    'contribute',
    {
      type: 'category',
      label: 'Contact',
      items: [
        {
          type: 'link',
          label: 'Consulting',
          href: '/consulting/'
        },
        {
          type: 'link',
          label: 'Discord',
          href: '/chat/',
          customProps: {
            /**
             * Does not work! Missing feature in docusaurus.
             * @link https://docusaurus.canny.io/feature-requests/p/support-target-for-sidebar-links
             */
            target: '_blank'
          }
        },
        {
          type: 'link',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/rxdb/'
        },
      ],
    },

  ],
};

export default sidebars;


/*

{
  type: 'doc',
    id: '',
      label: ''
},


*/
