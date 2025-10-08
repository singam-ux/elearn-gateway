import courseReact from '@/assets/course-react.jpg';
import courseAdvanced from '@/assets/course-advanced.jpg';
import courseRouter from '@/assets/course-router.jpg';
import courseRedux from '@/assets/course-redux.jpg';
import courseTypescript from '@/assets/course-typescript.jpg';
import courseTesting from '@/assets/course-testing.jpg';

export const courses = [
  {
    id: 1,
    title: "React JS Fundamentals",
    description: "Master the basics of React including components, props, state, and hooks.",
    duration: "6 weeks",
    lessons: 24,
    image: courseReact
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    description: "Learn advanced React patterns, performance optimization, and best practices.",
    duration: "4 weeks",
    lessons: 16,
    image: courseAdvanced
  },
  {
    id: 3,
    title: "React Router & Navigation",
    description: "Deep dive into React Router, protected routes, and navigation strategies.",
    duration: "3 weeks",
    lessons: 12,
    image: courseRouter
  },
  {
    id: 4,
    title: "State Management with Redux",
    description: "Complete guide to Redux, Redux Toolkit, and state management patterns.",
    duration: "5 weeks",
    lessons: 20,
    image: courseRedux
  },
  {
    id: 5,
    title: "TypeScript for React",
    description: "Learn TypeScript fundamentals and how to use it effectively with React.",
    duration: "4 weeks",
    lessons: 18,
    image: courseTypescript
  },
  {
    id: 6,
    title: "Testing React Applications",
    description: "Master testing with Jest, React Testing Library, and E2E testing tools.",
    duration: "3 weeks",
    lessons: 14,
    image: courseTesting
  }
];
