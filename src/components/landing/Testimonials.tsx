// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     role: "UI/UX Designer",
//     company: "DesignCraft",
//     image: "/testimonials/sarah.jpg",
//     content: "Flevo has transformed how I find design projects. The platform is intuitive, and the quality of clients is exceptional. I've doubled my freelance income since joining!",
//     rating: 5
//   },
//   {
//     name: "Michael Chen",
//     role: "Full Stack Developer",
//     company: "TechFlow",
//     image: "/testimonials/michael.jpg",
//     content: "As a developer, finding quality projects used to be challenging. Flevo's matching system connects me with perfect opportunities that align with my skills.",
//     rating: 5
//   },
//   {
//     name: "Emma Williams",
//     role: "Content Writer",
//     company: "ContentHub",
//     image: "/testimonials/emma.jpg",
//     content: "The seamless payment system and project management tools make working with clients a breeze. Flevo has become my go-to platform for finding writing gigs.",
//     rating: 5
//   }
// ];

// export function Testimonials() {
//   return (
//     <section className="relative py-24 overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 transform -skew-x-12"></div>
//       </div>

//       <div className="relative container mx-auto px-4">
//         {/* Section Header */}
//         <div className="max-w-3xl mx-auto text-center mb-20">
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="inline-block px-4 py-1 mb-6 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full"
//           >
//             Testimonials
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-4xl font-bold text-gray-900 mb-6"
//           >
//             What Our Users Say
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="text-xl text-gray-600"
//           >
//             Join thousands of satisfied freelancers who have found success on our platform
//           </motion.p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="relative group"
//             >
//               <div className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
//                 {/* Quote Icon */}
//                 <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
//                   <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7M10 11V19M10 11V7M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7M20 11V19M20 11V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>

//                 {/* Rating */}
//                 <div className="flex mb-6">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>

//                 {/* Content */}
//                 <p className="text-gray-600 mb-6">
//                   "{testimonial.content}"
//                 </p>

//                 {/* User Info */}
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
//                     <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-900">
//                       {testimonial.name}
//                     </h4>
//                     <p className="text-sm text-gray-600">
//                       {testimonial.role} at {testimonial.company}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="mt-16 text-center"
//         >
//           <a
//             href="#"
//             className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
//           >
//             Join Our Community
//             <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// } 