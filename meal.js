document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const mealList = document.getElementById('meal-list');

    // Mock data for meals (you can replace this with an API call)
    const meals = [
        { name: 'Spaghetti', image: 'spaghetti.avif' },
        { name: 'Burger', image: 'burger.jpg' },
        { name: 'Salad', image: 'salad.jpg' },
        { name: 'Pizza', image: 'pizza.webp' },
        { name: 'Tandoori Chicken', image: 'chicken.jpg' },
        { name: 'Fish Fry', image: 'fish.jpg' },
        { name: 'Pasta', image: 'pasta.webp' },
        { name: 'Birria Tacos', image: 'tacos.jpg' },
        


        // Add more meals as needed
    ];

    // Display initial meals
    displayMeals(meals);

    // Add event listener for search input
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredMeals = meals.filter(meal => meal.name.toLowerCase().includes(searchTerm));
        displayMeals(filteredMeals);
    });

    // Function to display meals
    function displayMeals(meals) {
        mealList.innerHTML = '';
        meals.forEach(meal => {
            const mealItem = document.createElement('div');
            mealItem.classList.add('meal');
            mealItem.innerHTML = `
                <img src="${meal.image}" alt="${meal.name}">
                <h3>${meal.name}</h3>
            `;
            mealList.appendChild(mealItem);
        });
    }
});
