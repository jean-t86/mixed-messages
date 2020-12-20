const situationArr = [
  'Today is a good day to throw yourself into something that could really shake up your life.',
  'Things are going to be unpredictable today, so watch out for last-minutes changes, cancellations, and metaphoric wrenches getting tossed into plans.',
  'Right now it\'s more important than ever that you connect with others.',
  'When it comes to investing your money for the long haul, being conservative and cautious is totally appropriate.',
  'It\'s going to be nearly impossible for anyone to hold you back or hold you down today!',
  'One or two things could change with little or no notice today, but this fluctuation will do you some good.',
  'When you\'re in charge, you have to be in charge!',
  'Your physical appearance isn\'t always an accurate reflection of your inner self, but if you\'re feeling that disconnect growing, pay attention to it.',
  'Your high energy level is a mixed blessing today.',
  'This day should be full of an outgoing energy, which means that you should also be in a more outgoing mood.',
];

const commentArr = [
  'Sure, it might be a little bit scary, but it\'s also going to be very exhilarating!',
  'Nothing is for certain, and nothing is going to be written in stone.',
  'But in a way, not knowing what\'s going on can be kind of fun.',
  'There has been so much predictability in your life lately that this day of shake-ups could be exactly what you\'ve been waiting for!',
  'There\'s no pressure to fulfill plans when you know the plans will change.',
  'The energy of other people will inspire you and keep you feeling content with where you\'re going.',
  'But when it comes to sharing your feelings, you need to start taking a lot more risks.',
  'Sure, you could choose to flail about and try to fight to put things back into the little boxes you want them to be in, but what\'s the point?',
  'Don\'t deprive yourself of surprises and spontaneous adventures.',
  'Go along with what the crowd wants to do and you\'ll have more fun that you thought you would.',
];

const adviceArr = [
  'Right now you can\'t do anything halfway.You\'ve got to put your energy into things a hundred percent.',
  'Risk is the only way to give yourself the excitement and success you crave right now.',
  'Keeping your options open is a smart thing to do as a rule right now.',
  'Committing yourself too early will only get you involved in something you might want to get out of later.',
  'You\'re going to understand exactly what you need to say in order to get what you want.',
  'But don\'t feel guilty about it. This isn\'t some kind of evil manipulation.',
  'You can create a win/win situation for everyone.',
  'If you want to make things happen, today is the day to do it.',
  'You can easily persuade others to see things your way, so go for it!',
  'Jump into things heart first, and you stand a greater chance of making your mark and impressing people with what you have to say.',
];

const getRandomIndex = (length) => Math.floor(Math.random() * length);

const getRandomSentence = (array) => array[getRandomIndex(array.length)];

const generateHoroscope = () => {
  const situation = getRandomSentence(situationArr);
  const comment = getRandomSentence(commentArr);
  const advice = getRandomSentence(adviceArr);

  return `${situation} ${comment} ${advice}`;
};

console.log(generateHoroscope());
