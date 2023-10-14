import { SidebarLink } from '@/types'

export const themes = [
  { value: 'light', label: 'Light', icon: '/assets/icons/sun.svg' },
  { value: 'dark', label: 'Dark', icon: '/assets/icons/moon.svg' },
  { value: 'system', label: 'System', icon: '/assets/icons/computer.svg' },
]

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: '/assets/icons/home.svg',
    route: '/',
    label: 'Home',
  },
  {
    imgURL: '/assets/icons/users.svg',
    route: '/community',
    label: 'Community',
  },
  {
    imgURL: '/assets/icons/star.svg',
    route: '/collection',
    label: 'Collections',
  },
  {
    imgURL: '/assets/icons/suitcase.svg',
    route: '/jobs',
    label: 'Find Jobs',
  },
  {
    imgURL: '/assets/icons/tag.svg',
    route: '/tags',
    label: 'Tags',
  },
  {
    imgURL: '/assets/icons/user.svg',
    route: '/profile',
    label: 'Profile',
  },
  {
    imgURL: '/assets/icons/question.svg',
    route: '/ask-question',
    label: 'Ask a question',
  },
]

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
}

export const questionList = [
  {
    id: '1',
    question: 'How to use arrow functions?',
    imgURL: '/assets/icons/chevron-right.svg',
    url: '/',
  },
  {
    id: '2',
    question: 'low digit addition generator',
    imgURL: '/assets/icons/chevron-right.svg',
    url: '/',
  },
  {
    id: '3',
    question: 'palindrome vanilla js function',
    imgURL: '/assets/icons/chevron-right.svg',
    url: '/',
  },
  {
    id: '4',
    question: 'how to nest objects in an array and access them?',
    imgURL: '/assets/icons/chevron-right.svg',
    url: '/',
  },
]

export const badgeTags = [
  {
    _id: '1',
    tag: 'JavaScript',
    count: 5000,
    url: '/',
  },
  {
    _id: '2',
    tag: 'Next.js',
    count: 18543,
    url: '/',
  },
  {
    _id: '3',
    tag: 'Node.js',
    count: 10000,
    url: '/',
  },
  {
    _id: '4',
    tag: 'MongoDB',
    count: 9429,
    url: '/',
  },
  {
    _id: '5',
    tag: 'React',
    count: 2297,
    url: '/',
  },
]

export const questions = [
  {
    _id: '1',
    title: 'Cascading deletes in sqlalchemy',
    tags: [
      { _id: '1', name: 'python' },
      { _id: '2', name: 'sql' },
    ],
    author: {
      _id: '1',
      name: 'John R',
      picture: 'jr.png',
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date('oct 13 2021 09:30:00'),
  },
  {
    _id: '2',
    title: 'when to use components in react',
    tags: [
      { _id: '3', name: 'react' },
      { _id: '4', name: 'components' },
    ],
    author: {
      _id: '2',
      name: 'Jason S',
      picture: 'js.png',
    },
    upvotes: 40,
    views: 1000,
    answers: [],
    createdAt: new Date('2023-09-01T12:00:00.000Z'),
  },
]
