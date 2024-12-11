# **The Alter Office Assignment Reference Document**

## **1. Project Overview**

You are tasked with building a dynamic social media feed application with essential features like user authentication, multi-media posts, infinite scrolling, and video playback functionality. The application should focus on a smooth, responsive user experience, ensuring the mobile and tablet versions align for consistency.

---

### **2. Features Breakdown**

### **User Authentication**

- Implement user registration and login functionality using **Firebase Authentication**.
    - Support **Google login** for ease of registration.
    - Ensure that once authenticated, users can access their personalized feed, post updates, and manage their profiles.

### **Social Media Feed**

- Create a feed where posts are displayed dynamically.
    - Each post should include:
        - Text
        - Images (with multi-image support)
        - Videos
        - Timestamps
    - Users should be able to create posts via a form that includes the ability to:
        - Capture photos using the camera.
        - Add URLs.
        - Select images from the gallery.

### **Infinite Scrolling**

- Implement **infinite scrolling** to dynamically load posts as the user scrolls down.
    - Fetch **20 posts** per scroll event.
    - Use **Firebase Firestore** (or Supabase) for database storage and retrieval, ensuring that posts load seamlessly without interruptions.

### **User Profiles**

- Allow users to view and edit their profiles.
    - Profile should include:
        - Name
        - Bio
        - Profile picture
        - "My Posts" section showing all posts by the user
- Provide an easy-to-use interface for users to edit their personal information.

### **Video Handling**

- Implement **autoplay** and **pause** functionality for videos within posts:
    - Automatically play videos when they come into view.
    - Pause the video when it exits the viewport.

### **Share Option**

- Implement a share functionality that allows users to:
    - Share posts and content with other applications (e.g., social media or messaging apps).

### **Performance Optimization**

- Focus on **optimizing performance** for faster loading and smooth interaction:
    - Minimize image and video file sizes for faster loading.
    - Use **efficient data fetching** strategies like pagination and batch loading.
    - Optimize asset loading (e.g., lazy load images and videos).
    - Ensure smooth transitions between feed updates and post creation.

---

### **3. Technical Requirements**

- **Languages & Frameworks**:
    - Use **React.js** for building the frontend.
    - Use **Firebase Firestore** for storing and retrieving posts and user data.
- **State Management**:
    - Use **React's Context API**, **Redux**, or **Zustand** to manage the global state of the application.
- **Styling**:
    - Use **Tailwind CSS**, **Styled Components**, or other CSS Modules for a responsive, user-friendly interface.
- **API Integration**:
    - Integrate Firebase Authentication for user login and Google login.
    - Use Firestore to store and fetch posts, including images and videos.
- **Version Control**:
    - Use **Git** for version control. Commit code frequently with meaningful commit messages.

---

### **4. Design References**

- Figma Design Link: [Figma Design](https://www.figma.com/design/b60fWxRIqDqj0tZq3EU0rL/Build-an-Engaging-Social-Media-Feed-with-Interactive-Features?node-id=0-1&t=Sg1FoyVKP7L7QN4v-1)
- Figma Download Link: [Figma Download](https://drive.google.com/file/d/19S9TW3wiEISTiMpSdRqEl2LVGakWHhDm/view?usp=sharing)

These links will provide the necessary design details for your project.

---

### **5. Deliverables**

- **GitHub Repository**: Share a public repository link for the project’s code.
- **Hosted Demo Link**: Deploy the application on a platform like **Vercel**, **Netlify**, or any other platform of your choice. Share the live demo link.

---

### **6. Judging Criteria**

- **Functionality**:
    - The application should cover all the specified requirements (e.g., Firebase Authentication, user profiles, infinite scrolling, etc.).
- **Code Quality**:
    - Code should be modular, well-organized, and maintainable.
    - The project should demonstrate a clean commit history with detailed commit messages.
- **User Experience**:
    - The user interface should be intuitive and user-friendly, with a focus on mobile-first design and smooth interactions.
- **Error Handling**:
    - Proper error handling for edge cases (e.g., failed login, missing posts, slow network).

---

### **7. Suggested Workflow**

1. **Initial Setup**:
    - Create the basic structure of your React app using **create-react-app** or a similar tool.
    - Install dependencies: `firebase`, `react-router-dom`, `redux` (if using Redux), `tailwindcss` (if using Tailwind), etc.
2. **Authentication Setup**:
    - Set up Firebase Authentication and implement Google login.
3. **Firestore Integration**:
    - Set up Firestore and integrate data fetching for posts.
4. **User Profile Implementation**:
    - Create a user profile page and integrate Firestore to display/edit user data.
5. **Post Feed and Infinite Scrolling**:
    - Build the social media feed, implement infinite scrolling, and handle media uploads.
6. **Video Handling**:
    - Implement autoplay and pause functionality for videos in the feed.
7. **Performance Optimization**:
    - Focus on optimizing the feed, images, and other assets.
8. **Testing**:
    - Test the app thoroughly, ensuring that all features work as expected across devices.
9. **Final Touches**:
    - Refine the UI, fix bugs, and ensure smooth deployment on hosting platforms.
