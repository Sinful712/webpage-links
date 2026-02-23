document.addEventListener('DOMContentLoaded', () => {
    console.log(">>> sys.argv: ['Jesse', 'Portfolio', '2026']");
    console.log("Welcome to my site!");

    // Simple dynamic greeting based on time
    const hour = new Date().getHours();
    const welcomeHeading = document.querySelector('h2');
    
    if (welcomeHeading && welcomeHeading.innerText === "Welcome") {
        if (hour < 12) welcomeHeading.innerText = "Good Morning!";
        else if (hour < 18) welcomeHeading.innerText = "Good Afternoon!";
        else welcomeHeading.innerText = "Good Evening!";
    }
});