const { Course } = require("../modals/courseModals");

// Define a function to add courses
async function ADD_INITIAL_COURSES_IN_DATABASE() {
  try {
    // Create course objects

    const courses = [
      {
        title: 'Introduction to Web Development',
        description: 'This comprehensive course introduces the basics of web development, covering HTML, CSS, and JavaScript. You will learn how to create and style web pages, add interactivity, and build responsive websites. With hands-on projects and exercises, you will gain practical skills essential for a career in web development.',
        amount: 199.99
      },
      {
        title: 'Python for Data Science',
        description: 'Explore the power of Python in data science with this course. From data manipulation and visualization to machine learning and predictive analytics, you will learn how to analyze and interpret data effectively. With real-world case studies and projects, you will master the tools and techniques used by data scientists.',
        amount: 249.99
      },
      {
        title: 'Introduction to Neuroscience',
        description: 'Delve into the fascinating world of neuroscience and discover how the brain works. This course covers topics such as neuron anatomy, neural circuits, synaptic transmission, and brain imaging techniques. Through interactive simulations and experiments, you will gain insight into the complexities of the nervous system.',
        amount: 149.99
      },
      {
        title: 'Mathematics for Engineers',
        description: 'Gain a solid foundation in mathematics essential for engineering applications. From calculus and linear algebra to differential equations and vector analysis, this course covers the mathematical concepts and techniques used in engineering design, analysis, and problem-solving. With practical examples and exercises, you will develop the mathematical skills needed to succeed in engineering.',
        amount: 299.99
      },
      {
        title: 'English Literature: The Classics',
        description: 'Embark on a literary journey through the timeless classics of English literature. From Shakespearean tragedies and Victorian novels to modernist poetry and postcolonial literature, this course explores key works and themes that have shaped the English literary tradition. Through close reading and critical analysis, you will appreciate the richness and diversity of English literature.',
        amount: 179.99
      },
      {
        title: 'Introduction to Political Philosophy',
        description: 'Examine fundamental concepts and theories in political philosophy, from democracy and justice to liberty and equality. This course explores the ideas of prominent political philosophers such as Plato, Hobbes, Locke, Rousseau, and Rawls, offering insights into the nature of power, authority, and governance. Through engaging lectures and discussions, you will critically evaluate different political ideologies and their implications for society.',
        amount: 199.99
      },
      {
        title: 'Fundamentals of Astrophysics',
        description: 'Discover the wonders of the universe with this introductory course in astrophysics. From the formation of stars and galaxies to the mysteries of dark matter and black holes, you will explore the fundamental principles and phenomena of modern astrophysics. With hands-on simulations and astronomical observations, you will gain a deeper understanding of the cosmos.',
        amount: 299.99
      },
      {
        title: 'Introduction to Organic Chemistry',
        description: 'Dive into the world of organic chemistry and explore the structures, reactions, and properties of organic compounds. This course covers topics such as bonding, stereochemistry, functional groups, and reaction mechanisms, providing a solid foundation for understanding organic chemistry principles. With interactive visualizations and problem-solving exercises, you will master the fundamentals of organic chemistry.',
        amount: 199.99
      },
      {
        title: 'Artificial Intelligence and Machine Learning',
        description: 'Explore the cutting-edge fields of artificial intelligence and machine learning in this interdisciplinary course. From neural networks and deep learning to reinforcement learning and natural language processing, you will learn about the latest advancements and applications of AI and ML technologies. With hands-on projects and case studies, you will develop practical skills for building intelligent systems.',
        amount: 349.99
      },
      {
        title: 'History of Ancient Civilizations',
        description: 'Journey back in time to explore the ancient civilizations that laid the foundation for modern society. From Mesopotamia and Egypt to Greece and Rome, this course traces the rise and fall of ancient cultures, examining their achievements, innovations, and legacies. With archaeological discoveries and historical narratives, you will uncover the mysteries of the ancient world.',
        amount: 249.99
      },
      {
        title: 'Introduction to Public Health',
        description: 'Gain insight into the field of public health and its impact on global well-being. This course explores key concepts such as epidemiology, health policy, environmental health, and social determinants of health. With case studies and real-world examples, you will learn about public health interventions and strategies for promoting population health and preventing disease.',
        amount: 199.99
      },
      {
        title: 'Fundamentals of Quantum Mechanics',
        description: 'Delve into the fascinating realm of quantum mechanics and unravel the mysteries of the quantum world. From wave-particle duality and superposition to quantum entanglement and quantum computing, this course introduces the fundamental principles and phenomena of quantum physics. With mathematical derivations and thought experiments, you will explore the counterintuitive nature of quantum mechanics.',
        amount: 399.99
      },
      {
        title: 'Introduction to Financial Markets',
        description: 'Explore the dynamic world of financial markets and learn how they function. This course covers topics such as stocks, bonds, commodities, and derivatives, as well as investment strategies and portfolio management techniques. With real-time market data and trading simulations, you will gain practical insights into the workings of global financial markets.',
        amount: 299.99
      },
      {
        title: 'Creative Writing Workshop',
        description: 'Unlock your creativity and hone your writing skills with this interactive workshop. From storytelling and character development to narrative structure and style, you will explore the craft of writing across various genres and mediums. With guided exercises and peer feedback, you will unleash your imagination and express yourself through the written word.',
        amount: 149.99
      },
      {
        title: 'Fundamentals of Biotechnology',
        description: 'Discover the principles and applications of biotechnology in this interdisciplinary course. From genetic engineering and bioprocessing to bioinformatics and synthetic biology, you will learn about the tools and techniques used in modern biotechnology research and industry. With hands-on experiments and case studies, you will explore the ethical, social, and environmental implications of biotechnological advancements.',
        amount: 249.99
      },
      {
        title: 'Digital Marketing Essentials',
        description: 'Learn the fundamentals of digital marketing and develop strategies for online success. From search engine optimization and social media marketing to email campaigns and web analytics, this course covers the essential tools and techniques used in digital marketing. With practical assignments and industry insights, you will gain the skills needed to thrive in the digital economy.',
        amount: 199.99
      },
      {
        title: 'Introduction to Environmental Science',
        description: 'Explore the interdisciplinary field of environmental science and its role in addressing global environmental challenges. From climate change and biodiversity loss to pollution and sustainable development, this course examines the complex interactions between human societies and the natural world. With fieldwork and laboratory experiments, you will investigate environmental issues and solutions.',
        amount: 179.99
      },

    ];


    const insertedCourses = await Course.insertMany(courses);

    console.log('Initial Courses added');
  } catch (error) {
    console.error('Error adding courses:', error);
  }
}

// Call the function to add courses
module.exports = { ADD_INITIAL_COURSES_IN_DATABASE }
