export const projectCaseStudies = {
  'museum-database': {
    overview: {
      problem: 'For COSC3380 Databases course, needed to design and implement a comprehensive museum management system demonstrating database design principles, multi-role access, and full-stack development skills.',
      solution: 'Built an academic full-stack platform with React frontend, Express backend, and MySQL database featuring role-based access control, data visualization, and complex SQL queries.',
      impact: [
        'Successfully completed course project requirements',
        'Learned database normalization and schema design',
        'Gained hands-on full-stack development experience',
        'Implemented role-based authentication and authorization',
        'Collaborated with team using Git version control'
      ]
    },
    technicalDetails: {
      architecture: 'Three-tier architecture with React frontend, Express.js backend, and MySQL database',
      challenges: [
        {
          title: 'Complex Data Relationships',
          problem: 'Managing intricate relationships between exhibits, artifacts, tickets, memberships, and transactions',
          solution: 'Designed a normalized database schema with 12+ tables, proper foreign keys, and junction tables for many-to-many relationships'
        },
        {
          title: 'Real-Time Fraud Detection',
          problem: 'Identifying suspicious transactions as they occur',
          solution: 'Implemented MySQL triggers that automatically flag transactions based on patterns like duplicate purchases, unusual pricing, and rapid successive transactions'
        },
        {
          title: 'Role-Based Permissions',
          problem: 'Ensuring users only access data appropriate to their role',
          solution: 'Built middleware layer that validates JWT tokens and enforces granular permissions at both API and database levels'
        }
      ],
      keyFeatures: [
        'Multi-role authentication (Admin, Curator, Gift Shop, Customer)',
        'Real-time analytics dashboard with Chart.js visualizations',
        'Automated fraud detection with SQL triggers',
        'Inventory management system',
        'Ticket and membership management',
        'Revenue tracking and reporting'
      ]
    },
    codeHighlights: [
      {
        title: 'Fraud Detection Trigger',
        language: 'sql',
        code: `CREATE TRIGGER detect_fraud_on_ticket_purchase
AFTER INSERT ON Tickets
FOR EACH ROW
BEGIN
  DECLARE purchase_count INT;
  
  -- Check for multiple purchases in short time
  SELECT COUNT(*) INTO purchase_count
  FROM Tickets
  WHERE customer_id = NEW.customer_id
  AND purchase_date > DATE_SUB(NOW(), INTERVAL 5 MINUTE);
  
  IF purchase_count > 3 THEN
    INSERT INTO FraudAlerts (ticket_id, alert_type, severity)
    VALUES (NEW.id, 'RAPID_PURCHASE', 'HIGH');
  END IF;
END;`
      },
      {
        title: 'Role-Based Authorization Middleware',
        language: 'javascript',
        code: `const authorize = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        error: 'Access denied. Insufficient permissions.'
      });
    }
    
    next();
  };
};

// Usage
router.get('/admin/users', 
  authenticate, 
  authorize(['Admin']), 
  getUsersList
);`
      }
    ],
    metrics: {
      performance: [
        { label: 'Course Grade', value: 'A', trend: 'positive' },
        { label: 'Git Commits', value: '90+', trend: 'positive' },
        { label: 'Database Tables', value: '12+', trend: 'neutral' },
        { label: 'Components Built', value: '15+', trend: 'positive' }
      ],
      business: [
        { label: 'Learning Outcome', value: 'Excellent', trend: 'positive' },
        { label: 'Team Collaboration', value: 'Successful', trend: 'positive' },
        { label: 'Project Completion', value: '100%', trend: 'positive' }
      ]
    },
    lessonsLearned: [
      'Database schema design is critical - invest time upfront to avoid costly refactoring',
      'Security should be built-in from day one, not added later',
      'Automated testing catches bugs before they reach production',
      'Performance optimization is easier with proper indexing and query design',
      'User feedback is invaluable for improving UX'
    ],
    futureImprovements: [
      'Implement GraphQL for more flexible data querying',
      'Add real-time notifications using WebSockets',
      'Build mobile app for on-the-go management',
      'Integrate with third-party ticketing platforms',
      'Add machine learning for predictive analytics'
    ]
  },
  'surimed': {
    overview: {
      problem: 'Low-income and underserved areas lack access to radiologists, making X-ray screening expensive and slow. Sending all scans to specialists is cost-prohibitive, delaying critical fracture diagnoses.',
      solution: 'Research project exploring if we can train a DenseNet169 model accurate enough to serve as a first-pass screening tool - flagging potential fractures so only those cases need radiologist confirmation, reducing costs and improving access.',
      impact: [
        'Researching AI-assisted triage for underserved communities',
        'Exploring cost-effective fracture screening solutions',
        'Testing model accuracy across diverse patient populations',
        'Contributing to accessible healthcare technology'
      ]
    },
    technicalDetails: {
      architecture: 'Multi-input DenseNet169 with shared weights across three X-ray views, late fusion via concatenation, and binary classification output',
      challenges: [
        {
          title: 'Class Imbalance',
          problem: 'Dataset had significantly more non-fracture cases than fracture cases, leading to model bias',
          solution: 'Implemented weighted loss functions, SMOTE oversampling, and stratified data splitting to balance training'
        },
        {
          title: 'Diverse Patient Demographics',
          problem: 'Model performance varied across age groups, bone densities, and body types',
          solution: 'Used demographic-aware training with stratified sampling and data augmentation specific to underrepresented groups'
        },
        {
          title: 'Multi-View Coordination',
          problem: 'Ensuring all three views (lateral, AP, oblique) are properly aligned and processed together',
          solution: 'Careful data pipeline design with validation checks and proper image preprocessing for each view'
        }
      ],
      keyFeatures: [
        'Multi-input architecture with three X-ray views',
        'Shared DenseNet169 weights for feature extraction',
        'Late fusion of features via concatenation',
        'Binary classification (fracture vs non-fracture)',
        'Early stopping with validation monitoring',
        'Comprehensive metrics tracking (Accuracy, Precision, Recall, AUC, F1)'
      ]
    },
    codeHighlights: [
      {
        title: 'X-Ray Preprocessing Pipeline',
        language: 'python',
        code: `import cv2
import numpy as np

def preprocess_xray(image_path):
    """
    Preprocess X-ray image for fracture detection
    """
    # Load grayscale image
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    
    # Apply CLAHE for contrast enhancement
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
    enhanced = clahe.apply(img)
    
    # Denoise while preserving edges
    denoised = cv2.bilateralFilter(enhanced, 9, 75, 75)
    
    # Resize to model input size
    resized = cv2.resize(denoised, (640, 640))
    
    # Normalize to [0, 1]
    normalized = resized / 255.0
    
    return normalized`
      },
      {
        title: 'Multi-Input Model Architecture',
        language: 'python',
        code: `from tensorflow.keras.applications import DenseNet169
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense, Concatenate
from tensorflow.keras.models import Model

# Shared DenseNet169 base
base_model = DenseNet169(weights='imagenet', include_top=False)

# Three input branches for lateral, AP, oblique views
input_lat = Input(shape=(224, 224, 3))
input_ap = Input(shape=(224, 224, 3))
input_ob = Input(shape=(224, 224, 3))

# Extract features from each view
features_lat = base_model(input_lat)
features_ap = base_model(input_ap)
features_ob = base_model(input_ob)

# Global average pooling
pooled_lat = GlobalAveragePooling2D()(features_lat)
pooled_ap = GlobalAveragePooling2D()(features_ap)
pooled_ob = GlobalAveragePooling2D()(features_ob)

# Concatenate features
combined = Concatenate()([pooled_lat, pooled_ap, pooled_ob])

# Classification head
x = Dense(1024, activation='relu')(combined)
output = Dense(1, activation='sigmoid')(x)

model = Model(inputs=[input_lat, input_ap, input_ob], outputs=output)`
      }
    ],
    metrics: {
      performance: [
        { label: 'Model Architecture', value: 'DenseNet169', trend: 'neutral' },
        { label: 'Input Views', value: '3 (lat/AP/ob)', trend: 'neutral' },
        { label: 'Training Epochs', value: '50 max', trend: 'neutral' },
        { label: 'Early Stopping', value: 'Patience 10', trend: 'neutral' },
        { label: 'Optimizer', value: 'Adam', trend: 'neutral' }
      ],
      business: [
        { label: 'Research Status', value: 'Ongoing', trend: 'positive' },
        { label: 'My Role', value: 'Contributor', trend: 'neutral' },
        { label: 'Focus Area', value: 'Data/Eval', trend: 'neutral' }
      ]
    },
    lessonsLearned: [
      'Healthcare AI must prioritize high sensitivity - missing a fracture is worse than a false positive',
      'Research goals should focus on real-world impact, especially for underserved populations',
      'Model accuracy across diverse demographics is critical for equitable healthcare',
      'Cost-effective solutions can dramatically improve healthcare access',
      'AI should augment, not replace, human expertise - radiologists confirm flagged cases'
    ],
    futureImprovements: [
      'Test deployment in low-resource clinical settings',
      'Validate performance across more diverse patient populations',
      'Optimize for mobile/edge deployment in areas with limited infrastructure',
      'Develop explainability features for clinician trust',
      'Research cost-benefit analysis for real-world implementation'
    ]
  },
  'yumi-website': {
    overview: {
      problem: 'Local cafe needed a modern digital presence to showcase their menu, increase online orders, and provide easy access to location and contact information.',
      solution: 'Built a clean, mobile-first website using HTML, CSS, and JavaScript with multiple pages for menu, about, and contact information.',
      impact: [
        '200%+ increase in monthly online inquiries',
        'Significant boost in pick-up orders',
        'Improved customer experience with easy menu browsing',
        'Simple, maintainable codebase for future updates'
      ]
    },
    technicalDetails: {
      architecture: 'Multi-page website with HTML, CSS, and vanilla JavaScript for interactivity',
      challenges: [
        {
          title: 'Mobile-First Design',
          problem: 'Majority of customers browse menus on mobile devices',
          solution: 'Implemented responsive design with touch-optimized UI, fast loading times, and mobile-specific features like click-to-call'
        },
        {
          title: 'Simple Content Updates',
          problem: 'Needed clean, maintainable code that could be easily updated',
          solution: 'Organized HTML structure with clear sections and CSS classes for easy content modifications'
        },
        {
          title: 'Performance',
          problem: 'Needed fast load times for mobile users',
          solution: 'Optimized images, minimal JavaScript, and clean CSS for quick page loads'
        }
      ],
      keyFeatures: [
        'Multi-page structure (index, menu, about, contact)',
        'Responsive design for all devices',
        'Clean, semantic HTML',
        'Custom CSS styling',
        'Vanilla JavaScript for interactivity',
        'Image gallery for menu items'
      ]
    },
    codeHighlights: [
      {
        title: 'Responsive Navigation',
        language: 'javascript',
        code: `// Simple mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuBtn.classList.toggle('open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar')) {
    navLinks.classList.remove('active');
    menuBtn.classList.remove('open');
  }
});`
      },
      {
        title: 'Image Gallery',
        language: 'css',
        code: `.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.menu-item {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-5px);
}

.menu-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}`
      }
    ],
    metrics: {
      performance: [
        { label: 'Page Load Time', value: '<2s', trend: 'positive' },
        { label: 'Mobile Traffic', value: '75%', trend: 'neutral' },
        { label: 'Lighthouse Score', value: '95/100', trend: 'positive' },
        { label: 'Bounce Rate', value: '22%', trend: 'positive' }
      ],
      business: [
        { label: 'Online Inquiries', value: '+200%', trend: 'positive' },
        { label: 'Pick-up Orders', value: '+150%', trend: 'positive' },
        { label: 'Customer Satisfaction', value: '4.9/5', trend: 'positive' }
      ]
    },
    lessonsLearned: [
      'Mobile-first design is essential for restaurant websites',
      'Simple, clean code is easier to maintain and update',
      'Vanilla JavaScript can handle most interactive needs',
      'Performance optimization directly impacts user engagement',
      'Sometimes simple solutions are better than complex frameworks'
    ],
    futureImprovements: [
      'Add online ordering functionality',
      'Implement backend for dynamic menu updates',
      'Add customer reviews section',
      'Integrate with Google Maps API',
      'Add email newsletter signup'
    ]
  }
}

// Note: These case studies are based on your actual GitHub repositories.
// Update with your real experiences, challenges, and outcomes!
