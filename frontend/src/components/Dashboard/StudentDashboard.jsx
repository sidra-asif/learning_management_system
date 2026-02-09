import React from 'react';
import './Dashboard.css';

const StudentDashboard = ({ activeTab }) => {
    const courses = [
        { title: 'Interactive Web Design', instructor: 'Sarah Jenkins', progress: 85, color: '#6366f1' },
        { title: 'Advanced Data Structures', instructor: 'Dr. Alan Moore', progress: 42, color: '#0ea5e9' },
        { title: 'Digital Marketing 101', instructor: 'Emily Rose', progress: 95, color: '#10b981' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'my-courses':
                return (
                    <div className="courses-grid-view">
                        <h3>My Extended Course List</h3>
                        <p>Explore your enrolled courses and upcoming materials.</p>
                    </div>
                );
            case 'attendance-log':
                return (
                    <div className="attendance-view">
                        <h3>Attendance History</h3>
                        <p>You have a 92% attendance rate this semester. Keep it up!</p>
                    </div>
                );
            case 'overview':
            default:
                return (
                    <div className="dashboard-grid">
                        <div className="main-col">
                            <section className="highlights-row">
                                <div className="h-card glass-premium">
                                    <span className="h-val">32</span>
                                    <span className="h-lab">Lessons Completed</span>
                                </div>
                                <div className="h-card glass-premium">
                                    <span className="h-val">4.8</span>
                                    <span className="h-lab">GPA Average</span>
                                </div>
                                <div className="h-card glass-premium">
                                    <span className="h-val">12</span>
                                    <span className="h-lab">Certificates Earned</span>
                                </div>
                            </section>

                            <section className="courses-section glass-premium">
                                <div className="section-title">
                                    <h3>Current Enrollment</h3>
                                    <button className="text-btn">View All</button>
                                </div>
                                <div className="course-cards">
                                    {courses.map((course, i) => (
                                        <div key={i} className="premium-course-card">
                                            <div className="c-icon" style={{ backgroundColor: `${course.color}20`, color: course.color }}>📚</div>
                                            <div className="c-details">
                                                <h4>{course.title}</h4>
                                                <p>{course.instructor}</p>
                                                <div className="p-bar-wrapper">
                                                    <div className="p-bar">
                                                        <div className="p-fill" style={{ width: `${course.progress}%`, backgroundColor: course.color }}></div>
                                                    </div>
                                                    <span className="p-percent">{course.progress}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="side-col">
                            <div className="upcoming-tasks glass-premium">
                                <h3>Upcoming Tasks</h3>
                                <div className="task-item">
                                    <div className="t-date">Feb 12</div>
                                    <div className="t-info">
                                        <p className="t-name">Design Feedback</p>
                                        <p className="t-course">UX Design</p>
                                    </div>
                                </div>
                                <div className="task-item">
                                    <div className="t-date">Feb 15</div>
                                    <div className="t-info">
                                        <p className="t-name">Final Quiz</p>
                                        <p className="t-course">Data Structures</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="dashboard-view animate-slide-up">
            <div className="view-header">
                <h1>{activeTab === 'overview' ? 'Student Overview' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                <p>Your academic progress at a glance</p>
            </div>
            {renderContent()}
        </div>
    );
};

export default StudentDashboard;
