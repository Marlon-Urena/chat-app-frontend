import { Contact, Conversation } from '../store/chat/types';

export const contacts: Contact[] = [
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
    name: 'Jayvion Simon',
    username: 'jayvion.simon',
    avatar: '/static/mock-images/avatars/avatar_1.jpg',
    address: '19034 Verna Unions Apt. 164 - Honolulu, RI / 87535',
    phoneNumber: '365-374-4961',
    email: 'nannie_abernathy70@yahoo.com',
    lastActivity: '2021-10-25T18:32:23.495Z',
    status: 'away',
    position: 'UX Designer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
    name: 'Lucian Obrien',
    username: 'lucian.obrien',
    avatar: '/static/mock-images/avatars/avatar_2.jpg',
    address: '1147 Rohan Drive Suite 819 - Burlington, VT / 82021',
    phoneNumber: '904-966-2836',
    email: 'ashlynn_ohara62@gmail.com',
    lastActivity: '2021-10-24T17:32:23.496Z',
    status: 'online',
    position: 'Full Stack Designer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
    name: 'Deja Brady',
    username: 'deja.brady',
    avatar: '/static/mock-images/avatars/avatar_3.jpg',
    address: '18605 Thompson Circle Apt. 086 - Idaho Falls, WV / 50337',
    phoneNumber: '399-757-9909',
    email: 'milo.farrell@hotmail.com',
    lastActivity: '2021-10-23T16:32:23.496Z',
    status: 'busy',
    position: 'Backend Developer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4',
    name: 'Harrison Stein',
    username: 'harrison.stein',
    avatar: '/static/mock-images/avatars/avatar_4.jpg',
    address: '110 Lamar Station Apt. 730 - Hagerstown, OK / 49808',
    phoneNumber: '692-767-2903',
    email: 'violet.ratke86@yahoo.com',
    lastActivity: '2021-10-22T15:32:23.496Z',
    status: 'busy',
    position: 'UX Designer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5',
    name: 'Reece Chung',
    username: 'reece.chung',
    avatar: '/static/mock-images/avatars/avatar_5.jpg',
    address: '36901 Elmer Spurs Apt. 762 - Miramar, DE / 92836',
    phoneNumber: '990-588-5716',
    email: 'letha_lubowitz24@yahoo.com',
    lastActivity: '2021-10-21T14:32:23.496Z',
    status: 'away',
    position: 'UX Designer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
    name: 'Lainey Davidson',
    username: 'lainey.davidson',
    avatar: '/static/mock-images/avatars/avatar_6.jpg',
    address: '2089 Runolfsson Harbors Suite 886 - Chapel Hill, TX / 32827',
    phoneNumber: '955-439-2578',
    email: 'aditya_greenfelder31@gmail.com',
    lastActivity: '2021-10-20T13:32:23.496Z',
    status: 'online',
    position: 'Project Manager'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
    name: 'Cristopher Cardenas',
    username: 'cristopher.cardenas',
    avatar: '/static/mock-images/avatars/avatar_7.jpg',
    address: '279 Karolann Ports Apt. 774 - Prescott Valley, WV / 53905',
    phoneNumber: '226-924-4058',
    email: 'lenna_bergnaum27@hotmail.com',
    lastActivity: '2021-10-19T12:32:23.496Z',
    status: 'online',
    position: 'Leader'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
    name: 'Melanie Noble',
    username: 'melanie.noble',
    avatar: '/static/mock-images/avatars/avatar_8.jpg',
    address: '96607 Claire Square Suite 591 - St. Louis Park, HI / 40802',
    phoneNumber: '552-917-1454',
    email: 'luella.ryan33@gmail.com',
    lastActivity: '2021-10-18T11:32:23.496Z',
    status: 'online',
    position: 'Backend Developer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9',
    name: 'Chase Day',
    username: 'chase.day',
    avatar: '/static/mock-images/avatars/avatar_9.jpg',
    address: '9388 Auer Station Suite 573 - Honolulu, AK / 98024',
    phoneNumber: '285-840-9338',
    email: 'joana.simonis84@gmail.com',
    lastActivity: '2021-10-17T10:32:23.496Z',
    status: 'away',
    position: 'Project Manager'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10',
    name: 'Shawn Manning',
    username: 'shawn.manning',
    avatar: '/static/mock-images/avatars/avatar_10.jpg',
    address: '47665 Adaline Squares Suite 510 - Blacksburg, NE / 53515',
    phoneNumber: '306-269-2446',
    email: 'marjolaine_white94@gmail.com',
    lastActivity: '2021-10-16T09:32:23.496Z',
    status: 'away',
    position: 'UI Designer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11',
    name: 'Soren Durham',
    username: 'soren.durham',
    avatar: '/static/mock-images/avatars/avatar_11.jpg',
    address: '989 Vernice Flats Apt. 183 - Billings, NV / 04147',
    phoneNumber: '883-373-6253',
    email: 'vergie_block82@hotmail.com',
    lastActivity: '2021-10-15T08:32:23.496Z',
    status: 'offline',
    position: 'UI/UX Designer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b12',
    name: 'Cortez Herring',
    username: 'cortez.herring',
    avatar: '/static/mock-images/avatars/avatar_12.jpg',
    address: '91020 Wehner Locks Apt. 673 - Albany, WY / 68763',
    phoneNumber: '476-509-8866',
    email: 'vito.hudson@hotmail.com',
    lastActivity: '2021-10-14T07:32:23.496Z',
    status: 'offline',
    position: 'UI/UX Designer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b13',
    name: 'Brycen Jimenez',
    username: 'brycen.jimenez',
    avatar: '/static/mock-images/avatars/avatar_13.jpg',
    address: '585 Candelario Pass Suite 090 - Columbus, LA / 25376',
    phoneNumber: '201-465-1954',
    email: 'tyrel_greenholt@gmail.com',
    lastActivity: '2021-10-13T06:32:23.496Z',
    status: 'online',
    position: 'UI Designer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b14',
    name: 'Giana Brandt',
    username: 'giana.brandt',
    avatar: '/static/mock-images/avatars/avatar_14.jpg',
    address: '80988 Renner Crest Apt. 000 - Fargo, VA / 24266',
    phoneNumber: '538-295-9408',
    email: 'dwight.block85@yahoo.com',
    lastActivity: '2021-10-12T05:32:23.496Z',
    status: 'busy',
    position: 'Backend Developer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b15',
    name: 'Aspen Schmitt',
    username: 'aspen.schmitt',
    avatar: '/static/mock-images/avatars/avatar_15.jpg',
    address: '28307 Shayne Pike Suite 523 - North Las Vegas, AZ / 28550',
    phoneNumber: '531-492-6028',
    email: 'mireya13@hotmail.com',
    lastActivity: '2021-10-11T04:32:23.496Z',
    status: 'offline',
    position: 'Backend Developer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b16',
    name: 'Colten Aguilar',
    username: 'colten.aguilar',
    avatar: '/static/mock-images/avatars/avatar_16.jpg',
    address: '205 Farrell Highway Suite 333 - Rock Hill, OK / 63421',
    phoneNumber: '981-699-7588',
    email: 'dasia_jenkins@hotmail.com',
    lastActivity: '2021-10-10T03:32:23.496Z',
    status: 'offline',
    position: 'Front End Developer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b17',
    name: 'Angelique Morse',
    username: 'angelique.morse',
    avatar: '/static/mock-images/avatars/avatar_17.jpg',
    address: '253 Kara Motorway Suite 821 - Manchester, SD / 09331',
    phoneNumber: '500-268-4826',
    email: 'benny89@yahoo.com',
    lastActivity: '2021-10-09T02:32:23.496Z',
    status: 'away',
    position: 'Backend Developer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b18',
    name: 'Selina Boyer',
    username: 'selina.boyer',
    avatar: '/static/mock-images/avatars/avatar_18.jpg',
    address: '13663 Kiara Oval Suite 606 - Missoula, AR / 44478',
    phoneNumber: '205-952-3828',
    email: 'dawn.goyette@gmail.com',
    lastActivity: '2021-10-08T01:32:23.496Z',
    status: 'online',
    position: 'Full Stack Designer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b19',
    name: 'Lawson Bass',
    username: 'lawson.bass',
    avatar: '/static/mock-images/avatars/avatar_19.jpg',
    address: '8110 Claire Port Apt. 703 - Anchorage, TN / 01753',
    phoneNumber: '222-255-5190',
    email: 'zella_hickle4@yahoo.com',
    lastActivity: '2021-10-07T00:32:23.496Z',
    status: 'away',
    position: 'Full Stack Developer'
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b20',
    name: 'Ariana Lang',
    username: 'ariana.lang',
    avatar: '/static/mock-images/avatars/avatar_20.jpg',
    address: '4642 Demetris Lane Suite 407 - Edmond, AZ / 60888',
    phoneNumber: '408-439-8033',
    email: 'avery43@hotmail.com',
    lastActivity: '2021-10-05T23:32:23.496Z',
    status: 'busy',
    position: 'Backend Developer'
  }
];

export const conversations: Conversation[] = [
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
    participants: [
      {
        id: '8864c717-587d-472a-929a-8e5f298024da-0',
        avatar: '/static/mock-images/avatars/avatar_15.jpg',
        name: 'Jaydon Frankie',
        username: 'jaydon.frankie',
        address: '40079 Stroman Knolls, New Ardella, GA 27241',
        phoneNumber: '255-263-6444',
        email: 'jaydon_frankie@gmail.com',
        lastActivity: '2021-10-24T17:32:23.496Z',
        position: 'Full Stack Designer',
        status: 'online'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
        name: 'Lucian Obrien',
        username: 'lucian.obrien',
        avatar: '/static/mock-images/avatars/avatar_2.jpg',
        address: '1147 Rohan Drive Suite 819 - Burlington, VT / 82021',
        phoneNumber: '904-966-2836',
        email: 'ashlynn_ohara62@gmail.com',
        lastActivity: '2021-10-24T17:32:23.496Z',
        status: 'online',
        position: 'Full Stack Designer'
      }
    ],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: '6875ceef-aa3c-4aa1-bba6-7f55c0676a4f',
        body: 'Quis veniam aut saepe aliquid nulla.',
        contentType: 'text',
        attachments: ['/static/mock-images/feeds/feed_2.jpg'],
        createdAt: new Date('2021-10-25T08:32:23.496Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2'
      },
      {
        id: '2c8811fb-5d97-4119-ba34-7c2cb93c0def',
        body: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
        contentType: 'text',
        attachments: ['/static/mock-images/feeds/feed_3.jpg'],
        createdAt: new Date('2021-10-25T16:32:23.496Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: '4cd0fea4-9b47-4c88-a89e-74b4521b7ac5',
        body: 'Error ut sit vel molestias velit.',
        contentType: 'text',
        attachments: ['/static/mock-images/avatars/avatar_12.mp4'],
        createdAt: new Date('2021-10-25T18:24:23.496Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2'
      },
      {
        id: '1825b7b1-fbdb-417e-af2e-4646603accc5',
        body: 'Quo quia sit nihil nemo doloremque et.',
        contentType: 'text',
        attachments: [
          'https://mail.google.com/mail/u/file1.docx',
          'https://mail.google.com/mail/u/file2.xlsx',
          'https://mail.google.com/mail/u/file3.pptx'
        ],
        createdAt: new Date('2021-10-25T18:26:23.496Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: '446a2a9d-0330-4bc4-88d1-85f093bf5153',
        body: 'Autem doloribus harum vero laborum.',
        contentType: 'text',
        attachments: [
          'https://mail.google.com/mail/u/file4.pdf',
          'https://mail.google.com/mail/u/file5.psd',
          'https://mail.google.com/mail/u/file6.esp',
          'https://mail.google.com/mail/u/file7.sketch'
        ],
        createdAt: new Date('2021-10-25T18:28:23.496Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2'
      },
      {
        id: 'ede08310-e6f4-4120-9d6c-585bcd6ea12c',
        attachments: [],
        contentType: 'image',
        body: '/static/mock-images/feeds/feed_5.jpg',
        createdAt: new Date('2021-10-25T18:30:23.496Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2'
      },
      {
        id: '23024217-f8ce-420b-a8bf-7e5f5fd46ebd',
        contentType: 'text',
        body: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
        attachments: [],
        createdAt: new Date('2021-10-25T18:30:23.496Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: 'de3ffd53-2d60-4a91-b88c-e9372b21969c',
        body: 'Voluptas sunt magni adipisci praesentium saepe.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:30:23.496Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      }
    ]
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
    participants: [
      {
        id: '8864c717-587d-472a-929a-8e5f298024da-0',
        avatar: '/static/mock-images/avatars/avatar_15.jpg',
        name: 'Jaydon Frankie',
        username: 'jaydon.frankie',
        address: '40079 Stroman Knolls, New Ardella, GA 27241',
        phoneNumber: '255-263-6444',
        email: 'jaydon_frankie@gmail.com',
        lastActivity: '2021-10-24T17:32:23.496Z',
        position: 'Full Stack Designer',
        status: 'online'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
        name: 'Deja Brady',
        username: 'deja.brady',
        avatar: '/static/mock-images/avatars/avatar_3.jpg',
        address: '18605 Thompson Circle Apt. 086 - Idaho Falls, WV / 50337',
        phoneNumber: '399-757-9909',
        email: 'milo.farrell@hotmail.com',
        lastActivity: '2021-10-23T16:32:23.496Z',
        status: 'busy',
        position: 'Backend Developer'
      }
    ],
    type: 'ONE_TO_ONE',
    unreadCount: 2,
    messages: [
      {
        id: 'f9fa4600-edbd-43a6-ac81-42b1f3eb4140',
        body: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T10:32:23.496Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3'
      },
      {
        id: '7d56bef2-fef8-4507-a4ad-abc7c363f307',
        body: 'Ipsum expedita reiciendis ut.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T12:32:23.496Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: 'fa71bbd9-b8af-4e10-9485-6ff6e5e7d96f',
        body: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T14:02:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3'
      },
      {
        id: '47e01564-6e7f-4844-afa6-79290442f341',
        body: 'Reiciendis enim officiis cupiditate eaque distinctio laudantium modi similique consequatur.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T16:17:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: '88cb4583-262d-423d-ad1a-1043b9ec3e16',
        body: 'Ab autem consequatur itaque mollitia ipsum cupiditate error repudiandae nobis.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T17:17:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3'
      },
      {
        id: '9fe4e716-8641-4b32-b65a-9a1834ede9b8',
        body: '/static/mock-images/feeds/feed_8.jpg',
        attachments: [],
        contentType: 'image',
        createdAt: new Date('2021-10-25T17:32:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3'
      },
      {
        id: 'fda817e4-5659-4bf4-b053-f7c122049416',
        body: 'Distinctio architecto debitis eligendi consequatur unde id modi accusantium possimus.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T17:47:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      }
    ]
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4',
    participants: [
      {
        id: '8864c717-587d-472a-929a-8e5f298024da-0',
        avatar: '/static/mock-images/avatars/avatar_15.jpg',
        name: 'Jaydon Frankie',
        username: 'jaydon.frankie',
        address: '40079 Stroman Knolls, New Ardella, GA 27241',
        phoneNumber: '255-263-6444',
        email: 'jaydon_frankie@gmail.com',
        lastActivity: '2021-10-24T17:32:23.496Z',
        position: 'Full Stack Designer',
        status: 'online'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4',
        name: 'Harrison Stein',
        username: 'harrison.stein',
        avatar: '/static/mock-images/avatars/avatar_4.jpg',
        address: '110 Lamar Station Apt. 730 - Hagerstown, OK / 49808',
        phoneNumber: '692-767-2903',
        email: 'violet.ratke86@yahoo.com',
        lastActivity: '2021-10-22T15:32:23.496Z',
        status: 'busy',
        position: 'UX Designer'
      }
    ],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: '6ff0c886-6e6e-4747-addd-b73948532be6',
        body: 'At ut voluptate accusantium.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T10:32:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4'
      },
      {
        id: '57cb560c-6bb4-4908-b811-b2efbacf1c15',
        body: 'Repudiandae ut qui veritatis sint.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T12:32:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: '1b5103eb-6b4d-413f-aa37-d2714721cc4e',
        body: 'Laboriosam blanditiis quo sed et qui esse ipsam necessitatibus sed.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T14:02:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4'
      },
      {
        id: 'b8199ab7-8466-4dad-8991-a193f22ef2bd',
        body: 'Et molestiae et excepturi maxime omnis.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T16:17:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: '9a530a4b-39ab-4e51-a8a1-343d4bbe3514',
        body: 'Sint dolorem quam eum magnam.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T17:17:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4'
      },
      {
        id: 'c84c4c75-16d6-4cf5-a293-16a808f2f079',
        body: '/static/mock-images/feeds/feed_6.jpg',
        contentType: 'image',
        attachments: [],
        createdAt: new Date('2021-10-25T17:32:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4'
      },
      {
        id: '49371438-9edc-425e-93d0-687df94c872b',
        body: '/static/mock-images/feeds/feed_7.jpg',
        contentType: 'image',
        attachments: [],
        createdAt: new Date('2021-10-25T17:32:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4'
      }
    ]
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5',
    participants: [
      {
        id: '8864c717-587d-472a-929a-8e5f298024da-0',
        avatar: '/static/mock-images/avatars/avatar_15.jpg',
        name: 'Jaydon Frankie',
        username: 'jaydon.frankie',
        address: '40079 Stroman Knolls, New Ardella, GA 27241',
        phoneNumber: '255-263-6444',
        email: 'jaydon_frankie@gmail.com',
        lastActivity: '2021-10-24T17:32:23.496Z',
        position: 'Full Stack Designer',
        status: 'online'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5',
        name: 'Reece Chung',
        username: 'reece.chung',
        avatar: '/static/mock-images/avatars/avatar_5.jpg',
        address: '36901 Elmer Spurs Apt. 762 - Miramar, DE / 92836',
        phoneNumber: '990-588-5716',
        email: 'letha_lubowitz24@yahoo.com',
        lastActivity: '2021-10-21T14:32:23.496Z',
        status: 'away',
        position: 'UX Designer'
      }
    ],
    type: 'ONE_TO_ONE',
    unreadCount: 2,
    messages: [
      {
        id: 'b018893e-27ce-4f27-b07d-a601531e6644',
        body: 'Rerum ut iusto iste quam voluptatem necessitatibus.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T08:32:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'
      },
      {
        id: '9bc41d2a-c734-45b3-a4bf-ef6a8158bee5',
        body: 'Et quam in.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T16:32:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: '16656a5e-d9d4-4966-aabc-0adb9f86013a',
        body: 'Fugit esse tenetur.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:27:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'
      },
      {
        id: '8d12fb00-069d-4168-862d-bc48cccdfbd6',
        body: 'Dolorem dolor porro nihil cupiditate molestiae deserunt ut.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:29:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: 'b9beeff3-085c-4188-961d-51ceb883bc75',
        body: 'Omnis beatae eos eius aut molestias laboriosam laborum et optio.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:31:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: 'd218e460-13c2-4753-8a89-79e120656df8',
        body: 'Ut veniam quam assumenda ut voluptatibus ducimus accusamus.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:31:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'
      }
    ]
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
    participants: [
      {
        id: '8864c717-587d-472a-929a-8e5f298024da-0',
        avatar: '/static/mock-images/avatars/avatar_15.jpg',
        name: 'Jaydon Frankie',
        username: 'jaydon.frankie',
        address: '40079 Stroman Knolls, New Ardella, GA 27241',
        phoneNumber: '255-263-6444',
        email: 'jaydon_frankie@gmail.com',
        lastActivity: '2021-10-24T17:32:23.496Z',
        position: 'Full Stack Designer',
        status: 'online'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
        name: 'Lainey Davidson',
        username: 'lainey.davidson',
        avatar: '/static/mock-images/avatars/avatar_6.jpg',
        address: '2089 Runolfsson Harbors Suite 886 - Chapel Hill, TX / 32827',
        phoneNumber: '955-439-2578',
        email: 'aditya_greenfelder31@gmail.com',
        lastActivity: '2021-10-20T13:32:23.496Z',
        status: 'online',
        position: 'Project Manager'
      }
    ],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: 'f59a3185-ddf4-46b6-9d0b-f1f3d43e2cc8',
        body: 'Quos dignissimos neque omnis reiciendis voluptatem ducimus.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:31:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: '2ff47d8d-7d90-450e-8f55-4fa2bd3b8694',
        body: 'Laboriosam quia ut esse.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:31:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6'
      }
    ]
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
    participants: [
      {
        id: '8864c717-587d-472a-929a-8e5f298024da-0',
        avatar: '/static/mock-images/avatars/avatar_15.jpg',
        name: 'Jaydon Frankie',
        username: 'jaydon.frankie',
        address: '40079 Stroman Knolls, New Ardella, GA 27241',
        phoneNumber: '255-263-6444',
        email: 'jaydon_frankie@gmail.com',
        lastActivity: '2021-10-24T17:32:23.496Z',
        position: 'Full Stack Designer',
        status: 'online'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
        name: 'Cristopher Cardenas',
        username: 'cristopher.cardenas',
        avatar: '/static/mock-images/avatars/avatar_7.jpg',
        address: '279 Karolann Ports Apt. 774 - Prescott Valley, WV / 53905',
        phoneNumber: '226-924-4058',
        email: 'lenna_bergnaum27@hotmail.com',
        lastActivity: '2021-10-19T12:32:23.496Z',
        status: 'online',
        position: 'Leader'
      }
    ],
    type: 'ONE_TO_ONE',
    unreadCount: 2,
    messages: [
      {
        id: '8ac84c79-5762-4057-af9a-ae92063da586',
        body: 'Sit reiciendis nihil qui molestias et.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:31:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: 'ac2cb9d4-2c98-4e50-8cdb-8ea4c51c00b1',
        body: 'Facilis cupiditate minima ratione quaerat omnis velit non ex totam.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:31:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7'
      }
    ]
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
    participants: [
      {
        id: '8864c717-587d-472a-929a-8e5f298024da-0',
        avatar: '/static/mock-images/avatars/avatar_15.jpg',
        name: 'Jaydon Frankie',
        username: 'jaydon.frankie',
        address: '40079 Stroman Knolls, New Ardella, GA 27241',
        phoneNumber: '255-263-6444',
        email: 'jaydon_frankie@gmail.com',
        lastActivity: '2021-10-24T17:32:23.496Z',
        position: 'Full Stack Designer',
        status: 'online'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
        name: 'Lucian Obrien',
        username: 'lucian.obrien',
        avatar: '/static/mock-images/avatars/avatar_2.jpg',
        address: '1147 Rohan Drive Suite 819 - Burlington, VT / 82021',
        phoneNumber: '904-966-2836',
        email: 'ashlynn_ohara62@gmail.com',
        lastActivity: '2021-10-24T17:32:23.496Z',
        status: 'online',
        position: 'Full Stack Designer'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
        name: 'Deja Brady',
        username: 'deja.brady',
        avatar: '/static/mock-images/avatars/avatar_3.jpg',
        address: '18605 Thompson Circle Apt. 086 - Idaho Falls, WV / 50337',
        phoneNumber: '399-757-9909',
        email: 'milo.farrell@hotmail.com',
        lastActivity: '2021-10-23T16:32:23.496Z',
        status: 'busy',
        position: 'Backend Developer'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5',
        name: 'Reece Chung',
        username: 'reece.chung',
        avatar: '/static/mock-images/avatars/avatar_5.jpg',
        address: '36901 Elmer Spurs Apt. 762 - Miramar, DE / 92836',
        phoneNumber: '990-588-5716',
        email: 'letha_lubowitz24@yahoo.com',
        lastActivity: '2021-10-21T14:32:23.496Z',
        status: 'away',
        position: 'UX Designer'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4',
        name: 'Harrison Stein',
        username: 'harrison.stein',
        avatar: '/static/mock-images/avatars/avatar_4.jpg',
        address: '110 Lamar Station Apt. 730 - Hagerstown, OK / 49808',
        phoneNumber: '692-767-2903',
        email: 'violet.ratke86@yahoo.com',
        lastActivity: '2021-10-22T15:32:23.496Z',
        status: 'busy',
        position: 'UX Designer'
      }
    ],
    type: 'GROUP',
    unreadCount: 5,
    messages: [
      {
        id: 'e9b577fd-6950-49e7-8786-80f5ad216398',
        body: 'Provident sint esse voluptatem voluptas eveniet est.',
        contentType: 'text',
        attachments: [
          '/static/mock-images/feeds/feed_2.jpg',
          '/static/mock-images/feeds/feed_3.jpg',
          '/static/mock-images/feeds/feed_4.jpg',
          '/static/mock-images/feeds/feed_5.jpg',
          'https://mail.google.com/mail/u/file1.docx'
        ],
        createdAt: new Date('2021-10-22T16:02:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: '4308b3c7-af63-49a7-9ac9-27308d42362d',
        body: 'Molestias consequatur ea facilis.',
        contentType: 'text',
        attachments: ['https://mail.google.com/mail/u/file2.xlsx'],
        createdAt: new Date('2021-10-22T16:03:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2'
      },
      {
        id: '0f19ce81-44fb-4ffc-a51b-4089a4163b55',
        body: 'Tempora voluptatibus autem ut ut porro quae delectus dolorum.',
        contentType: 'text',
        attachments: ['https://mail.google.com/mail/u/file3.psd'],
        createdAt: new Date('2021-10-22T16:04:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3'
      },
      {
        id: 'c1465723-eea5-4706-b61f-98a3f465e282',
        body: 'Et consequatur amet nemo ducimus voluptatem placeat voluptas.',
        contentType: 'text',
        attachments: ['https://mail.google.com/mail/u/file3.pptx'],
        createdAt: new Date('2021-10-22T16:05:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'
      },
      {
        id: '0cea30c2-3dbc-449e-9273-d32a1b8dd95b',
        body: 'Modi iste atque hic voluptas sit quis deleniti quas consequatur.',
        contentType: 'text',
        attachments: ['https://mail.google.com/mail/u/file3.ai'],
        createdAt: new Date('2021-10-22T16:06:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: '9f679382-b1b2-45c0-89ff-38f33073a8f3',
        body: 'Omnis est aliquid odio mollitia aliquid ex.',
        contentType: 'text',
        attachments: ['https://mail.google.com/mail/u/file3.mp4'],
        createdAt: new Date('2021-10-22T18:32:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4'
      }
    ]
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9',
    participants: [
      {
        id: '8864c717-587d-472a-929a-8e5f298024da-0',
        avatar: '/static/mock-images/avatars/avatar_15.jpg',
        name: 'Jaydon Frankie',
        username: 'jaydon.frankie',
        address: '40079 Stroman Knolls, New Ardella, GA 27241',
        phoneNumber: '255-263-6444',
        email: 'jaydon_frankie@gmail.com',
        lastActivity: '2021-10-24T17:32:23.496Z',
        position: 'Full Stack Designer',
        status: 'online'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
        name: 'Melanie Noble',
        username: 'melanie.noble',
        avatar: '/static/mock-images/avatars/avatar_8.jpg',
        address: '96607 Claire Square Suite 591 - St. Louis Park, HI / 40802',
        phoneNumber: '552-917-1454',
        email: 'luella.ryan33@gmail.com',
        lastActivity: '2021-10-18T11:32:23.496Z',
        status: 'online',
        position: 'Backend Developer'
      }
    ],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: '8c62bf05-ca19-4b6f-ad28-1d1755508b3d',
        body: 'Officia possimus veniam quod molestias.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:31:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: 'c1140051-8d77-4310-b556-677790394f2a',
        body: 'Quis veniam aut saepe aliquid nulla.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:31:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8'
      }
    ]
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10',
    participants: [
      {
        id: '8864c717-587d-472a-929a-8e5f298024da-0',
        avatar: '/static/mock-images/avatars/avatar_15.jpg',
        name: 'Jaydon Frankie',
        username: 'jaydon.frankie',
        address: '40079 Stroman Knolls, New Ardella, GA 27241',
        phoneNumber: '255-263-6444',
        email: 'jaydon_frankie@gmail.com',
        lastActivity: '2021-10-24T17:32:23.496Z',
        position: 'Full Stack Designer',
        status: 'online'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9',
        name: 'Chase Day',
        username: 'chase.day',
        avatar: '/static/mock-images/avatars/avatar_9.jpg',
        address: '9388 Auer Station Suite 573 - Honolulu, AK / 98024',
        phoneNumber: '285-840-9338',
        email: 'joana.simonis84@gmail.com',
        lastActivity: '2021-10-17T10:32:23.496Z',
        status: 'away',
        position: 'Project Manager'
      }
    ],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: 'e4b9333e-b18a-4236-9cab-825163cde69b',
        body: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:31:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: '55048e4b-6f91-4af7-81ec-1df89b7db882',
        body: 'Error ut sit vel molestias velit.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:31:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9'
      }
    ]
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11',
    participants: [
      {
        id: '8864c717-587d-472a-929a-8e5f298024da-0',
        avatar: '/static/mock-images/avatars/avatar_15.jpg',
        name: 'Jaydon Frankie',
        username: 'jaydon.frankie',
        address: '40079 Stroman Knolls, New Ardella, GA 27241',
        phoneNumber: '255-263-6444',
        email: 'jaydon_frankie@gmail.com',
        lastActivity: '2021-10-24T17:32:23.496Z',
        position: 'Full Stack Designer',
        status: 'online'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10',
        name: 'Shawn Manning',
        username: 'shawn.manning',
        avatar: '/static/mock-images/avatars/avatar_10.jpg',
        address: '47665 Adaline Squares Suite 510 - Blacksburg, NE / 53515',
        phoneNumber: '306-269-2446',
        email: 'marjolaine_white94@gmail.com',
        lastActivity: '2021-10-16T09:32:23.496Z',
        status: 'away',
        position: 'UI Designer'
      }
    ],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: 'a8c825ed-73c2-4c57-b2df-cfaf4c775485',
        body: 'Quo quia sit nihil nemo doloremque et.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:31:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: '21dbc035-442a-4721-a334-7658d68d805c',
        body: 'Autem doloribus harum vero laborum.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:31:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10'
      }
    ]
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b12',
    participants: [
      {
        id: '8864c717-587d-472a-929a-8e5f298024da-0',
        avatar: '/static/mock-images/avatars/avatar_15.jpg',
        name: 'Jaydon Frankie',
        username: 'jaydon.frankie',
        address: '40079 Stroman Knolls, New Ardella, GA 27241',
        phoneNumber: '255-263-6444',
        email: 'jaydon_frankie@gmail.com',
        lastActivity: '2021-10-24T17:32:23.496Z',
        position: 'Full Stack Designer',
        status: 'online'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
        name: 'Cristopher Cardenas',
        username: 'cristopher.cardenas',
        avatar: '/static/mock-images/avatars/avatar_7.jpg',
        address: '279 Karolann Ports Apt. 774 - Prescott Valley, WV / 53905',
        phoneNumber: '226-924-4058',
        email: 'lenna_bergnaum27@hotmail.com',
        lastActivity: '2021-10-19T12:32:23.496Z',
        status: 'online',
        position: 'Leader'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
        name: 'Melanie Noble',
        username: 'melanie.noble',
        avatar: '/static/mock-images/avatars/avatar_8.jpg',
        address: '96607 Claire Square Suite 591 - St. Louis Park, HI / 40802',
        phoneNumber: '552-917-1454',
        email: 'luella.ryan33@gmail.com',
        lastActivity: '2021-10-18T11:32:23.496Z',
        status: 'online',
        position: 'Backend Developer'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9',
        name: 'Chase Day',
        username: 'chase.day',
        avatar: '/static/mock-images/avatars/avatar_9.jpg',
        address: '9388 Auer Station Suite 573 - Honolulu, AK / 98024',
        phoneNumber: '285-840-9338',
        email: 'joana.simonis84@gmail.com',
        lastActivity: '2021-10-17T10:32:23.496Z',
        status: 'away',
        position: 'Project Manager'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10',
        name: 'Shawn Manning',
        username: 'shawn.manning',
        avatar: '/static/mock-images/avatars/avatar_10.jpg',
        address: '47665 Adaline Squares Suite 510 - Blacksburg, NE / 53515',
        phoneNumber: '306-269-2446',
        email: 'marjolaine_white94@gmail.com',
        lastActivity: '2021-10-16T09:32:23.496Z',
        status: 'away',
        position: 'UI Designer'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11',
        name: 'Soren Durham',
        username: 'soren.durham',
        avatar: '/static/mock-images/avatars/avatar_11.jpg',
        address: '989 Vernice Flats Apt. 183 - Billings, NV / 04147',
        phoneNumber: '883-373-6253',
        email: 'vergie_block82@hotmail.com',
        lastActivity: '2021-10-15T08:32:23.496Z',
        status: 'offline',
        position: 'UI/UX Designer'
      }
    ],
    type: 'GROUP',
    unreadCount: 0,
    messages: [
      {
        id: '4bd42b65-0331-48d2-a747-b5a44a8869bf',
        body: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-22T16:02:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: 'e7dbdddf-5277-4c23-b404-372f1710aecc',
        body: 'Voluptas sunt magni adipisci praesentium saepe.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-22T16:03:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10'
      },
      {
        id: '5497846d-e548-4afd-84cd-88884b775ee0',
        body: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-22T16:04:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11'
      },
      {
        id: 'e186c0e7-2f16-493b-b812-04b692c5fff2',
        body: 'Ipsum expedita reiciendis ut.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-22T16:05:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9'
      },
      {
        id: 'bd38d2fc-24a0-486f-99f8-1b3951a4f66f',
        attachments: [],
        body: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        contentType: 'text',
        createdAt: new Date('2021-10-22T16:06:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: '72c23645-dc3a-4f55-b79f-6fe1e0bc35cd',
        body: 'Reiciendis enim officiis cupiditate eaque distinctio laudantium modi similique consequatur.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-22T18:32:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7'
      },
      {
        id: 'f9203b56-65f4-462b-9f63-46b189529078',
        body: 'Ab autem consequatur itaque mollitia ipsum cupiditate error repudiandae nobis.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-22T18:32:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8'
      }
    ]
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b13',
    participants: [
      {
        id: '8864c717-587d-472a-929a-8e5f298024da-0',
        avatar: '/static/mock-images/avatars/avatar_15.jpg',
        name: 'Jaydon Frankie',
        username: 'jaydon.frankie',
        address: '40079 Stroman Knolls, New Ardella, GA 27241',
        phoneNumber: '255-263-6444',
        email: 'jaydon_frankie@gmail.com',
        lastActivity: '2021-10-24T17:32:23.496Z',
        position: 'Full Stack Designer',
        status: 'online'
      },
      {
        id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11',
        name: 'Soren Durham',
        username: 'soren.durham',
        avatar: '/static/mock-images/avatars/avatar_11.jpg',
        address: '989 Vernice Flats Apt. 183 - Billings, NV / 04147',
        phoneNumber: '883-373-6253',
        email: 'vergie_block82@hotmail.com',
        lastActivity: '2021-10-15T08:32:23.496Z',
        status: 'offline',
        position: 'UI/UX Designer'
      }
    ],
    type: 'ONE_TO_ONE',
    unreadCount: 0,
    messages: [
      {
        id: '8193d7a7-1e0c-4fbd-a5a0-51e252f43313',
        body: 'Distinctio architecto debitis eligendi consequatur unde id modi accusantium possimus.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:31:23.497Z'),
        senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
      },
      {
        id: 'd41d40ae-05f2-4d51-a879-ddfc70d8a968',
        body: 'At ut voluptate accusantium.',
        contentType: 'text',
        attachments: [],
        createdAt: new Date('2021-10-25T18:31:23.497Z'),
        senderId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11'
      }
    ]
  }
];
