document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('.category');
  const newsContainer = document.getElementById('newsContainer');

  // Sample news data with additional fields
  const newsData = {
    all: [
      { title: 'Tech News 1', category: 'technology', description: 'A brief overview of recent tech advancements.', url: '#' },
      { title: 'Travel News 1', category: 'travel', description: 'Exciting travel destinations around the world.', url: '#' },
      { title: 'Exploring the Backwaters of Kerala', category: 'travel-india', description: 'Discover the serene backwaters of Kerala.', url: '#' },
      { title: 'Top Tourist Destinations in Rajasthan', category: 'travel-india', description: 'Must-visit places in the vibrant state of Rajasthan.', url: '#' },
      { title: 'The Best Street Food in Mumbai', category: 'travel-india', description: 'A guide to Mumbai\'s best street food.', url: '#' },
    ],
    technology: [
      { title: 'Tech News 1', category: 'technology', description: 'A brief overview of recent tech advancements.', url: '#' },
    ],
    travel: [
      { title: 'Travel News 1', category: 'travel', description: 'Exciting travel destinations around the world.', url: '#' },
    ],
    'travel-india': [
      { title: 'Exploring the Backwaters of Kerala', category: 'travel-india', description: 'Discover the serene backwaters of Kerala.', url: '#' },
      { title: 'Top Tourist Destinations in Rajasthan', category: 'travel-india', description: 'Must-visit places in the vibrant state of Rajasthan.', url: '#' },
      { title: 'The Best Street Food in Mumbai', category: 'travel-india', description: 'A guide to Mumbai\'s best street food.', url: '#' },
    ],
  };

  function displayNews(category) {
    newsContainer.innerHTML = '';
    const articles = newsData[category] || newsData['all'];

    if (articles.length === 0) {
      newsContainer.innerHTML = '<p>No news available for this category.</p>';
      return;
    }

    articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.className = 'news-article';
      articleElement.innerHTML = `
        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
        <p>${article.description}</p>
      `;
      newsContainer.appendChild(articleElement);
    });
  }

  categories.forEach(category => {
    category.addEventListener('click', () => {
      const selectedCategory = category.getAttribute('data-category');
      displayNews(selectedCategory);
    });
  });

  // Display all news initially
  displayNews('all');
});
