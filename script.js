// =======================================================
// OPENING SCREEN AUTO SCROLL
// =======================================================
setTimeout(() => {
    document.getElementById("hero").scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("opening").style.display = "none";
}, 5000);

// =======================================================
// DREAM BUILDER OUTPUT
// =======================================================
const dreamButton =
document.querySelector("#dream-builder button");

if (dreamButton) {
    dreamButton.addEventListener("click", () => {
        const userIdea =
        document.getElementById("dream-text").value;
        document.getElementById("dream-output").innerText =
        "✨ Your Dream Workspace Idea:\n\n" + userIdea;
    });
}
// =======================================================
// WORKSPACE DATA
// =======================================================

const workspaceData = {

    student: {

        image: "images/student.jpg",

        title: "Student Workspace",

        description:
        "A calm and inspiring study setup designed for focus, learning and productivity.",

        features: [
            "Organized desk layout",
            "Comfortable lighting",
            "Minimal distractions",
            "Productivity focused"
        ]

    },



    developer: {

        image: "images/developer.jpg",

        title: "Developer Workspace",

        description:
        "A modern coding environment with dual monitors and an organized desk for maximum efficiency.",

        features: [
            "Dual-monitor setup",
            "Fast cable management",
            "Ergonomic keyboard and mouse",
            "Coding-friendly lighting"
        ]

    },



    gamer: {

        image: "images/gamer.jpg",

        title: "Gamer Workspace",

        description:
        "An immersive setup with RGB lighting and powerful accessories built for gaming enthusiasts.",

        features: [
            "RGB ambient lighting",
            "High-performance chair",
            "Gaming headset station",
            "Immersive audio setup"
        ]

    },



    creator: {

        image: "images/creator.jpg",

        title: "Creator Workspace",

        description:
        "Perfect for designers, editors and content creators who bring ideas to life.",

        features: [
            "Creative desk layout",
            "Color-rich lighting",
            "Studio-inspired accessories",
            "Flexible editing space"
        ]

    },



    minimal: {

        image: "images/minimal.jpg",

        title: "Minimal Workspace",

        description:
        "Clean, peaceful and distraction-free with a modern minimalist aesthetic.",

        features: [
            "Low-clutter layout",
            "Neutral color palette",
            "Quiet and calm atmosphere",
            "Simple, elegant design"
        ]

    },



    productivity: {

        image: "images/productivity.jpg",

        title: "Productivity Workspace",

        description:
        "A highly organized workspace designed to maximize efficiency and daily workflow.",

        features: [
            "Task-focused layout",
            "Smart storage solutions",
            "Daily workflow optimization",
            "Clear visual organization"
        ]

    }

};
// =======================================================
// WORKSPACE SWITCHING
// =======================================================

const exploreButtons =
document.querySelectorAll(".workspace-card button");

function updateWorkspaceDetails(selectedWorkspace) {

    const details = workspaceData[selectedWorkspace];

    document.getElementById("detail-image").src = details.image;
    document.getElementById("detail-title").innerText = details.title;
    document.getElementById("detail-description").innerText = details.description;

    const featureList = document.getElementById("detail-features");

    featureList.innerHTML = details.features
        .map(feature => `<li>✔ ${feature}</li>`)
        .join("");

}


exploreButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        let selectedWorkspace;


        switch(index){

            case 0:
                selectedWorkspace = "student";
                break;

            case 1:
                selectedWorkspace = "developer";
                break;

            case 2:
                selectedWorkspace = "gamer";
                break;

            case 3:
                selectedWorkspace = "creator";
                break;

            case 4:
                selectedWorkspace = "minimal";
                break;

            case 5:
                selectedWorkspace = "productivity";
                break;

        }

const details =
document.querySelector(".details-container");

details.classList.add("fade-out");

setTimeout(() => {

    updateWorkspaceDetails(selectedWorkspace);

    details.classList.remove("fade-out");

}, 400);


        document.getElementById("workspace-details")
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});
