/**
 * Match Day AI Splitter
 */

export const AI = {
    generateMatchTeams(players) {
        // Mock sorting logic: Balance by position and preferred foot
        const sorted = [...players].sort((a, b) => 0.5 - Math.random());
        const teams = [[], [], [], []];

        // Distribution logic based on position logic
        sorted.forEach((p, i) => {
            teams[i % 4].push(p);
        });

        return teams;
    },

    getMatchView(teams) {
        return `
            <div class="animate-fade-in">
                <header style="margin-bottom: 40px;">
                    <h1 style="color: var(--primary);">Match Day AI Split</h1>
                    <p style="color: var(--text-muted);">Optimal 4-team split based on available player stats and positions.</p>
                </header>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
                    ${teams.map((team, idx) => `
                        <div class="glass-card" style="padding: 20px;">
                            <h3 style="color: var(--primary); border-bottom: 2px solid var(--accent); padding-bottom: 10px; margin-bottom: 15px; display: flex; justify-content: space-between;">
                                Team ${idx + 1}
                                <span style="font-size: 0.8rem; background: var(--primary-ultra-light); padding: 2px 10px; border-radius: 10px;">${team.length} Players</span>
                            </h3>
                            <ul style="list-style: none;">
                                ${team.map(p => `
                                    <li style="padding: 10px 0; border-bottom: 1px solid rgba(0,0,0,0.02); display: flex; justify-content: space-between; align-items: center;">
                                        <div>
                                            <div style="font-weight: 600;">${p.name}</div>
                                            <div style="font-size: 0.7rem; color: var(--text-muted);">${p.pos} • ${p.foot} Foot</div>
                                        </div>
                                        <i data-lucide="user" size="14" style="opacity: 0.3;"></i>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
                
                <div style="margin-top: 40px; padding: 20px; background: var(--primary-ultra-light); border-radius: var(--radius); text-align: center;">
                    <button class="btn-outline" data-action="show-teams">Confirm Teams & Begin Match</button>
                </div>
            </div>
        `;
    }
};

export const StaticViews = {
    market: `
        <div class="animate-fade-in">
            <h1 style="color: var(--primary); margin-bottom: 30px;">Team Marketplace</h1>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px;">
                <div class="glass-card" style="overflow: hidden;">
                    <div style="height: 180px; background: #eee; display: flex; align-items: center; justify-content: center; color: #ccc;"><i data-lucide="image" size="48"></i></div>
                    <div style="padding: 20px;">
                        <h4 style="margin-bottom: 5px;">Pro Team Jersey 2024</h4>
                        <p style="color: var(--primary); font-weight: 700; margin-bottom: 15px;">$45.00</p>
                        <button class="btn-primary" style="width: 100%; font-size: 0.9rem;">Add to Cart</button>
                    </div>
                </div>
                <!-- ... More items ... -->
            </div>
        </div>
    `,
    subscription: `
        <div class="animate-fade-in" style="max-width: 800px; margin: 0 auto; text-align: center;">
            <h1 style="color: var(--primary); margin-bottom: 10px;">Choose Your Plan</h1>
            <p style="color: var(--text-muted); margin-bottom: 40px;">Scale your team management with elite features.</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                <div class="glass-card" style="padding: 40px; border-top: 8px solid var(--accent);">
                    <h3>Free Kick</h3>
                    <p style="font-size: 2rem; font-weight: 800; margin: 20px 0;">$0 <span style="font-size: 0.9rem; opacity: 0.4;">/mo</span></p>
                    <ul style="text-align: left; margin-bottom: 30px; list-style: none; color: var(--text-muted);">
                        <li>✓ Up to 15 Players</li>
                        <li>✓ Basic Match Logging</li>
                        <li>✓ Light Theme</li>
                    </ul>
                    <button class="btn-outline" style="width: 100%;">Current Plan</button>
                </div>
                <div class="glass-card" style="padding: 40px; border-top: 8px solid var(--primary); position: relative;">
                    <span style="position: absolute; top: -15px; right: 20px; background: var(--primary); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.7rem; font-weight: 700;">PRO</span>
                    <h3>Championship</h3>
                    <p style="font-size: 2rem; font-weight: 800; margin: 20px 0;">$19 <span style="font-size: 0.9rem; opacity: 0.4;">/mo</span></p>
                    <ul style="text-align: left; margin-bottom: 30px; list-style: none; color: var(--text-muted);">
                        <li>✓ Unlimited Players</li>
                        <li>✓ AI Team Splitting</li>
                        <li>✓ Advanced Market Access</li>
                        <li>✓ Priority Support</li>
                    </ul>
                    <button class="btn-primary" style="width: 100%;">Upgrade Now</button>
                </div>
            </div>
        </div>
    `,
    sla: `
        <div class="animate-fade-in glass-card" style="padding: 50px; max-width: 800px; margin: 0 auto;">
            <h1 style="color: var(--primary); margin-bottom: 20px;">Service Level Agreement</h1>
            <div style="color: var(--text-muted); line-height: 1.8;">
                <h3 style="color: var(--text-main); margin-top: 25px;">1. Availability</h3>
                <p>PitchMaster guarantees a 99.9% uptime for all core management features, including AI team splitting and match-day logging.</p>
                <h3 style="color: var(--text-main); margin-top: 25px;">2. Support Response</h3>
                <p>Pro users will receive technical support responses within 4 hours. Free users will be addressed within 48 business hours.</p>
                <h3 style="color: var(--text-main); margin-top: 25px;">3. Data Integrity</h3>
                <p>We perform daily backups of all team statistics and player profiles to ensure total recovery in the event of system failures.</p>
            </div>
        </div>
    `
};
