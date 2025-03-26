// 'use client';

// import { motion } from 'framer-motion';

// const steps = [
//   {
//     title: "Search Jobs",
//     description: "Browse through available jobs posted by local businesses in Cameroon.",
//     icon: (
//       <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     )
//   },
//   {
//     title: "Apply",
//     description: "Submit your application for jobs that match your skills and interests.",
//     icon: (
//       <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     )
//   },
//   {
//     title: "Get Hired",
//     description: "Connect with employers and secure your next job opportunity.",
//     icon: (
//       <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     )
//   }
// ];

// const MotionH2 = motion.h2;
// const MotionP = motion.p;
// const MotionDiv = motion.div;

// export default function HowItWorks() {
//   return (
//     <section className="relative py-16 bg-[#0B1121]">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="max-w-3xl mx-auto text-center mb-12">
//           <MotionH2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl font-bold text-white mb-4"
//           >
//             How It Works
//           </MotionH2>
//           <MotionP
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-gray-400"
//           >
//             Find your next job opportunity in three simple steps
//           </MotionP>
//         </div>

//         {/* Steps Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//           {steps.map((step, index) => (
//             <MotionDiv
//               key={step.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="relative"
//             >
//               <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
//                 {/* Step Number */}
//                 <div className="absolute -top-3 -right-3 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
//                   {index + 1}
//                 </div>

//                 {/* Icon */}
//                 <div className="mb-4">
//                   {step.icon}
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-lg font-semibold text-white mb-2">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm">
//                   {step.description}
//                 </p>
//               </div>
//             </MotionDiv>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// } 