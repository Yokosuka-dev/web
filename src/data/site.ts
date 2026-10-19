import type { ImageMetadata } from 'astro';
import ulotaforuAvatar from '../assets/organizers/ulotaforu.png';

export const site = {
  name: 'Yokosuka.dev',
  tagline: '横須賀のITコミュニティ',
  description:
    '横須賀に関わる人が集まるITコミュニティ',
};

export const links = {
  discord: 'https://discord.gg/P5RJcdWTng',
  connpass: 'https://yokosuka-dev.connpass.com/',
  x: 'https://x.com/Yokosukadotdev',
  contactForm: 'https://forms.gle/Bx6bS18rdQxCPF8MA',
};

export const nav = [
  { id: 'about', label: 'コミュニティについて' },
  { id: 'events', label: 'これまでのイベント' },
  { id: 'guide', label: '参加ガイド' },
  { id: 'contact', label: 'お問い合わせ' },
];

export const nextEvent = {
  date: '',
  title: 'Coming Soon...',
  meta: '',
  url: '',
};

export const about = {
  lead: [
    '横須賀に住んでいる、横須賀で働いている、横須賀で学んでいる、横須賀が好き…',
    '横須賀に関わる人が集まるITコミュニティです。',
    '現役エンジニアはもちろん、未経験の方や学生など誰でも参加可能です。',
  ],
  stats: [
    // { label: 'メンバー', value: '' },
    // { label: '勉強会', value: '回' },
    // { label: 'LT会', value: '回' },
  ] as { label: string; value: string }[],
  organizers: [
    { role: '代表', name: 'うぉーたーふぉーる', avatar: ulotaforuAvatar as ImageMetadata | undefined },
  ],
};

export const pastEvents = [
  // { date: '08/16', title: '第2回 勉強会「テストを書く習慣」', meta: '参加24 ／ 発表5本' },
  // { date: '07/12', title: '第1回 LT夜会', meta: '参加31 ／ 発表8本' },
  // { date: '06/07', title: 'もくもく会 #0', meta: '参加18' },
] as { date: string; title: string; meta: string }[];

export const guide = {
  eventTypes: [
    {
      title: 'もくもく会',
      badge: '申込不要',
      badgeStyle: 'green' as const,
      body: 'Discordの音声チャンネルにて開催 ※マイクOFF・途中入退室OK',
    },
    {
      title: 'LT会・勉強会',
      badge: 'connpassで申込',
      badgeStyle: 'navy' as const,
      body: '事前申込のうえ、会場 or オンラインで開催',
      action: { label: 'connpassで申し込む', url: links.connpass },
    },
  ],
};
