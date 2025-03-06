Billy Hutchcraft III 
Project Overview
In this project, you will begin building a simple using React. This will help you practice using React components, props, and state.
You’ll design the layout without using frameworks like Bootstrap, focusing on custom styling.

✨ Learning Objectives
By the end of this project, you will be able to:
Organize code using React components.
Manage state using the useState hook.
Pass and manage data through props between components.
You will not be using event handling yet, but this will give you a solid foundation for when it is introduced later.


Project Setup Instructions
1. Set up the React app:
Open your terminal and create a new React project: npx create-vite ecom-product-app --template react
Navigate into the project folder: cd ecom-product-app
2. Plan Your Components:
App Component: The main wrapper for the app.
ProductList Component: Displays the list of products.
ProductItem Component: Represents an individual product with details.


1️⃣App Component (Parent Component)
This is the main component where you will manage the state for the list of products and pass this data as props to child components.

Tasks for students:
Create a state that holds an array of products (each product can have attributes like id, name, price, and description).
Pass the list of products as a prop to the ProductList component.
Style the main structure of the app using CSS.
2️⃣ ProductList ComponentThis component will receive the list of products from the App component as a prop and will map through them to display each product.

Tasks for students:
Create a component that takes the product list as a prop and maps through it.
For each product, render a ProductItem component.
Apply custom CSS to style the product list.
3️⃣ ProductItem ComponentThis component represents a single product. It will receive the individual product data as props from the ProductList component.

Tasks for students:
Display the product's name, price, and description.
Style each product item using custom CSS to differentiate each product visually.
Use props to pass down the product details to this component.
Testing Your App
Test the following functionalities:
Display a list of products with their names, prices, and descriptions.
Ensure your components are using state and props effectively.
Ensure your app layout and products are styled as expected.
Optional Features (Bonus Challenges)
If you feel confident, try adding the following features:
Add a new attribute to each product (like "category") and filter products based on the category.
Add images to each product and display them in the ProductItem component.
Final Checklist
Before submitting your project, make sure you have:
A list of products displayed on the page.
Components using state and props correctly.
CSS applied for styling.
