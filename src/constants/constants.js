import mindClickImage from '../assets/images/MC-Project.png';

const PROJECTS = [
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

export default PROJECTS;
