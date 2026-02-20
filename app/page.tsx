'use client';

import { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, Github } from 'lucide-react';

export default function Page() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    console.log(isLogin ? 'Login' : 'Signup', {
      email,
      password,
      ...(isLogin ? {} : { name }),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-slate-800/20 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,113,108,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,113,108,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Auth container with backdrop filter */}
          <div className="backdrop-blur-2xl bg-slate-950/60 border border-amber-500/20 rounded-2xl p-8 shadow-2xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-black text-slate-950">⚡</span>
                </div>
              </div>
              <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 mb-2 tracking-tight">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-slate-400 text-sm font-light">
                {isLogin ? 'Sign in to your account' : 'Join the premium experience'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name field (signup only) */}
              {!isLogin && (
                <div className="group">
                  <label className="block text-xs font-semibold text-amber-300/70 mb-2 uppercase tracking-wider">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-4 h-4 text-amber-500/40 group-focus-within:text-amber-400 transition-colors" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900/50 border border-amber-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all backdrop-blur-sm"
                    />
                  </div>
                </div>
              )}

              {/* Email field */}
              <div className="group">
                <label className="block text-xs font-semibold text-amber-300/70 mb-2 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-4 h-4 text-amber-500/40 group-focus-within:text-amber-400 transition-colors" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900/50 border border-amber-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="group">
                <label className="block text-xs font-semibold text-amber-300/70 mb-2 uppercase tracking-wider">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 w-4 h-4 text-amber-500/40 group-focus-within:text-amber-400 transition-colors" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={isLogin ? 'Enter your password' : 'Create a password'}
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-900/50 border border-amber-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all backdrop-blur-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-amber-500/40 hover:text-amber-400 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember/forgot password */}
              {isLogin && (
                <div className="flex justify-end">
                  <a href="#" className="text-xs text-amber-400/70 hover:text-amber-300 transition-colors font-medium">
                    Forgot password?
                  </a>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold rounded-lg hover:from-amber-300 hover:to-amber-400 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-amber-500/30 active:scale-95"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Divider */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-amber-500/10"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-slate-950/60 text-slate-500">or</span>
                </div>
              </div>

              {/* Social buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex-1 py-2.5 px-4 bg-slate-900/50 border border-amber-500/10 rounded-lg text-white text-sm font-medium hover:border-amber-400/30 hover:bg-slate-900/70 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  className="flex-1 py-2.5 px-4 bg-slate-900/50 border border-amber-500/10 rounded-lg text-white text-sm font-medium hover:border-amber-400/30 hover:bg-slate-900/70 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </button>
              </div>
            </form>

            {/* Toggle login/signup */}
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-400">
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setEmail('');
                    setPassword('');
                    setName('');
                  }}
                  className="text-amber-400 hover:text-amber-300 font-bold transition-colors"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-6 border-t border-amber-500/10 text-center">
              <p className="text-xs text-slate-500">
                By continuing, you agree to our{' '}
                <a href="#" className="text-amber-400/70 hover:text-amber-300 transition-colors">
                  Terms
                </a>{' '}
                and{' '}
                <a href="#" className="text-amber-400/70 hover:text-amber-300 transition-colors">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="mt-8 text-center text-xs text-slate-600">
            <p>✦ Premium Authentication Interface ✦</p>
          </div>
        </div>
      </div>
    </div>
  );
}