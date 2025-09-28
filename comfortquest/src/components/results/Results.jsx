import ShowCard from './ShowCard.jsx';
import RecommendationExplanation from './RecommendationExplanation.jsx';

export default function Results({ recommendation, onRestart, theme }) {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Your Perfect Comfort Show</h1>
      
      <RecommendationExplanation 
        category={recommendation.category}
        theme={theme}
      />
      
      <div style={{ marginBottom: '2rem' }}>
        <h2>Primary Recommendation:</h2>
        <ShowCard show={recommendation.primaryShow} isPrimary={true} />
      </div>
      
      <div>
        <h3>You might also enjoy:</h3>
        {recommendation.alternativeShows.map(show => (
          <ShowCard key={show.id} show={show} isPrimary={false} />
        ))}
      </div>
      
      <button onClick={onRestart} style={{ marginTop: '2rem' }}>
        Take Quiz Again
      </button>
    </main>
  );
}