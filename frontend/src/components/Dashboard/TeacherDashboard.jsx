import React from 'react';
import './Dashboard.css';

const TeacherDashboard = ({ activeTab }) => {
    const recentActivity = [
        { student: 'Alex Rivera', action: 'Submitted Assignment', time: '2 mins ago', status: 'pending' },
        { student: 'Mia Chen', action: 'Commented on Course', time: '1 hour ago', status: 'viewed' },
        { student: 'Sam Wilson', action: 'Completed Unit 4', time: '3 hours ago', status: 'completed' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'students':
                return (
                    <div className="students-list-view">
                        <h3>Student Roster</h3>
                        <p>Manage your students and view their academic performance.</p>
                    </div>
                );
            case 'attendance':
                return (
                    <div className="attendance-view">
                        <h3>Mark Attendance</h3>
                        <button className="btn-premium btn-primary">Start New Session</button>
                    </div>
                );
            case 'overview':
            default:
                return (
                    <div className="dashboard-grid">
                        <div className="main-col">
                            <div className="analytics-banner glass-premium primary">
                                <div className="banner-content">
                                    <h3>Boost Engagement</h3>
                                    <p>Your "Advanced React" course has 15% lower engagement this week. Try adding a new quiz!</p>
                                </div>
                                <button className="btn-premium btn-primary">Create Quiz</button>
                            </div>

                            <section className="activity-section glass-premium">
                                <div className="section-title">
                                    <h3>Recent Activity</h3>
                                    <button className="text-btn">History</button>
                                </div>
                                <div className="activity-list">
                                    {recentActivity.map((act, i) => (
                                        <div key={i} className="activity-row">
                                            <div className="act-user">
                                                <div className="u-avatar">{act.student[0]}</div>
                                                <div>
                                                    <p className="u-name">{act.student}</p>
                                                    <p className="u-time">{act.time}</p>
                                                </div>
                                            </div>
                                            <p className="act-desc">{act.action}</p>
                                            <span className={`status-pill ${act.status}`}>{act.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="side-col">
                            <div className="quick-stats glass-premium">
                                <h3>Quick Stats</h3>
                                <div className="q-stat">
                                    <span className="q-label">Total Revenue</span>
                                    <span className="q-val">$12,450</span>
                                </div>
                                <div className="q-stat">
                                    <span className="q-label">Total Students</span>
                                    <span className="q-val">1,204</span>
                                </div>
                                <div className="q-stat">
                                    <span className="q-label">Course Rating</span>
                                    <span className="q-val">★ 4.9</span>
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
                <h1>{activeTab === 'overview' ? 'Teacher Console' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                <p>Manage your classes and student engagement</p>
            </div>
            {renderContent()}
        </div>
    );
};

export default TeacherDashboard;
