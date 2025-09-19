User Stories
🐿️ As a developer, I want the application to use the useState hook so that user interactions (like selecting an image) are smooth and the gallery’s state is managed effectively.
🐿️ As a developer, I want to use the useEffect hook to perform side effects, such as fetching image data from an external API.
🐿️ As a developer, I want to create separate files that return JSX instead of including all JSX within App.jsx so that the code is well-organized, making the app more maintainable and reliable for the user.

🐿️ As a user, I want to see a collection of image thumbnails displayed clearly on the page.
🐿️ As a user, I want to be able to click on an image thumbnail to view a larger version of that image, possibly in a modal or a dedicated view.
🐿️ As a user who relies on assistive technologies, I want images to have descriptive alt text so I can understand their content.
🐿️ As a user who navigates with a keyboard, I want to be able to tab through the interactive elements (like thumbnails and buttons) in a logical order.

Requirements
🎯 Implement the useState hook to manage gallery state (e.g. selected image).
🎯 Use useEffect for initial fetching of images from an external API.
🎯 Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them).
🎯 Use the .map() function to render an array of images dynamically
🎯 Implement functionality to display a larger version of an image when its thumbnail is clicked.
🎯 Ensure all images have meaningful alt text.
🎯 Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).

Required - REFLECTIONS
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?

REFLECTIONS
Started the task by panicking to Manny that I felt like while i understood the react content this week, I hadn't absorbed it at all, and now my brain is drawing too many different pieces together without knowing what to start with it. Manny advised breaking it down into steps, and he helped me through the steps of push a folder from my computer to github - I knew the steps but was getting flustered trying to remember the order. Manny encouraged me to look at the user stories for the brief - not the developer ones - as they would tell me what was required in the project. I completed the set up for the project by following Manny's demo video for the brief, and then started on making my wireframe.
Steph helped me through one of the stretch goals by helping me go through getting the unsplash secret keys and putting them in the .env file. Also started on making the new static site on render. The deploy failed but I'm going to continue setting up the gallery and come back to render later.
Rewatched Manny's demo on state to revise how to write the first task of declaring state. Brain overloaded - understood state but couldnt work out how everything fit together, asked Manny for help then brain vomited my mess of thoughts at him. He prompted me through how we declare state and retreiving the data - for some reason knowing that the API data is stored in objects got completely deleted from the brain. Manny then directed me to move onto the useEffects part of the project. Found Manny's demo on effects and copied the code before refactor to fit the purpose i needed it for.
