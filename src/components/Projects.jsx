import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiLayout, FiSmartphone, FiDatabase, FiArrowRight, FiPieChart } from 'react-icons/fi'
import ProjectModal from './ProjectModal'

const projects = [
  {
    id: 'workflow', title: 'Workflow Management System', subtitle: 'MERN Stack • Full Stack Project',
    description: 'Developed a MERN Stack Workflow Management System with role-based Admin and User dashboards, enabling managers to assign tasks and employees to track and manage their assigned work.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs'],
    icon: FiDatabase, color: '#0ea5e9', gradient: 'from-sky-400/20 to-blue-500/20',
    image: '/projects/MERN Project.jpeg',
    github: 'https://github.com/Sathiya05/Workflow-Management-System--MERN',
    features: ['Role-based dashboards (Admin & User)', 'Task assignment & tracking system', 'JWT authentication & authorization', 'Real-time status updates', 'RESTful API architecture', 'Responsive design across devices'],
    detailedDescription: [
      'Designed the database schema using MongoDB with Mongoose ODM, defining collections for users, tasks, and workflows with proper relationships and validation.',
      'Built a secure REST API with Node.js and Express.js implementing JWT-based authentication with role-based access control for Admin and Employee roles.',
      'Developed the Admin dashboard in React allowing managers to create, assign, and monitor tasks with priority levels, deadlines, and status tracking.',
      'Created the Employee dashboard showing assigned tasks with filters, sorting, and the ability to update task status in real-time.',
      'Implemented responsive UI with Tailwind CSS ensuring seamless experience across desktop, tablet, and mobile devices.',
      'Deployed the full stack application with proper error handling, input validation, and secure data transmission.',
    ],
    challenges: 'One of the main challenges was implementing real-time task synchronization between admin and employee dashboards. Solved this by polling with optimistic updates and proper state management to keep both views consistent without a WebSocket dependency.',
  },
  {
    id: 'frontend-live', title: 'Frontend Live Projects', subtitle: 'Production-Ready Web Interfaces',
    description: 'Developed responsive, production-style web interfaces with HTMl, Tailwind CSS, Javascript and modern layouts. Ensured cross-browser, cross-device responsiveness following UI/UX best practices.',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'HTML', 'CSS'],
    icon: FiCode, color: '#6366f1', gradient: 'from-indigo-400/20 to-purple-500/20',
        image: 'public/projects/frontend.png',
    github: 'https://github.com/Sathiya05/Kombucha-Brewery',

    features: ['Reusable React component library', 'REST API integration', 'Cross-browser compatibility', 'Mobile-first responsive design', 'Performance optimized rendering', 'Modern UI/UX patterns'],
    detailedDescription: [
      'Analyzed client requirements and translated wireframes into pixel-perfect, responsive React components with reusable patterns.',
      'Implemented component-based architecture with props, state management, and custom hooks for clean, maintainable code.',
      'Integrated RESTful APIs using fetch/axios with proper error handling, loading states, and data caching strategies.',
      'Applied Tailwind CSS utility-first approach for rapid, consistent styling across all viewport sizes.',
      'Conducted cross-browser testing and fixed compatibility issues for Chrome, Firefox, Safari, and Edge.',
      'Optimized performance through lazy loading, code splitting, and efficient re-rendering patterns.',
    ],
    challenges: 'Building truly reusable components that work across different client projects while maintaining design consistency was challenging. Solved this by creating a well-documented component architecture with configurable props and a shared design token system.',
  },
  {
    id: 'ecommerce-ui', title: 'E-Commerce & Landing Pages', subtitle: 'UI/UX Design — Figma',
    description: 'Designed and prototyped responsive interfaces including an e-commerce website, food-ordering app, movie-ticket booking app, and product landing pages with consistent, conversion-focused design systems.',
    tags: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems', 'Responsive'],
    icon: FiLayout, color: '#8b5cf6', gradient: 'from-purple-400/20 to-pink-500/20',
            image: '/projects/landing.png',
    github: 'https://www.behance.net/sathiyapriyas1',

    features: ['E-commerce website design', 'Food-ordering app UI', 'Movie-ticket booking app', 'Product landing pages', 'Consistent design system', 'High-fidelity prototypes'],
    detailedDescription: [
      'Conducted user research and competitive analysis to understand target audiences and identify opportunities for each project.',
      'Created user personas, journey maps, and information architecture to guide the design decisions.',
      'Designed wireframes and low-fidelity prototypes to validate layout and navigation flows before committing to high-fidelity designs.',
      'Built a reusable design system in Figma with consistent typography, color palette, spacing, and component library.',
      'Developed high-fidelity mockups for the e-commerce site with product listing, cart, and checkout flows.',
      'Prototyped interactive experiences for the food-ordering app and movie-ticket booking app with realistic user flows.',
    ],
    challenges: "Creating a unified design system that works across four different products while maintaining each product's unique identity required careful planning.",
  },
  {
    id: 'mindscape', title: 'MINDSCAPE', subtitle: 'AI-Powered Mental Health Analysis • Final Year Project',
    description: 'Built an AI/ML system analyzing social-media activity and wearable-device data to detect behavioral patterns and surface mental-health insights.',
    tags: ['Python', 'AI/ML', 'Data Analysis', 'Pandas', 'Scikit-learn'],
    icon: FiSmartphone, color: '#06b6d4', gradient: 'from-cyan-400/20 to-teal-500/20',
    image: '/projects/Minscape.png',
    github: 'https://github.com/Sathiya05/Mindscape-Ai',

    features: ['Social media activity analysis', 'Wearable device data processing', 'Behavioral pattern detection', 'AI/ML prediction models', 'Data visualization dashboard', 'Mental health insights'],
    detailedDescription: [
      'Gathered and preprocessed social media activity data and wearable device metrics, handling missing values and normalizing features.',
      'Explored multiple ML algorithms including Random Forest, SVM, and Neural Networks to identify behavioral patterns indicating mental health conditions.',
      'Built feature engineering pipelines to extract meaningful signals from raw social media interactions and biometric data.',
      'Developed a Python-based analysis framework using Pandas, NumPy, and Scikit-learn for data processing and model training.',
      'Created visualization dashboards to present mental health insights in an accessible, interpretable format for end users.',
      'Achieved promising accuracy in pattern detection and presented the final project at National Conference TECHSYNERGY 2025.',
    ],
    challenges: 'The biggest challenge was obtaining clean, labeled training data for mental health prediction. Solved by combining multiple public datasets, applying data augmentation techniques, and using transfer learning to overcome data scarcity.',
  },
  {
    id: 'data-analytics', title: 'Coffee Shop Sales & Inventory Analysis', subtitle: 'Data Analytics • Power BI',
    description: 'Built an interactive Power BI dashboard analyzing coffee shop sales trends, inventory levels, and revenue patterns to deliver actionable business insights through data-driven visual storytelling.',
    tags: ['Power BI', 'Data Analysis', 'DAX', 'Data Visualization', 'Business Intelligence'],
    icon: FiPieChart, color: '#f59e0b', gradient: 'from-amber-400/20 to-orange-500/20',
                image: '/projects/Dashboard PowerBI.png',

    features: ['Interactive sales dashboard', 'Inventory tracking & alerts', 'Revenue trend analysis', 'DAX-powered KPI metrics', 'Date-based drill-down filters', 'Actionable business insights'],
    detailedDescription: [
      'Cleaned and transformed raw coffee shop sales and inventory data using Power Query, handling missing values, standardizing formats, and merging datasets.',
      'Designed an interactive dashboard with dynamic slicers, drill-through pages, and date hierarchies for intuitive exploration of sales and inventory metrics.',
      'Developed DAX measures for key performance indicators including total revenue, average order value, peak sales hours, and inventory turnover rate.',
      'Created visualizations including bar charts, line graphs, donut charts, and KPI cards to highlight sales trends, top-selling products, and stock levels.',
      'Identified seasonal demand patterns and slow-moving inventory items, enabling data-driven restocking decisions and waste reduction.',
      'Delivered a polished, stakeholder-ready report with clear annotations and a logical layout for non-technical decision-makers.',
    ],
    challenges: 'The main challenge was structuring large volumes of transactional data into a coherent star schema for efficient DAX calculations. Solved by carefully designing the data model with proper relationships and optimizing measures to ensure fast dashboard rendering.',
  },
  {
    id: 'wordpress', title: 'WordPress Website', subtitle: 'WordPress • Elementor Page Builder',
    description: 'Designed and built a professional WordPress website using Elementor drag-and-drop page builder, creating responsive layouts and a fully functional content-managed site without hand-coding.',
    tags: ['WordPress', 'Elementor', 'HTML', 'CSS', 'MySQL', 'Canva'],
    icon: FiLayout, color: '#21759b', gradient: 'from-sky-400/20 to-indigo-500/20',
    image: 'public/projects/wordpress.png',
    github: '',
    features: ['Drag-and-drop page design with Elementor', 'Pre-built widget & template customization', 'Responsive layout adjustments', 'Theme customization via Elementor settings', 'Plugin integration for extended functionality', 'SEO & performance optimization'],
    detailedDescription: [
      'Designed the complete website layout using Elementor\'s visual drag-and-drop interface, building custom sections, columns, and content blocks without writing code.',
      'Leveraged Elementor\'s pre-built widgets such as image carousels, icon boxes, testimonials, and contact forms to rapidly assemble professional page designs.',
      'Customized the WordPress theme appearance through Elementor\'s theme builder, setting up headers, footers, and archive templates visually.',
      'Built responsive versions for tablet and mobile views using Elementor\'s responsive editing mode, adjusting padding, margins, and visibility per breakpoint.',
      'Integrated essential WordPress plugins including Yoast SEO, WPForms, and caching tools to enhance site functionality and search visibility.',
      'Applied styling refinements such as custom fonts, color palettes, hover animations, and spacing adjustments directly within Elementor\'s design panel.',
    ],
    challenges: 'The main challenge was achieving a custom, non-template look while staying within Elementor\'s visual editor. Solved by creatively combining nested sections, custom CSS overrides in Elementor, and carefully layered widget arrangements to produce a unique design.',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProject = (p) => { setSelectedProject(p); setIsModalOpen(true); document.body.style.overflow = 'hidden' }
  const closeProject = () => { setIsModalOpen(false); setSelectedProject(null); document.body.style.overflow = 'auto' }

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Projects</h2>
          <p className="c-muted mt-6 max-w-xl mx-auto">From MERN stack applications to AI/ML systems — click any project to explore the details</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div key={project.id} className="group glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }} onClick={() => openProject(project)}>

              <div className={`relative ${project.image ? '' : 'h-44'} bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.3 }}>
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center glass-card"
                        style={{ backgroundColor: `${project.color}15`, border: `1px solid ${project.color}30` }}>
                        <project.icon size={36} style={{ color: project.color }} />
                      </div>
                    </motion.div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)]/60 to-transparent" />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: project.color }}>{project.subtitle}</p>
                <h3 className="text-xl font-bold c-heading mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="c-body text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map(tag => (
                    <span key={tag} className="px-2.5 py-1 c-tag text-xs rounded-md font-medium">{tag}</span>
                  ))}
                  {project.tags.length > 4 && <span className="px-2.5 py-1 c-tag text-xs rounded-md">+{project.tags.length - 4}</span>}
                </div>
                <div className="flex items-center justify-between pt-3 border-t c-border-subtle">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs c-muted hover:text-primary transition-colors truncate max-w-[60%]">
                      {project.github.includes('behance.net') ? 'View on Behance' : 'View on GitHub'}
                    </a>
                  ) : (
                    <span className="text-xs c-muted">No repo available</span>
                  )}
                  <div className="flex items-center gap-1.5 text-xs font-medium transition-all duration-300 group-hover:gap-2.5" style={{ color: project.color }}>
                    View Details <FiArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeProject} />
    </section>
  )
}
