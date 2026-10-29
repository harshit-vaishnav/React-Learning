# React Profile Cards

A responsive profile card website built using React.js and CSS. The project displays developer and designer profiles in a grid layout, including their profile images, hourly rates, skills, company details, and availability status.

## 📸 Project Overview

The application displays multiple profile cards inspired by the Hubstaff Directory design.

Each card contains:

* Profile image
* Name and job title
* Hourly rate
* Company or freelancer information
* Skills and additional skill count
* Profile description
* Availability status
* View Profile button

## 🛠️ Technologies Used

* React.js — Building reusable UI components
* JavaScript — Managing profile data and rendering lists
* CSS3 — Styling, grid layout, and responsive design
* Lucide React — Icons

## 📂 Project Structure

```text
project-folder/
│
├── public/
│
├── src/
│   ├── components/
│   │   |
│   │   └── Card.jsx
│   │
│   ├── data.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```



## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/harshit-vaishnav/React-Learning
```

### 2. Open the project folder

```bash
cd YOUR_PROJECT_FOLDER
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal to view the application.

## 🧠 How the Project Works

### 1. Profile Data — `data.js`

All profile information is stored in an array of objects.

Each object represents one profile and contains properties such as:

* `id` — Unique profile identifier
* `name` — Profile name
* `image` — Profile image URL
* `price` — Hourly rate
* `job` — Job title
* `company` — Company or freelancer name
* `skills` — Array of skills
* `description` — Profile description
* `available` — Whether the profile is available
* `freelancer` — Whether the profile is a freelancer

This approach keeps the data separate from the UI.

### 2. Rendering Multiple Cards — `App.jsx`

The `App` component imports the profile data and uses JavaScript's `map()` method to render a card for every profile.

Each profile object is passed to the `Card` component through props.

Example:

```jsx
   {users.map(function(user,idx){
         return <div key = {idx}>
          <Card user = {user}></Card>
          </div> 
       })}
```

**Concepts learned:** Array of objects, `map()`, props, reusable components, and React's `key` prop.

### 3. Reusable Card Component — `Card.jsx`

The `Card` component receives a profile object through props.

```jsx
const Card = ({ user }) => {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>{user.job}</p>
      <p>${user.price}/hr</p>
    </div>
  );
};
```

The actual component contains the complete profile card UI.

Since the same component is reused for every profile, there is no need to write separate JSX for each card.

### 4. Conditional Rendering

The company and freelancer sections display different icons and colors based on the `freelancer` property.

Example:

```jsx
{user.freelancer ? (
  <UserRound size={14} />
) : (
  <Building2 size={14} />
)}
```

The availability badge is displayed only when the profile is available.

```jsx
{user.available && (
  <span className="available">Available</span>
)}
```

**Concepts learned:** Ternary operator, conditional rendering, and logical AND (`&&`).

### 5. Rendering Skills

Skills are stored in an array and displayed using `map()`.

```jsx
<div className="skills">
  {user.skills.map((skill, index) => (
    <span key={index}>{skill}</span>
  ))}
</div>
```

This makes it easy to change the skills of any profile directly in the data file.



### 6. Styling — `App.css`

CSS is used to style the profile cards, skills, icons, and buttons.

The CSS Grid layout displays three cards per row on desktop, two on tablet-sized screens, and one on smaller mobile screens.

Media queries make the layout responsive.

## 📚 Key Learnings

While building this project, I practised:

* Creating reusable React components
* Passing data using props
* Working with arrays of objects
* Rendering lists using `map()`
* Using conditional rendering
* Integrating icons using Lucide React
* Styling components with CSS
* Building responsive layouts using CSS Grid
* Organizing a React project into separate files

## 🚀 Future Improvements

* Add working profile detail pages
* Implement profile search
* Add filtering by skills and availability
* Make the navigation links functional
* Fetch profile data from an API
* Add sorting by hourly rate

## 👨‍💻 Author

Created as a React.js learning project to practise component-based development, props, data-driven rendering, and responsive CSS.
