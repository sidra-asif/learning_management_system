import React from 'react';
import './Sidebar.css';

const Sidebar = ({ user, activeTab, onTabChange, onLogout }) => {
    const menuItems = user?.role === 'teacher' ? [
        { id: 'overview', icon: '📊', label: 'Dashboard' },
        { id: 'students', icon: '👥', label: 'My Students' },
        { id: 'courses', icon: '📚', label: 'Course Catalog' },
        { id: 'attendance', icon: '✅', label: 'Attendance' },
    ] : [
        { id: 'overview', icon: '🏠', label: 'Overview' },
        { id: 'my-courses', icon: '📖', label: 'My Courses' },
        { id: 'attendance-log', icon: '🗓️', label: 'Attendance Log' },
        { id: 'grades', icon: '📈', label: 'Grades' },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <div className="brand-logo">L</div>
                <span className="brand-name">LMS<span>Pro</span></span>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map(item => (
                    <button
                        key={item.id}
                        className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                        onClick={() => onTabChange(item.id)}
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="user-avatar">{user?.username?.[0] || user?.role?.[0]?.toUpperCase() || 'U'}</div>
                    <div className="user-details">
                        <p className="user-name">{user?.username || 'User'}</p>
                        <p className="user-role">{user?.role}</p>
                    </div>
                </div>
                <button className="logout-btn" onClick={onLogout}>
                    <span>🚪</span> Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
