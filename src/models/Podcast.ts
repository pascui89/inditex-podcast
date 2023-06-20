export interface Podcast {
  feed: {
    author: {
      name: {
        label: string;
      };
      uri: {
        label: string;
      };
    };
    entry: PodcastEntry[];
    updated: {
      label: string;
    };
    rights: {
      label: string;
    };
    title: {
      label: string;
    };
    icon: {
      label: string;
    };
    link: {
      attributes: {
        rel: string;
        type: string;
        href: string;
      };
    }[];
    id: {
      label: string;
    };
  };
}

export interface PodcastEntry {
  'im:name': {
    label: string;
  };
  'im:image': {
    label: string;
    attributes: {
      height: string;
    };
  }[];
  summary: {
    label: string;
  };
  'im:price': {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  'im:contentType': {
    attributes: {
      term: string;
      label: string;
    };
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    };
  };
  id: {
    label: string;
    attributes: {
      'im:id': string;
    };
  };
  'im:artist': {
    label: string;
    attributes?: {
      href: string;
    };
  };
  category: {
    attributes: {
      'im:id': string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  'im:releaseDate': {
    label: string;
    attributes: {
      label: string;
    };
  };
}

export const podcastMock: Podcast = {
  feed: {
    author: {
      name: {
        label: 'Author Name',
      },
      uri: {
        label: 'Author URI',
      },
    },
    entry: [
      {
        'im:name': {
          label: 'Podcast Name 1',
        },
        'im:image': [
          {
            label: 'Image URL 1',
            attributes: {
              height: '100',
            },
          },
          {
            label: 'Image URL 1',
            attributes: {
              height: '100',
            },
          },
          {
            label: 'Image URL 1',
            attributes: {
              height: '100',
            },
          },
        ],
        summary: {
          label: 'Podcast Summary 1',
        },
        'im:price': {
          label: '9.99',
          attributes: {
            amount: '9.99',
            currency: 'USD',
          },
        },
        'im:contentType': {
          attributes: {
            term: 'Term 1',
            label: 'Label 1',
          },
        },
        rights: {
          label: 'Podcast Rights 1',
        },
        title: {
          label: 'Podcast Title 1',
        },
        link: {
          attributes: {
            rel: 'Rel 1',
            type: 'Type 1',
            href: 'Link URL 1',
          },
        },
        id: {
          label: 'Podcast ID 1',
          attributes: {
            'im:id': '1',
          },
        },
        'im:artist': {
          label: 'Artist 1',
          attributes: {
            href: 'Artist URL 1',
          },
        },
        category: {
          attributes: {
            'im:id': '1',
            term: 'Category Term 1',
            scheme: 'Category Scheme 1',
            label: 'Category Label 1',
          },
        },
        'im:releaseDate': {
          label: 'Release Date 1',
          attributes: {
            label: 'Release Date Label 1',
          },
        },
      },
    ],
    updated: {
      label: 'Updated Label',
    },
    rights: {
      label: 'Feed Rights',
    },
    title: {
      label: 'Feed Title',
    },
    icon: {
      label: 'Feed Icon',
    },
    link: [
      {
        attributes: {
          rel: 'Rel 1',
          type: 'Type 1',
          href: 'Link URL 1',
        },
      },
    ],
    id: {
      label: 'Feed ID',
    },
  },
};
