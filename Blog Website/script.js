let blogs = JSON.parse(localStorage.getItem('blogs')) || [
  {
    id: 1,
    title: "Third Wave Coffee",
    category: "Coffee Cafes",
    location: "Panchkula",
    date: "2025-07-18",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noy8XGwvOe8VOzWwKRy_plJpoKtrFLc_NpR8oRMsvHVzNPZEOg17yqrDgw62GTeKyt-r3IevaHSDGnMHnHTqgYXDexPFylcWuuxTDTC-zYA8qcV2FcrXp8AG9zqP_cYgJZcLrCo=s1360-w1360-h1020-rw",
    description: "Third Wave Coffee was born with the intention of introducing India to a perfectly brewed cup of coffee. ",
  },
  {
    id: 2,
    title: "House Of Garden",
    category: "Family Restaurant",
    location: "Mohali",
    date: "2025-07-15",
    image: "https://lh3.googleusercontent.com/p/AF1QipN2WysJYBDQyr4UTnSjXf33FZKicjITquXjWw-P=s1360-w1360-h1020-rw",
    description: "This Houseofgarden restaurant has an authentic look and feel of a Garden, which is well complimented by folk music, live shows and other entertainment",
  }
];


const blogContainer = document.getElementById("blogCards");
const categoryFilter = document.getElementById("categoryFilter");
const locationFilter = document.getElementById("locationFilter");
const searchBar = document.getElementById("searchBar");
const dateFilter = document.getElementById("dateFilter");
const sortFilter = document.getElementById("sortFilter");
const adminBtn = document.getElementById('adminBtn');
const adminPopup = document.getElementById('adminPopup');
const closePopup = document.getElementById('closePopup');
const blogForm = document.getElementById('blogForm');


function saveBlogsToLocalStorage() {
  localStorage.setItem('blogs', JSON.stringify(blogs));
}


function renderBlogs(data) {
  blogContainer.innerHTML = "";

  if (data.length === 0) {
    blogContainer.innerHTML = `<p>No blogs match your filter criteria.</p>`;
    return;
  }

  data.forEach((blog) => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <img src="${blog.image}" alt="${blog.title}" />
      <div class="content">
        <h3>${blog.title}</h3>
        <p>${blog.description}</p>
        <div class="meta">
          <span>${blog.category}</span> | 
          <span>${blog.location}</span> | 
          <span>${blog.date}</span>
        </div>
      </div>
    `;
    blogContainer.appendChild(card);
  });
}


function populateFilters() {
  const categories = [...new Set(blogs.map(b => b.category))];
  const locations = [...new Set(blogs.map(b => b.location))];

  categoryFilter.innerHTML = `<option value="">All Categories</option>`;
  locationFilter.innerHTML = `<option value="">All Locations</option>`;

  categories.forEach(cat => {
    categoryFilter.innerHTML += `<option value="${cat}">${cat}</option>`;
  });

  locations.forEach(loc => {
    locationFilter.innerHTML += `<option value="${loc}">${loc}</option>`;
  });
}


function applyFilters() {
  const search = searchBar.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedLocation = locationFilter.value;
  const selectedDate = dateFilter.value;
  const sortOrder = sortFilter.value;

  let filtered = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(search);
    const matchesCategory = selectedCategory === "" || blog.category === selectedCategory;
    const matchesLocation = selectedLocation === "" || blog.location === selectedLocation;
    const matchesDate = selectedDate === "" || blog.date === selectedDate;
    return matchesSearch && matchesCategory && matchesLocation && matchesDate;
  });

  if (sortOrder === "newest") {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortOrder === "oldest") {
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  renderBlogs(filtered);
}


adminBtn.addEventListener('click', () => {
  adminPopup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
  adminPopup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === adminPopup) {
    adminPopup.style.display = 'none';
  }
});

blogForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('blogTitle').value;
  const description = document.getElementById('blogDescription').value;
  const image = document.getElementById('blogImage').value;
  const category = document.getElementById('blogCategory').value;
  const location = document.getElementById('blogLocation').value;
  const date = document.getElementById('blogDate').value;

  const newBlog = { title, description, image, category, location, date };

  blogs.push(newBlog);
  saveBlogsToLocalStorage();
  populateFilters(); 
  renderBlogs(blogs);
  blogForm.reset();
  adminPopup.style.display = 'none';
});


searchBar.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
locationFilter.addEventListener("change", applyFilters);
dateFilter.addEventListener("change", applyFilters);
sortFilter.addEventListener("change", applyFilters);


window.addEventListener('DOMContentLoaded', () => {
  populateFilters();
  renderBlogs(blogs);
});
