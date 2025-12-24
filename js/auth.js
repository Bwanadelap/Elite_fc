/**
 * Auth & Onboarding Components
 */

export const AuthViews = {
    signup: `
        <div class="animate-fade-in" style="max-width: 450px; margin: 40px auto; padding: 40px;" class="glass-card">
            <h2 style="font-size: 2rem; margin-bottom: 10px; color: var(--primary);">Create Account</h2>
            <p style="color: var(--text-muted); margin-bottom: 30px;">Join the elite football community.</p>
            
            <form id="signup-form" style="display: flex; flex-direction: column; gap: 20px;">
                <div class="form-group">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Full Name</label>
                    <input type="text" name="name" placeholder="John Doe" required style="width: 100%; padding: 12px; border-radius: var(--radius); border: 1px solid var(--border); outline: none;">
                </div>
                <div class="form-group">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Email Address</label>
                    <input type="email" name="email" placeholder="john@example.com" required style="width: 100%; padding: 12px; border-radius: var(--radius); border: 1px solid var(--border); outline: none;">
                </div>
                <div class="form-group">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Password</label>
                    <input type="password" name="password" placeholder="••••••••" required style="width: 100%; padding: 12px; border-radius: var(--radius); border: 1px solid var(--border); outline: none;">
                </div>
                <button type="submit" class="btn-primary" style="margin-top: 10px;">Create Account</button>
            </form>
            
            <p style="text-align: center; margin-top: 20px; font-size: 0.9rem; color: var(--text-muted);">
                Already have an account? <a href="#" data-action="show-login" style="color: var(--primary); font-weight: 600;">Sign In</a>
            </p>
        </div>
    `,

    onboarding: `
        <div class="animate-fade-in" style="max-width: 600px; margin: 20px auto; padding: 40px;" class="glass-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                <div>
                    <h2 style="font-size: 1.8rem; color: var(--primary);">Player Profile</h2>
                    <p style="color: var(--text-muted);">Complete your stats for auto-team selection.</p>
                </div>
                <div style="background: var(--primary-ultra-light); color: var(--primary); padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 700;">STEP 1/2</div>
            </div>
            
            <form id="onboarding-form" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <!-- Basic Info -->
                <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 10px; margin-bottom: 10px;">
                    <h3 style="font-size: 1rem; color: var(--primary);">Basic Information</h3>
                </div>
                <div class="form-group">
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Phone Number</label>
                    <input type="tel" name="phone" placeholder="+1..." style="width: 100%; padding: 10px; border-radius: var(--radius); border: 1px solid var(--border);">
                </div>
                <div class="form-group">
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Job/Occupation</label>
                    <input type="text" name="job" placeholder="Software Engineer" style="width: 100%; padding: 10px; border-radius: var(--radius); border: 1px solid var(--border);">
                </div>
                <div class="form-group" style="grid-column: span 2;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Address</label>
                    <input type="text" name="address" placeholder="123 Pitch St, London" style="width: 100%; padding: 10px; border-radius: var(--radius); border: 1px solid var(--border);">
                </div>

                <!-- Athletic Info -->
                <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 10px; margin-top: 20px; margin-bottom: 10px;">
                    <h3 style="font-size: 1rem; color: var(--primary);">Athletic Metrics</h3>
                </div>
                <div class="form-group">
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Height (cm)</label>
                    <input type="number" name="height" placeholder="180" style="width: 100%; padding: 10px; border-radius: var(--radius); border: 1px solid var(--border);">
                </div>
                <div class="form-group">
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Weight (kg)</label>
                    <input type="number" name="weight" placeholder="75" style="width: 100%; padding: 10px; border-radius: var(--radius); border: 1px solid var(--border);">
                </div>
                <div class="form-group">
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Preferred Foot</label>
                    <select name="foot" style="width: 100%; padding: 10px; border-radius: var(--radius); border: 1px solid var(--border); background: white;">
                        <option value="right">Right</option>
                        <option value="left">Left</option>
                        <option value="both">Ambidextrous</option>
                    </select>
                </div>
                <div class="form-group">
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Primary Position</label>
                    <select name="pos1" style="width: 100%; padding: 10px; border-radius: var(--radius); border: 1px solid var(--border); background: white;">
                        <option value="GK">Goalkeeper</option>
                        <option value="DEF">Defender</option>
                        <option value="MID">Midfielder</option>
                        <option value="FWD">Forward</option>
                    </select>
                </div>
                <div class="form-group" style="grid-column: span 2;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Secondary Position</label>
                    <select name="pos2" style="width: 100%; padding: 10px; border-radius: var(--radius); border: 1px solid var(--border); background: white;">
                        <option value="NONE">None</option>
                        <option value="GK">Goalkeeper</option>
                        <option value="DEF">Defender</option>
                        <option value="MID">Midfielder</option>
                        <option value="FWD">Forward</option>
                    </select>
                </div>

                <div style="grid-column: span 2; margin-top: 20px;">
                    <button type="submit" class="btn-primary" style="width: 100%;">Complete Profile</button>
                </div>
            </form>
        </div>
    `
};
