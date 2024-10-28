
# **3D MacBook Pro Website – Interactive Model with Scroll and Drag**

## **Project Overview**

This project showcases a **3D interactive model** of a **MacBook Pro**. Users can engage with the model using two key interactions:

1. **Scroll Interaction**: The MacBook’s lid opens and closes as the user scrolls.
2. **Drag Interaction**: Users can rotate the model, giving a **360-degree view** of the MacBook Pro.

This dynamic project leverages **React Three Fiber** for handling 3D elements and interactions, while the 3D model itself was crafted using **Blender**. The website is optimized for different screen sizes to ensure a seamless user experience.

---

## **Technologies Used**

- **React.js**: Frontend framework for building the interactive web interface.
- **React Three Fiber**: A React renderer for Three.js to manage 3D elements and interactions.
- **Three.js**: Library used for rendering 3D models and animations.
- **Blender**: 3D modeling software used to design the MacBook Pro.
- **GSAP (optional)**: Can be integrated to enhance animation smoothness.

---

## **Project Features**

- **Interactive Scroll Animation**:

  - The MacBook’s lid opens and closes smoothly as the user scrolls.
  - Enhances engagement through natural interaction.
- **360-Degree Drag View**:

  - Users can rotate the MacBook by dragging, giving them a complete view from any angle.
- **Responsive Design**:

  - Optimized for various screen sizes, ensuring a smooth experience across devices.
- **3D Model by Blender**:

  - Created with attention to detail by **Akhlaq Uddin**, then optimized for the web using **Three.js**.

---

## **Implementation Details**

- **Rendering with React Three Fiber**:

  - The MacBook model is rendered using React Three Fiber within a React environment.
  - **Three.js** handles loading and lighting to ensure the model is well-illuminated from all angles.
- **Scroll Animation Implementation**:

  - The **scroll event listener** is implemented using the `useEffect` hook in React to trigger lid animations based on scroll position.
  - **GSAP (GreenSock Animation Platform)** can be integrated to further enhance the transition.
- **Drag Interaction**:

  - The **`useDragControls`** from React Three Fiber allows users to rotate the model with drag movements, offering full interaction.
- **Model Loading**:

  - The MacBook model was exported from Blender in a **.glb or .obj** format.
  - **GLTFLoader** from Three.js loads the model efficiently for web rendering.

---

## **Challenges and Learnings**

- **Performance Optimization**:

  - Optimized the model by reducing complexity and ensuring efficient asset loading to prevent lag.
- **3D Interaction Management**:

  - Handling both **scroll and drag interactions** required careful coordination to maintain smooth performance.
- **Blender to Three.js Workflow**:

  - Exporting models from **Blender** and ensuring compatibility with **Three.js** was a key challenge.

---

## **Future Improvements**

- **Enhanced Animations**:

  - Adding more animations like **keyboard lights** or **screen reflections** to enhance realism.
- **Additional Interactivity**:

  - Implementing features like **hover effects** or **clickable apps** on the MacBook’s screen.
- **AR/VR Integration**:

  - Extending the project to include **augmented reality (AR)** or **virtual reality (VR)** support for a more immersive experience.

---

## **Team**

- **Aadil Khan**:Responsible for **website development**, integrating React Three Fiber, and building interactive features.
- **Akhlaq Uddin**:
  Designed the **3D MacBook Pro model** using Blender and ensured its optimization for web rendering.

---

## **How to Run the Project**

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the project in the browser at:
   ```
   http://localhost:3000
   ```

---

## **License**

This project is open-source and licensed under the **MIT License**.
