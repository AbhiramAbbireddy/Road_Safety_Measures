// This file simulates fetching data from a server.
const statisticsData = {
  keyStats: [
    {
      id: 1,
      title: 'Global Traffic Fatalities',
      text: 'In 2023, the total number of global traffic fatalities was approximately 1.19 million people.',
    },
    {
      id: 2,
      title: 'Fatalities in the U.S. (2020)',
      text: 'In the U.S., there were 38,824 traffic-related fatalities in 2020, the highest number since 2007.',
    },
    {
      id: 3,
      title: 'Young Adult Fatalities',
      text: 'The age group of 5-29 years old accounts for a significant portion of global road traffic deaths.',
    },
  ],
  graphs: [
      { id: 'g1', title: 'Fatalities by Region (2023)', image: '/images/graph.jpeg' },
      { id: 'g2', title: 'Fatalities by Road User Type', image: '/images/graph1.jpeg' },
  ]
};

// This function pretends to be an API call.
export const fetchStatistics = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(statisticsData);
    }, 1000); // Wait 1 second to simulate a network request
  });
};