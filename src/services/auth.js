import SERVICE_URLS from "../constants/service_urls";

const AuthService = {
    async login (email, password) {
        const response = await fetch(SERVICE_URLS.AUTH_URL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        return data;
    },

    // Kullanıcı kaydı (register)
    async register(fullName, email, phone, password) {
        const response = await fetch(SERVICE_URLS.AUTH_URL + '/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullName, email, phone, password }),
        });

        if (!response.ok) {
            throw new Error('Register failed');
        }

        const data = await response.json();
        return data;
    },

    // E-posta doğrulama isteği gönder (isteğe bağlı)
    async sendVerificationEmail(email) {
        const response = await fetch(SERVICE_URLS.AUTH_URL + '/send-verification-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            throw new Error('Verification email sending failed');
        }

        const data = await response.json();
        return data;
    },

    // Token ile e-posta doğrulama
    async verifyEmail(token) {
        const response = await fetch(SERVICE_URLS.AUTH_URL + `/verify-email/${token}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Email verification failed');
        }

        const data = await response.json();
        return data;
    },

    // Şifremi unuttum (şifre sıfırlama e-postası gönderme)
    async forgotPassword(email) {
        const response = await fetch(SERVICE_URLS.AUTH_URL + '/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            throw new Error('Forgot password failed');
        }

        const data = await response.json();
        return data;
    },

    // Şifre sıfırlama işlemi (kullanıcı yeni şifreyi gönderir)
    async resetPassword(token, newPassword) {
        const response = await fetch(SERVICE_URLS.AUTH_URL + `/reset-password/${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: newPassword }),
        });

        if (!response.ok) {
            throw new Error('Password reset failed');
        }

        const data = await response.json();
        return data;
    },
};

export default AuthService;



    // register service
    // send-verification-email
    // verify-email/:token
    // forgot-password
    // reset-password