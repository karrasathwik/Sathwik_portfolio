function createBlogCard(post) {
  return `
    <div class="col-md-4 d-flex ftco-animate">
      <a href="${post.url}" class="blog-entry justify-content-end" style="text-decoration:none;color:inherit;">
        <div class="block-20 zoom-effect" style="background-image: url('${post.image}');"></div>
        <div class="text mt-3 float-right d-block">
          <h3 class="heading">${post.title}</h3>
          <p>${post.description}</p>
        </div>
      </a>
    </div>
  `;
}

const fallbackBlogPosts = [
  {
    title: 'Getting Started with Data Engineering',
    description: 'A comprehensive guide for beginners looking to start their journey in data engineering.',
    image: 'images/blog_1.jpg',
    url: 'blog1.html'
  },
  {
    title: 'SQL Performance Optimization Tips',
    description: 'Learn key techniques to optimize your SQL queries and improve database performance.',
    image: 'images/blog_2.jpg',
    url: 'blog2.html'
  },
  {
    title: 'Cloud Data Solutions: AWS vs Azure',
    description: 'Comparing popular cloud platforms for data storage, processing, and analytics workflows.',
    image: 'images/blog_3.jpg',
    url: 'blog3.html'
  }
];

async function loadBlogPosts() {
  try {
    const response = await fetch('blogs.json');
    if (!response.ok) throw new Error('Could not load blog manifest');
    return await response.json();
  } catch (error) {
    console.warn('Blog render fallback:', error);
    return fallbackBlogPosts;
  }
}

async function renderBlogCards(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const posts = await loadBlogPosts();
  const items = typeof limit === 'number' ? posts.slice(0, limit) : posts;
  container.innerHTML = items.map(createBlogCard).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderBlogCards('blog-cards', 3);
  renderBlogCards('blogs-list');
});
