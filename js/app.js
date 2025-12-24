/**
 * PitchMaster - App Controller
 */

import { AuthViews } from './auth.js';
import { TeamViews } from './teams.js';
import { AI, StaticViews } from './ai.js';

const App = {
    state: {
        view: 'hero',
        user: null,
        players: [
            { name: "John Smith", pos: "GK", foot: "Right" },
            { name: "Leo Das", pos: "FWD", foot: "Left" },
            { name: "Marcus Roe", pos: "DEF", foot: "Right" },
            { name: "Sarah J", pos: "MID", foot: "Right" },
            { name: "Kevin B", pos: "MID", foot: "Left" },
            { name: "Lucy L", pos: "FWD", foot: "Right" },
            { name: "Tom H", pos: "DEF", foot: "Both" },
            { name: "Ben S", pos: "GK", foot: "Right" },
            { name: "Alan W", pos: "FWD", foot: "Right" },
            { name: "Chris P", pos: "MID", foot: "Left" },
            { name: "Dan V", pos: "DEF", foot: "Right" },
            { name: "Eric G", pos: "FWD", foot: "Left" },
        ],
    },

    init() {
        console.log('PitchMaster Initialized');
        this.bindEvents();
        this.render();
    },

    bindEvents() {
        // Handle navigation and actions
        document.body.addEventListener('click', (e) => {
            const action = e.target.closest('[data-action]');
            if (action) {
                e.preventDefault();
                const actionType = action.dataset.action;
                this.handleAction(actionType);
            }
        });

        // Intercept form submits for demo
        document.addEventListener('submit', (e) => {
            e.preventDefault();
            if (e.target.id === 'signup-form') {
                this.navigate('onboarding');
            } else if (e.target.id === 'onboarding-form') {
                this.navigate('dashboard');
            }
        });
    },

    handleAction(action) {
        switch (action) {
            case 'hero': this.navigate('hero'); break;
            case 'show-signup': this.navigate('signup'); break;
            case 'show-login': this.navigate('signup'); break; // Simplify for demo
            case 'show-teams': this.navigate('teams'); break;
            case 'show-market': this.navigate('market'); break;
            case 'show-calendar': this.navigate('calendar'); break;
            case 'show-subscription': this.navigate('subscription'); break;
            case 'show-sla': this.navigate('sla'); break;
            case 'generate-teams': this.navigate('match-day'); break;
        }
    },

    navigate(view) {
        this.state.view = view;
        this.render();
        window.scrollTo(0, 0);
    },

    render() {
        const root = document.getElementById('main-content');

        const heroView = `
            <section id="hero-view" class="animate-fade-in" style="text-align: center; max-width: 800px; margin: 80px auto;">
                <h1 style="font-size: 4rem; font-weight: 800; line-height: 1.1; margin-bottom: 24px; color: var(--primary);">Manage Your Team <br>Like a Pro.</h1>
                <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 40px;">The all-in-one platform for football teams. Light, fast, and driven by smart analytics.</p>
                <div style="display: flex; gap: 20px; justify-content: center;">
                    <button class="btn-primary" data-action="show-signup" style="font-size: 1.1rem; padding: 16px 40px;">Get Started</button>
                    <button class="btn-outline" data-action="show-teams" style="font-size: 1.1rem; padding: 16px 40px;">View Demo</button>
                </div>
            </section>
        `;

        switch (this.state.view) {
            case 'hero': root.innerHTML = heroView; break;
            case 'signup': root.innerHTML = AuthViews.signup; break;
            case 'onboarding': root.innerHTML = AuthViews.onboarding; break;
            case 'teams':
            case 'dashboard': root.innerHTML = TeamViews.dashboard; break;
            case 'match-day':
                const teams = AI.generateMatchTeams(this.state.players);
                root.innerHTML = AI.getMatchView(teams);
                break;
            case 'market': root.innerHTML = StaticViews.market; break;
            case 'subscription': root.innerHTML = StaticViews.subscription; break;
            case 'sla': root.innerHTML = StaticViews.sla; break;
            default:
                root.innerHTML = `<div style="padding: 100px; text-align: center;"><i data-lucide="construction" size="48" style="color: var(--accent); margin-bottom: 20px;"></i><h2>${this.state.view.toUpperCase()} Coming Soon</h2><button class="btn-outline" data-action="hero" style="margin-top: 20px;">Back to Home</button></div>`;
        }

        // Re-init icons after injection
        if (window.lucide) {
            lucide.createIcons();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());

export default App;
