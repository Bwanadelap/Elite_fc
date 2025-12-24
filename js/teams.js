/**
 * Team Management & Dashboard Views
 */

export const MockStats = {
    teams: [
        { name: "Scorpions FC", players: 18, pts: 24, logo: "zap" },
        { name: "Green Giants", players: 20, pts: 21, logo: "trees" },
        { name: "Urban Legends", players: 16, pts: 18, logo: "mountain" },
        { name: "Midnight Strikers", players: 22, pts: 15, logo: "moon" }
    ],
    topScorers: [
        { name: "Alex Hunter", goals: 14, assists: 6, cards: { y: 2, r: 0 }, team: "Scorpions FC" },
        { name: "Sarah Bell", goals: 12, assists: 8, cards: { y: 1, r: 0 }, team: "Green Giants" },
        { name: "Leo Messi", goals: 10, assists: 11, cards: { y: 0, r: 0 }, team: "Scorpions FC" },
        { name: "Marcus Rush", goals: 8, assists: 4, cards: { y: 5, r: 1 }, team: "Urban Legends" }
    ]
};

export const TeamViews = {
    dashboard: `
        <div class="animate-fade-in">
            <header style="margin-bottom: 40px; display: flex; justify-content: space-between; align-items: flex-end;">
                <div>
                    <h1 style="font-size: 2.5rem; color: var(--primary);">League Dashboard</h1>
                    <p style="color: var(--text-muted);">Overview of all active teams and performance metrics.</p>
                </div>
                <button class="btn-primary" data-action="generate-teams" style="display: flex; align-items: center; gap: 8px;">
                    <i data-lucide="sparkles" size="18"></i> AI Match Day Split
                </button>
            </header>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 50px;">
                ${MockStats.teams.map(t => `
                    <div class="glass-card" style="padding: 25px; transition: var(--transition); cursor: pointer; border-bottom: 4px solid var(--accent);">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                            <div style="background: var(--primary-ultra-light); pading: 10px; border-radius: 12px; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;">
                                <i data-lucide="${t.logo}" style="color: var(--primary);"></i>
                            </div>
                            <span style="font-weight: 800; font-size: 1.5rem; color: var(--primary);">${t.pts} <span style="font-size: 0.8rem; opacity: 0.6;">PTS</span></span>
                        </div>
                        <h3 style="margin-bottom: 5px;">${t.name}</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted);">${t.players} Active Players</p>
                    </div>
                `).join('')}
            </div>

            <section class="glass-card" style="padding: 30px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                    <h2 style="color: var(--primary);">Metric Leaders</h2>
                    <div style="display: flex; gap: 10px;">
                        <span style="padding: 5px 12px; background: var(--primary-ultra-light); border-radius: 20px; font-size: 0.8rem; font-weight: 700; color: var(--primary);">Goals</span>
                        <span style="padding: 5px 12px; font-size: 0.8rem; color: var(--text-muted);">Assists</span>
                        <span style="padding: 5px 12px; font-size: 0.8rem; color: var(--text-muted);">Cards</span>
                    </div>
                </div>
                
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1px solid var(--border); color: var(--text-muted); font-size: 0.9rem;">
                            <th style="padding: 15px 0;">PLAYER</th>
                            <th>TEAM</th>
                            <th>GOALS</th>
                            <th>ASSISTS</th>
                            <th>CARDS</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${MockStats.topScorers.map(p => `
                            <tr style="border-bottom: 1px solid rgba(0,0,0,0.02); font-weight: 500;">
                                <td style="padding: 15px 0;">${p.name}</td>
                                <td style="color: var(--text-muted); font-size: 0.9rem;">${p.team}</td>
                                <td style="font-weight: 700;">${p.goals}</td>
                                <td>${p.assists}</td>
                                <td>
                                    <span style="color: #FFC107;">${p.cards.y}Y</span> 
                                    <span style="color: #F44336; margin-left: 5px;">${p.cards.r}R</span>
                                </td>
                                <td>
                                    ${p.cards.r > 0 ? '<span style="color: #F44336; font-size: 0.7rem; background: #FFEBEE; padding: 2px 8px; border-radius: 10px;">Suspended</span>' : '<span style="color: #4CAF50; font-size: 0.7rem; background: #E8F5E9; padding: 2px 8px; border-radius: 10px;">Active</span>'}
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </section>
        </div>
    `
};
