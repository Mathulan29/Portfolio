import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCode, FaRocket, FaGraduationCap, FaLightbulb, FaBrain, FaChartLine, FaLaptopCode, FaMicrochip } from 'react-icons/fa';

export default function Learning() {
    const goals = [
        {
            title: "Advanced Java",
            target: "Dec 2025",
            status: "In Progress",
            icon: <FaGraduationCap />
        },
        {
            title: "Advanced Spring Boot",
            target: "Dec 2025",
            status: "In Progress",
            icon: <FaGraduationCap />
        },
        {
            title: "Advanced JavaScript and React",
            target: "Dec 2025",
            status: "In Progress",
            icon: <FaGraduationCap />
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-6 mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                    Currently <span className="text-green-400">Learning</span>
                </h1>
            </motion.div>

            {/* Learning Goals Section */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mb-16"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl font-bold text-white mb-8 text-center"
                >
                    Learning Goals
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                    {goals.map((goal, index) => (
                        <motion.div
                            key={goal.title}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 h-full flex flex-col justify-between w-full max-w-xs"
                        >
                            <div className="flex items-start space-x-3 mb-4">
                                <div className="p-2 bg-green-600 rounded-lg text-white flex-shrink-0">
                                    {goal.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-white font-semibold text-sm leading-tight mb-1">{goal.title}</h3>
                                    <p className="text-gray-400 text-xs">{goal.target}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xs text-gray-400">Status</span>
                                <span className="text-xs px-2 py-1 bg-green-600/20 text-green-400 rounded-full">
                                    {goal.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* How I Stand Out Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
            >
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-block p-4 bg-green-600 rounded-full mb-4"
                        >
                            <FaLightbulb className="text-3xl text-white" />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-white mb-4">How I Stand Out</h2>
                        <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Main Content */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Left Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold text-lg">1</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Theoretical Foundation</h3>
                                    <p className="text-gray-300 leading-relaxed text-base">
                                        With a strong foundation in software engineering principles, I possess a deep understanding of modern technologies and development practices. This expertise enables me to analyze complex problems systematically and craft innovative, scalable solutions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold text-lg">2</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Practical Experience</h3>
                                    <p className="text-gray-300 leading-relaxed text-base">
                                        Hands-on experience in software engineering means I can bridge theory with real-world applications, creating impactful solutions that actually work.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold text-lg">3</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Discipline & Focus</h3>
                                    <p className="text-gray-300 leading-relaxed text-base">
                                        Time management and the ability to handle complex projects without losing focus or quality.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold text-lg">4</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Innovation Mindset</h3>
                                    <p className="text-gray-300 leading-relaxed text-base">
                                        I'm not just about learning new tech — I'm passionate about applying knowledge practically to build solutions that bridge theory and real-world impact.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}