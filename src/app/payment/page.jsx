// 'use client';

// import { useState, useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import { gsap } from 'gsap';
// import { motion } from 'framer-motion';
// import { useRouter } from 'next/navigation';

// export default function ManualPaymentPage() {
//   const router = useRouter();
//   const [method, setMethod] = useState('bank');
//   const containerRef = useRef();
//   const confirmRef = useRef();

//   useGSAP(() => {
//     gsap.from(containerRef.current, {
//       y: 50,
//       opacity: 0,
//       duration: 0.8,
//       ease: 'power3.out',
//     });
//   }, []);

//   const handleConfirm = () => {
//     gsap.to(confirmRef.current, {
//       scale: 1.1,
//       backgroundColor: '#10B981', // emerald-500
//       duration: 0.3,
//       yoyo: true,
//       repeat: 1,
//       ease: 'elastic.out(1, 0.5)',
//       onComplete: () => {
//         alert('Payment marked as completed!');
//         router.push('/');
//       },
//     });
//   };

//   const paymentDetails = {
//     bank: {
//       title: 'Bank Transfer',
//       details: [
//         { label: 'Account Name', value: 'Marrying Muslims Pvt Ltd' },
//         { label: 'Bank Name', value: 'HDFC Bank' },
//         { label: 'Account Number', value: '123456789012' },
//         { label: 'IFSC Code', value: 'HDFC0001234' },
//       ],
//     },
//     upi: {
//       title: 'UPI Payment',
//       qr: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=marrying@upi',
//       upiId: 'marrying@upi',
//     },
//     paypal: {
//       title: 'PayPal',
//       details: [
//         { label: 'PayPal Email', value: 'payments@marryingmuslims.com' },
//         { label: 'Note', value: 'Include your username in notes.' },
//       ],
//     },
//   };

//   return (
//     <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
//       <div ref={containerRef} className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-xl">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           💸 Make a Manual Payment
//         </h1>

//         <div className="flex justify-center gap-4 mb-6">
//           {['bank', 'upi', 'paypal'].map((opt) => (
//             <button
//               key={opt}
//               onClick={() => setMethod(opt)}
//               className={`px-4 py-2 rounded-full border text-sm transition ${
//                 method === opt
//                   ? 'bg-red-600 text-white'
//                   : 'bg-white text-gray-700 border-gray-300'
//               }`}
//             >
//               {paymentDetails[opt].title}
//             </button>
//           ))}
//         </div>

//         <motion.div
//           key={method}
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ type: 'spring', stiffness: 260, damping: 20 }}
//           className="min-h-[200px]"
//         >
//           {/* Bank Details */}
//           {method === 'bank' && (
//             <div className="space-y-4">
//               {paymentDetails.bank.details.map((item) => (
//                 <div key={item.label} className="flex justify-between text-gray-700">
//                   <span className="font-medium">{item.label}:</span>
//                   <span className="text-right">{item.value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* UPI */}
//           {method === 'upi' && (
//             <div className="text-center">
//               <p className="text-gray-600 mb-4">Scan this QR using your UPI App</p>
//               <img
//                 src={paymentDetails.upi.qr}
//                 alt="UPI QR"
//                 className="w-40 h-40 border rounded-md shadow mx-auto"
//               />
//               <p className="text-gray-700 mt-4">
//                 UPI ID: <span className="font-semibold">{paymentDetails.upi.upiId}</span>
//               </p>
//             </div>
//           )}

//           {/* PayPal */}
//           {method === 'paypal' && (
//             <div className="space-y-4 text-gray-700">
//               {paymentDetails.paypal.details.map((item) => (
//                 <div key={item.label} className="flex justify-between">
//                   <span className="font-medium">{item.label}:</span>
//                   <span className="text-right">{item.value}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </motion.div>

//         <motion.button
//           ref={confirmRef}
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.97 }}
//           onClick={handleConfirm}
//           className="mt-8 w-full bg-green-600 text-white py-2 rounded-md shadow-md hover:bg-green-700 transition"
//         >
//           I Have Paid
//         </motion.button>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import confetti from 'canvas-confetti';

export default function ManualPaymentPage() {
  const router = useRouter();
  const [method, setMethod] = useState('bank');
  const [isPaid, setIsPaid] = useState(false);
  const containerRef = useRef();
  const confirmRef = useRef();
  const particlesRef = useRef([]);

  useGSAP(() => {
    // Initial container animation
    gsap.from(containerRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
    
    // Floating particles animation
    particlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        y: `+=${Math.random() * 40 - 20}`,
        x: `+=${Math.random() * 40 - 20}`,
        duration: 3 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.2,
      });
    });
  }, []);

  const handleConfirm = () => {
    // Button animation
    gsap.to(confirmRef.current, {
      scale: 1.1,
      backgroundColor: '#10B981',
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: 'elastic.out(1, 0.5)',
      onComplete: () => {
        setIsPaid(true);
        
        // Confetti effect
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 }
        });
        
        // Success animation
        gsap.to('.success-message', {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
        });
        
        // Redirect after delay
        setTimeout(() => {
          router.push('/');
        }, 2500);
      },
    });
  };

  const paymentDetails = {
    bank: {
      title: 'Bank Transfer',
      icon: '🏦',
      details: [
        { label: 'Account Name', value: 'Marrying Muslims Pvt Ltd' },
        { label: 'Bank Name', value: 'HDFC Bank' },
        { label: 'Account Number', value: '123456789012' },
        { label: 'IFSC Code', value: 'HDFC0001234' },
      ],
    },
    upi: {
      title: 'UPI Payment',
      icon: '📱',
      qr: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=marrying@upi',
      upiId: 'marrying@upi',
    },
    paypal: {
      title: 'PayPal',
      icon: '🅿️',
      details: [
        { label: 'PayPal Email', value: 'payments@marryingmuslims.com' },
        { label: 'Note', value: 'Include your username in notes.' },
      ],
    },
  };

  // Create floating particles
  useEffect(() => {
    const particles = [];
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-red-100 opacity-20';
      particle.style.width = `${Math.random() * 20 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      document.querySelector('.background-container').appendChild(particle);
      particles.push(particle);
    }
    particlesRef.current = particles;
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden background-container">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Particles are created dynamically */}
      </div>
      
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-200 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <motion.div 
          ref={containerRef}
          className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl relative overflow-hidden border border-red-100"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-5 -right-5 w-24 h-24 bg-red-500 rounded-full opacity-10 blur-xl"></div>
          <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-green-500 rounded-full opacity-10 blur-xl"></div>
          
          <div className="relative z-10">
            <motion.h1 
              className="text-3xl font-bold text-center text-gray-800 mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-red-600">💸</span> Make a Manual Payment
            </motion.h1>
            
            <p className="text-center text-gray-600 mb-8">
              Select your preferred payment method below
            </p>
            
            <motion.div 
              className="flex justify-center gap-4 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {['bank', 'upi', 'paypal'].map((opt) => (
                <motion.button
                  key={opt}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMethod(opt)}
                  className={`px-5 py-3 rounded-xl border-2 flex items-center gap-2 font-medium transition-all ${
                    method === opt
                      ? 'bg-gradient-to-r from-red-500 to-amber-500 text-white border-transparent shadow-lg'
                      : 'bg-white text-gray-700 border-red-100 hover:border-red-300'
                  }`}
                >
                  <span className="text-xl">{paymentDetails[opt].icon}</span>
                  {paymentDetails[opt].title}
                </motion.button>
              ))}
            </motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={method}
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: -20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="min-h-[250px] bg-gradient-to-br from-red-50 to-amber-50 rounded-2xl p-6 border border-red-100 shadow-inner"
              >
                {/* Bank Details */}
                {method === 'bank' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                      Bank Transfer Details
                    </h3>
                    {paymentDetails.bank.details.map((item, index) => (
                      <motion.div 
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex justify-between bg-white p-4 rounded-lg shadow-sm"
                      >
                        <span className="font-medium text-gray-700">{item.label}:</span>
                        <span className="text-right font-semibold text-gray-900">{item.value}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* UPI */}
                {method === 'upi' && (
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Scan to Pay</h3>
                    <p className="text-gray-600 mb-6">Use any UPI app to scan this QR code</p>
                    
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="inline-block p-4 bg-white rounded-xl shadow-md mb-6"
                    >
                      <img
                        src={paymentDetails.upi.qr}
                        alt="UPI QR"
                        className="w-40 h-40 mx-auto"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <p className="text-gray-700">
                        UPI ID: <span className="font-semibold text-gray-900">{paymentDetails.upi.upiId}</span>
                      </p>
                    </motion.div>
                  </div>
                )}

                {/* PayPal */}
                {method === 'paypal' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                      PayPal Payment
                    </h3>
                    {paymentDetails.paypal.details.map((item, index) => (
                      <motion.div 
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex justify-between bg-white p-4 rounded-lg shadow-sm"
                      >
                        <span className="font-medium text-gray-700">{item.label}:</span>
                        <span className="text-right font-semibold text-gray-900">{item.value}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
            
            <div className="mt-8 relative">
              <AnimatePresence>
                {!isPaid ? (
                  <motion.button
                    ref={confirmRef}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleConfirm}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all font-bold text-lg"
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    I Have Paid
                  </motion.button>
                ) : (
                  <motion.div
                    className="success-message bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 px-6 rounded-xl text-center font-bold text-lg transform translate-y-10 opacity-0"
                    initial={{ opacity: 0, y: 20 }}
                  >
                    ✅ Payment Successful! Redirecting...
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push('/')}
                className="w-full mt-4 py-2.5 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Cancel Payment
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
