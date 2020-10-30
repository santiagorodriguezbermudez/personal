import mindClickImage from '../assets/images/MC-Project.png';
import piggyAppImage from '../assets/images/Piggy_app.png';
import starWarImage from '../assets/images/starrwar.png';
import botImage from '../assets/images/bot.png';
import weatherImage from '../assets/images/weather.png';
import bjjbImage from '../assets/images/bjjb.png';
import defaultImage from '../assets/images/logo.svg';
import catalogue from '../assets/images/catalogue.png';

export const PROJECTIMAGES = {
  'Telegram Covid Bot': botImage,
  'Mind Click': mindClickImage,
  'Star Warfare': starWarImage,
  'Piggy App': piggyAppImage,
  'Traducciones BJJB': bjjbImage,
  Weather: weatherImage,
  Default: defaultImage,
  Catalogue: catalogue,
};

export const PROJECTS = [
  {
    image: mindClickImage,
    title: 'Mind Click',
    company: 'Mind Click',
    role: 'Tech Co-Founder',
    year: '2020',
    description: 'A platform that helps people to find their best mental health therapist.',
    longDescription: 'Mind Click was born to help people find their best therapist. During these times, many people are searching for the perfect therapist that can help them get by. Unfortunately, asking your friends about it or google for it is not the best approach. We’re designing an algorithm that can match you with your right therapist according to the user’s personality and preferences. We’re building the next-generation platform for mental health in Latin America.',
    githubLink: '',
    demo: '',
    languages: ['HTML', 'CSS', 'Ruby on Rails'],
    id: Math.floor((Math.random() * 100)).toString(),
  },
];

export const API_URL = 'https://api.github.com/users/santiagorodriguezbermudez/starred';
