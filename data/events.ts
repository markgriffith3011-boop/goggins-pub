export type WeeklyEvent = {
  day: string
  name: string
  description: string
  time: string
  tag: string
}

export const weeklyEvents: WeeklyEvent[] = [
  {
    day: 'Monday',
    name: 'Monday Night Out',
    description: 'Start the week right. A quieter night at the bar — perfect for catching up with friends or winding down after the day.',
    time: 'From 5pm',
    tag: 'Social',
  },
  {
    day: 'Tuesday',
    name: 'Daily Specials',
    description: "Tuesday specials on food and selected drinks. Ask our staff about today's offers.",
    time: 'All day',
    tag: 'Food & Drink',
  },
  {
    day: 'Wednesday',
    name: 'Wine & Dine',
    description: 'Midweek treat — discounted bottles of wine with food orders. Perfect for a date night or catch-up.',
    time: 'From 5pm',
    tag: 'Food & Drink',
  },
  {
    day: 'Thursday',
    name: 'Quiz Night',
    description: 'The classic Goggins pub quiz. Teams of up to 6. Prizes for the top three. Book your table early — it fills up fast.',
    time: 'From 8.30pm',
    tag: 'Entertainment',
  },
  {
    day: 'Friday',
    name: 'Afterwork Drinks',
    description: "Start the weekend right. We're open from 11am — whether it's a quick one after work or a long Friday session.",
    time: 'From 11am',
    tag: 'Social',
  },
  {
    day: 'Saturday',
    name: 'Live Music',
    description: 'Live acts every Saturday night. From Irish folk to rock covers, we bring the best local talent to Monkstown.',
    time: 'From 9pm',
    tag: 'Live Music',
  },
  {
    day: 'Sunday',
    name: 'Trad Session & Sports',
    description: 'Traditional Irish music session in the afternoon, followed by live sports on the big screen. The perfect Sunday.',
    time: '3pm trad · 6pm sports',
    tag: 'Trad & Sport',
  },
]

export const tagColours: Record<WeeklyEvent['tag'], string> = {
  'Food & Drink': 'bg-pub-cream-200 text-pub-green-700',
  'Entertainment': 'bg-pub-wood-500/10 text-pub-wood-600',
  'Social': 'bg-pub-cream-200 text-pub-green-700',
  'Live Music': 'bg-pub-wood-500/10 text-pub-wood-600',
  'Trad & Sport': 'bg-pub-wood-500/10 text-pub-wood-600',
}

/** The three featured events shown on the homepage teaser */
export const featuredEventDays = ['Thursday', 'Saturday', 'Sunday']
