import GoogleIcon from '../icons/GoogleIcon';
import '../styles/Form.css';

function LoginForm() {
    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-modal">&times;</button>
                <form className="login-form">
                    <h2>Login to Vortex PDF</h2>
                    <div className="form-group">
                        <label htmlFor="email">Username</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit" className="submit-btn">Login</button>

                    <div className="form-divider">
                        <span>or</span>
                    </div>

                    <button type="button" className="google-btn">
                        <GoogleIcon />
                        Continue with Google
                    </button>

                    <div className="form-footer">
                        <p>Don't have an account? <a href="https://example.com/signup">Sign up</a></p>
                        <p><a href="https://example.com/forgot-password">Forgot password?</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm