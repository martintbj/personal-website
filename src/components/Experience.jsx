import React from 'react'
import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer',
      company: 'Stravx',
      location: 'Houston, TX (Remote)',
      period: 'September 2024 – Present',
      highlights: [
        'Built and optimized Shopify storefronts using Liquid, HTML, CSS, JavaScript, React, Git',
        'Implemented secure checkout, customer accounts, order tracking with Stripe and Shop Pay',
        'Improved Core Web Vitals and SEO with image optimization, lazy loading, schema markup, clean URLs',
        'Automated Klaviyo flows for abandoned cart and post-purchase, used metafields for no-code content updates',
        'Set up GA4, Meta Pixel, Hotjar, defined conversion events, ran A/B tests for CRO and UX',
      ],
    },
    {
      title: 'Remote Data Entry Technician',
      company: 'Empower Pharmacy',
      location: 'Houston, TX (Remote)',
      period: 'October 2024 – August 2025',
      highlights: [
        'Utilized internal pharmacy software to process and validate high-volume prescription data with 99% accuracy',
        'Collaborated cross-functionally with pharmacists to resolve legal and data discrepancies',
        'Maintained HIPAA-compliant digital records, supporting data integrity and workflow improvements',
      ],
    },
    {
      title: 'Pharmacy Technician',
      company: 'Walgreens',
      location: 'Houston, TX',
      period: 'June 2022 – September 2024',
      highlights: [
        'Processed prescriptions and managed inventory in high-volume retail pharmacy',
        'Provided excellent customer service while maintaining compliance with pharmacy regulations',
      ],
    },
    {
      title: 'Pharmacy Technician',
      company: 'CVS',
      location: 'Houston, TX',
      period: 'January 2021 – June 2022',
      highlights: [
        'Assisted pharmacists with prescription fulfillment and patient consultations',
        'Maintained accurate records and ensured regulatory compliance',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-slate-950 z-10"></div>

                {/* Content card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-primary-500 transition-all duration-300 card-hover">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-primary-600/20 rounded-lg">
                        <Briefcase className="text-primary-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-primary-400 font-semibold">{exp.company}</p>
                        <p className="text-slate-400 text-sm">{exp.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-primary-400 mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
