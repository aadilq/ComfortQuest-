import categoriesData from '../data/categories.json';
import showsData from '../data/shows.json';

export function getRecommendation(userPoints) {
  // Find winning category
  const winningCategory = Object.keys(userPoints).reduce((a, b) => 
    userPoints[a] > userPoints[b] ? a : b
  );
  
  // Get shows for that category
  const categoryShows = categoriesData[winningCategory].shows;
  
  // Weighted random selection for primary show
  const totalWeight = categoryShows.reduce((sum, show) => sum + show.weight, 0);
  const random = Math.random() * totalWeight;
  
  let currentWeight = 0;
  let primaryShow = null;
  
  for (const show of categoryShows) {
    currentWeight += show.weight;
    if (random <= currentWeight) {
      primaryShow = show.id;
      break;
    }
  }
  
  // Get 2-3 alternative shows
  const alternatives = categoryShows
    .filter(show => show.id !== primaryShow)
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 3)
    .map(show => show.id);
  
  return {
    category: winningCategory,
    primaryShow: showsData[primaryShow],
    alternativeShows: alternatives.map(id => showsData[id])
  };
}