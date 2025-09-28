<<<<<<< HEAD
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
=======
// src/utils/recommendation.js
import shows from "../data/shows.json";
import categories from "../data/categories.json";
import pointMapping from "../data/pointMapping.json";

/**
 * Build the choice keys (e.g., "city-scene1-ChoiceA") from story state.
 * @param {Object} storyState - e.g., { cityScene1: 'A', cityScene2: 'B', ... }
 * @param {'city'|'forest'} theme
 * @returns {string[]} keys that exist in pointMapping.json
 */
export function buildChoiceKeys(storyState, theme) {
  const keys = [];
  // Accept either citySceneX / forestSceneX or generic scene names
  for (let i = 1; i <= 4; i++) {
    const kCity = `cityScene${i}`;
    const kForest = `forestScene${i}`;
    const choiceLetter =
      storyState[kCity] ??
      storyState[kForest] ??
      storyState[`scene${i}`] ??
      null;

    if (choiceLetter) {
      keys.push(`${theme}-scene${i}-Choice${choiceLetter}`);
    }
  }
  return keys;
}

/**
 * Compute category scores from the selected choices using pointMapping.
 * @param {string[]} choiceKeys
 * @returns {Record<string, number>} category => score
 */
export function tallyCategoryScores(choiceKeys) {
  const totals = {};
  choiceKeys.forEach((key) => {
    const delta = pointMapping[key];
    if (!delta) return;
    Object.entries(delta).forEach(([cat, val]) => {
      totals[cat] = (totals[cat] || 0) + Number(val || 0);
    });
  });
  return totals;
}

/**
 * Convert category scores into show scores using categories.json weights.
 * Each show's score = sum_over_its_categories( categoryScore * showWeight ).
 * @param {Record<string, number>} categoryScores
 * @returns {Record<string, number>} showId => score
 */
export function scoreShowsFromCategories(categoryScores) {
  const showScores = {};

  Object.entries(categoryScores).forEach(([catName, catScore]) => {
    const cat = categories[catName];
    if (!cat || !Array.isArray(cat.shows)) return;
    cat.shows.forEach(({ id, weight }) => {
      const w = Number(weight || 0);
      if (!w) return;
      showScores[id] = (showScores[id] || 0) + catScore * w;
    });
  });

  return showScores;
}

/**
 * Rank shows and return enriched objects with metadata from shows.json.
 * Unknown shows (present in categories.json but missing in shows.json) are skipped.
 * @param {Record<string, number>} showScores
 * @param {number} topN
 * @returns {Array<{id:string, score:number, meta:object}>}
 */
export function rankShows(showScores, topN = 3) {
  const ranked = Object.entries(showScores)
    .map(([id, score]) => ({ id, score }))
    .sort((a, b) => b.score - a.score);

  const enriched = [];
  for (const r of ranked) {
    const meta = shows[r.id];
    if (!meta) continue; // skip if not in shows.json
    enriched.push({ ...r, meta });
    if (enriched.length >= topN) break;
  }
  return enriched;
}

/**
 * Full pipeline: from storyState + theme => top shows.
 * @param {Object} storyState
 * @param {'city'|'forest'} theme
 * @param {number} topN
 */
export function getTopRecommendations(storyState, theme, topN = 3) {
  const choiceKeys = buildChoiceKeys(storyState, theme);
  const categoryScores = tallyCategoryScores(choiceKeys);
  const showScores = scoreShowsFromCategories(categoryScores);
  const top = rankShows(showScores, topN);

  return {
    choiceKeys,
    categoryScores,
    showScores,
    top,
>>>>>>> f91a2765e1461350d3def6e4e15a3b2d34da2acb
  };
}