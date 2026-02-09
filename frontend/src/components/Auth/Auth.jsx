import React, { useState } from 'react';
import './Auth.css';

const Auth = ({ mode, onNavigate, onAuthSuccess }) => {
    const [isLogin, setIsLogin] = useState(mode === 'login');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'student'
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const endpoint = isLogin ? '/api/login' : '/api/register';

        try {
            // In a real scenario, we'd fetch from the backend
            // const response = await fetch(`http://localhost:5000${endpoint}`, {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(formData)
            // });

            // Simulating success for UI demonstration
            setTimeout(() => {
                onAuthSuccess(formData.role);
                setLoading(false);
            }, 1000);

        } catch (err) {
            setError('Connection failed. Please check the backend.');
            setLoading(false);
        }
    };

    return (
        <div className="auth-container fade-in">
            <div className="auth-card glass-card">
                <div className="auth-header">
                    <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                    <p>{isLogin ? 'Sign in to your LMS account' : 'Join LMSPro and start learning'}</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLogin && (
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                required
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            />
                        </div>
                    )}
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            required
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            required
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>
                    {!isLogin && (
                        <div className="form-group">
                            <label>Role</label>
                            <select onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                            </select>
                        </div>
                    )}

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                        {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <button className="auth-switch" onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </button>
                    </p>
                    <button className="back-link" onClick={() => onNavigate('landing')}>Back to Home</button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
