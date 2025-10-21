export const blogPosts = [
  {
    id: 1,
    title: 'Building a Museum Database System for COSC3380',
    slug: 'museum-database-project',
    date: '2024-10-15',
    readTime: '6 min read',
    category: 'Full Stack',
    excerpt: 'Academic database project building a museum management system with React, Express, and MySQL. Learning about multi-role access, complex queries, and full-stack development.',
    image: '/blog/museum-platform.jpg',
    tags: ['React', 'Express', 'MySQL', 'Academic'],
    content: `
# Building a Museum Database System for COSC3380

## The Academic Project

For my COSC3380 Databases course at University of Houston, I built a comprehensive museum management system to learn about database design, full-stack development, and role-based access control.

## Technical Architecture

### Frontend
- **React.js** for a dynamic, component-based UI
- **Chart.js** for data visualization
- Role-specific dashboards with conditional rendering

### Backend
- **Express.js** REST API
- JWT authentication for secure multi-role access
- Custom middleware for role-based authorization

### Database
- **MySQL** with complex relational schema
- Custom SQL triggers for fraud detection
- Optimized queries for real-time data editing

## Key Features

### 1. Multi-Role Access Control
Implemented four distinct user roles:
- **Admin**: Full system access and user management
- **Curator**: Exhibit and artifact management
- **Gift Shop**: Inventory and sales tracking
- **Customer**: Ticket purchasing and membership

### 2. Fraud Detection System
Created custom SQL triggers that automatically flag suspicious transactions:
- Multiple ticket purchases from same IP
- Unusual pricing patterns
- Duplicate membership registrations

### 3. Real-Time Analytics Dashboard
Built interactive dashboards showing:
- Daily visitor statistics
- Revenue trends
- Popular exhibits
- Inventory levels

## Challenges & Solutions

### Challenge 1: Complex Data Relationships
**Problem**: Managing relationships between exhibits, artifacts, tickets, and memberships.
**Solution**: Designed a normalized database schema with proper foreign keys and junction tables.

### Challenge 2: Role-Based Permissions
**Problem**: Ensuring users only access authorized data.
**Solution**: Implemented middleware that validates JWT tokens and checks role permissions before each request.

### Challenge 3: Performance Optimization
**Problem**: Slow queries with large datasets.
**Solution**: Added database indexes, implemented query caching, and used pagination.

## Project Outcomes

- ✅ Successfully completed course project with full functionality
- ✅ Learned database normalization and schema design
- ✅ Implemented role-based access control
- ✅ Gained experience with full-stack development

## Key Learnings

1. **Database design is foundational** - Proper schema design prevents future headaches
2. **Security matters in academic projects too** - Implemented JWT authentication from the start
3. **Full-stack integration** - Connected React frontend to Express backend to MySQL database
4. **Team collaboration** - Worked with classmates using Git for version control

## Tech Stack

- React.js, Express.js, MySQL
- Chart.js (visualization)
- JWT (authentication)
- Node.js

[View on GitHub](https://github.com/martintbj/Museum-Database)

*Note: This was an academic project for COSC3380 Databases course, not a commercial application.*
    `
  },
  {
    id: 2,
    title: 'AI-Assisted Fracture Screening for Underserved Communities',
    slug: 'surimed-fracture-detection',
    date: '2024-11-20',
    readTime: '8 min read',
    category: 'AI/ML',
    excerpt: 'Research exploring whether AI can enable cost-effective fracture screening in low-income areas by flagging potential fractures for radiologist confirmation, improving healthcare access where specialists are scarce.',
    image: '/blog/ai-medical.jpg',
    tags: ['Python', 'DenseNet169', 'TensorFlow', 'Healthcare Access'],
    content: `
# Multi-View X-Ray Fracture Detection with DenseNet169

## Project Overview

Contributing to SuriMed research at Baylor College of Medicine - exploring whether we can train a model to accurately detect fractures in X-ray scans to help low-income areas with early detection and reduce costs by only sending flagged cases to radiologists for final confirmation.

## The Healthcare Access Problem

Low-income and underserved areas face critical challenges:
- **Limited access to radiologists** - Not every facility has specialists on-site
- **High costs** - Sending all X-rays to radiologists is expensive
- **Delayed diagnoses** - Waiting for specialist review can delay treatment
- **Resource constraints** - Need cost-effective triage solutions

## Research Goal

**Can we train an AI model accurate enough to serve as a first-pass screening tool?**

The vision:
1. **Triage system** - AI screens all X-rays and flags potential fractures
2. **Cost reduction** - Only flagged cases sent to radiologists for confirmation
3. **Faster care** - Immediate flagging of concerning cases in low-resource settings
4. **Accessible healthcare** - Bring specialist-level screening to underserved areas

## Our Technical Approach

Multi-input DenseNet169 architecture:
1. Takes three X-ray views (lateral, AP, oblique) as input
2. Extracts features from each view using shared DenseNet169 weights
3. Fuses features through late concatenation
4. Outputs binary classification (fracture vs non-fracture)
5. Aims for high sensitivity to minimize missed fractures

## Technical Implementation

### Model Architecture

**Multi-Input DenseNet169** with shared weights:

\`\`\`
Input (lateral) → DenseNet169 → GlobalAvgPool →
Input (AP) → DenseNet169 → GlobalAvgPool → Concatenate → Dense(1024) → Dense(1, sigmoid)
Input (oblique) → DenseNet169 → GlobalAvgPool →
\`\`\`

Key features:
- Shared DenseNet169 weights across all three views
- Independent feature extraction per view
- Late fusion via concatenation
- Fine-tuning of top 3 layers
- Binary classification with sigmoid activation

### Training Details

- **Optimizer**: Adam
- **Loss Function**: Binary cross-entropy
- **Early Stopping**: Patience of 10 epochs on validation loss
- **Epochs**: 50 (with early stopping)
- **Metrics Tracked**: Accuracy, Precision, Recall, AUC, Sensitivity@0.5, Specificity@0.5, F1-Score

### Data Format

The model expects:
- Three views per patient: lateral, AP, oblique
- Excel file with labels and image paths
- Images preprocessed and normalized

## Challenges Faced

### 1. Class Imbalance
**Problem**: More non-fracture cases than fractures
**Solution**: Implemented weighted loss functions and SMOTE

### 2. Diverse Patient Demographics
**Problem**: Model bias across age groups and bone densities
**Solution**: Stratified sampling and demographic-aware training

### 3. Multi-View Coordination
**Problem**: Ensuring all three views are properly aligned and processed
**Solution**: Careful data pipeline design and validation

## My Contributions

As a research contributor, I'm helping answer the core question: **Is this approach viable?**

My focus areas:
- **Data preprocessing** - Ensuring quality input for training
- **Model evaluation** - Testing accuracy across diverse patient scans
- **Validation** - Assessing sensitivity and specificity
- **Documentation** - Making the research reproducible

## The Research Question

We're exploring whether this model can achieve:
- **High sensitivity** - Catch most/all fractures (minimize false negatives)
- **Acceptable specificity** - Reduce unnecessary radiologist reviews
- **Consistent performance** - Work across different patient demographics
- **Practical deployment** - Fast enough for real-world use

Success means: A tool that could genuinely help underserved communities access better fracture screening.

## Tech Stack

- **Python 3.13**
- **TensorFlow >= 2.20.0** - Deep learning framework
- **Pandas** - Data manipulation and Excel handling
- **OpenCV** - Image processing
- **Scikit-learn** - StratifiedKFold for cross-validation
- **Matplotlib** - Visualization
- **Pillow** - Image loading

## Impact Potential

If successful, this research could:
- **Reduce healthcare costs** in low-income areas
- **Enable early detection** where radiologists are scarce
- **Improve patient outcomes** through faster triage
- **Make specialist-level screening accessible** to underserved populations

[View on GitHub](https://github.com/martintbj/surimed)

*Note: This is ongoing research at Baylor College of Medicine exploring AI-assisted fracture screening for underserved communities.*
    `
  },
  {
    id: 3,
    title: 'Scaling an E-Commerce Business: From Zero to Revenue',
    slug: 'ecommerce-business-scaling',
    date: '2024-12-01',
    readTime: '6 min read',
    category: 'Business',
    excerpt: 'Lessons learned from building and scaling e-commerce websites with Shopify, including SEO optimization, conversion rate improvements, and analytics-driven decisions.',
    image: '/blog/ecommerce.jpg',
    tags: ['Shopify', 'E-Commerce', 'SEO', 'Analytics'],
    content: `
# Scaling an E-Commerce Business: From Zero to Revenue

## Background

Since September 2024, I've been leading cross-functional teams to build and scale e-commerce platforms. Here's what I learned about turning traffic into revenue.

## The Tech Stack

### Platform
- **Shopify**: Robust, scalable e-commerce platform
- **Liquid**: Shopify's templating language for customization
- **Stripe**: Secure payment processing

### Analytics & Marketing
- **Google Analytics 4**: User behavior tracking
- **Meta Ads**: Targeted advertising
- **Klaviyo**: Email marketing automation
- **Hotjar**: Heatmaps and session recordings

## Key Strategies

### 1. SEO Optimization

**What We Did:**
- Keyword research for product pages
- Optimized meta descriptions and titles
- Implemented schema markup
- Built high-quality backlinks

**Results:**
- 300% increase in organic traffic
- Page 1 rankings for target keywords
- 45% of revenue from organic search

### 2. Conversion Rate Optimization

**A/B Testing Results:**

| Element | Original | Optimized | Lift |
|---------|----------|-----------|------|
| Product Images | 3 images | 6+ images with zoom | +28% |
| CTA Button | "Buy Now" | "Add to Cart" | +15% |
| Checkout Steps | 3 steps | 1-page checkout | +22% |
| Trust Badges | None | Security badges | +18% |

### 3. Analytics-Driven Decisions

Used GA4 to track:
- User flow through checkout
- Cart abandonment points
- Product page engagement
- Traffic sources ROI

**Key Insight**: 70% of users abandoned at shipping cost reveal. Solution: Offered free shipping threshold, increasing AOV by 35%.

## Marketing Automation

### Email Sequences

1. **Welcome Series**: 3-email sequence for new subscribers
2. **Abandoned Cart**: Automated recovery emails (28% recovery rate)
3. **Post-Purchase**: Review requests and upsells
4. **Re-engagement**: Win-back campaigns for inactive customers

### Results
- 40% email open rate
- 12% click-through rate
- $15 revenue per email sent

## Inventory Management

Built custom Shopify apps for:
- Real-time inventory sync
- Low stock alerts
- Automated reordering
- Multi-warehouse management

## Challenges & Solutions

### Challenge 1: High CAC (Customer Acquisition Cost)
**Solution**: Shifted focus to organic channels and referral programs, reducing CAC by 60%

### Challenge 2: Cart Abandonment
**Solution**: Implemented exit-intent popups and SMS recovery, recovering 25% of abandoned carts

### Challenge 3: Seasonal Fluctuations
**Solution**: Diversified product line and built email list for off-season engagement

## Financial Results

- 📈 200%+ increase in monthly revenue
- 💰 Improved profit margins by 15%
- 🎯 Reduced CAC from $45 to $18
- ⭐ 4.8/5 average customer rating

## Lessons Learned

1. **Data beats intuition** - Always A/B test assumptions
2. **Mobile-first is essential** - 65% of traffic came from mobile
3. **Customer service = marketing** - Happy customers drive referrals
4. **Speed matters** - Every 100ms delay = 1% conversion drop

## Tools & Technologies

- Shopify, Stripe, Klaviyo
- Google Analytics 4, Hotjar
- Meta Ads, Google Ads
- HTML/CSS for customization

## Next Steps

- Implementing AI chatbot for customer service
- Expanding to international markets
- Building mobile app for better retention
- Launching subscription model

---

**Want to discuss e-commerce strategies?** [Get in touch](#contact)
    `
  }
]

// Note: These blog posts are templates based on your actual projects.
// Please update with your real experiences, metrics, and code examples!
