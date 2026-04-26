const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare report",
        taskDescription: "Prepare a detailed monthly sales report by collecting data from all regions, analyzing trends, and presenting insights using charts and graphs in Excel or Power BI. Ensure accuracy and highlight key performance metrics.",
        taskDate: "2026-04-15",
        category: "Reports"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email client",
        taskDescription: "Send a detailed project update email to the client outlining current progress, completed tasks, pending work, and upcoming milestones. Ensure the message is clear, professional, and includes any necessary attachments or reports.",
        taskDate: "2026-04-10",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix bug",
        taskDescription: "Resolve the login issue by identifying the root cause in the authentication system, debugging API calls, validating user credentials, and fixing any frontend or backend errors. Ensure proper testing after implementation.",
        taskDate: "2026-04-12",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    firstName: "Diya",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design UI",
        taskDescription: "Create a responsive homepage layout by designing wireframes, structuring sections (header, hero, content, footer), and implementing the UI using modern design principles and CSS frameworks.",
        taskDate: "2026-04-16",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update logo",
        taskDescription: "Create a responsive homepage layout by designing wireframes, structuring sections (header, hero, content, footer), and implementing the UI using modern design principles and CSS frameworks.",
        taskDate: "2026-04-08",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client feedback",
        taskDescription: "Collect feedback from users by conducting surveys, interviews, or usability tests, and analyze responses to identify improvements and user satisfaction levels.",
        taskDate: "2026-04-11",
        category: "Research"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database backup",
        taskDescription: "Backup the production database by securely exporting data, verifying backup integrity, and storing it in a safe location to ensure data recovery in case of failure.",
        taskDate: "2026-04-15",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server update",
        taskDescription: "Update server packages by installing the latest stable versions, applying security patches, and ensuring compatibility with existing services while minimizing downtime.",
        taskDate: "2026-04-09",
        category: "IT"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Monitor logs",
        taskDescription: "Check system logs daily to monitor application performance, identify errors or warnings, and take corrective actions to prevent potential issues.",
        taskDate: "2026-04-14",
        category: "Monitoring"
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write documentation",
        taskDescription: "Prepare API documentation by detailing endpoints, request and response formats, authentication methods, and usage examples to help developers integrate effectively.",
        taskDate: "2026-04-17",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review code",
        taskDescription: "Review pull requests by analyzing code quality, ensuring adherence to coding standards, identifying bugs or issues, and providing constructive feedback before approval.",
        taskDate: "2026-04-10",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Test feature",
        taskDescription: "Test the new login feature by verifying authentication flow, validating user inputs, and ensuring proper error handling and security measures are in place.",
        taskDate: "2026-04-13",
        category: "Testing"
      }
    ]
  },
  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Market analysis",
        taskDescription: "Analyze competitors by researching their products, pricing strategies, market positioning, and strengths and weaknesses to identify opportunities for improvement.",
        taskDate: "2026-04-18",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Ad campaign",
        taskDescription: "Launch social media ads by creating targeted campaigns, selecting appropriate audience segments, setting budgets, and monitoring performance to maximize engagement and conversions.",
        taskDate: "2026-04-07",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "SEO update",
        taskDescription: "Improve website SEO by optimizing on-page elements, enhancing keyword usage, improving site speed, and building quality backlinks to increase search engine rankings.",
        taskDate: "2026-04-14",
        category: "SEO"
      }
    ]
  }
];
const admin= [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
];
export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees=JSON.parse(localStorage.getItem('employees'));
    const admin=JSON.parse(localStorage.getItem('admin'));
    return {employees,admin}
    
}
