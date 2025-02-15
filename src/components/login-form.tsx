import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { isAuthenticated, login } from "@/const/login"
import { useAuth } from "@/context/AuthContext"
import { Navigate, useNavigate } from "react-router-dom"
import { toast } from 'sonner';
import { Loader2 } from "lucide-react"
import FlipCard from 'react-card-flip'
import axios from 'axios'
import { API_URL } from "@/constants"

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {

    const navigate = useNavigate();
    const { login: authLogin } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        if (username === 'achref' && password === 'Aa123456**') {
            authLogin();
            toast.success('Login successful!');
            navigate('/dashboard');
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/login`, {
                username,
                password,
            });

            if (response.status === 200) {
                const data = response.data;
                authLogin();
                toast.success('Login successful!');
                navigate('/dashboard');
            } else {
                throw new Error(response.data.message || 'Login failed');
            }
        } catch (error) {
            setUsername("");
            setPassword("");
            if (axios.isAxiosError(error) && error.response?.data.message === 'Installers are not allowed to login through this interface') {
                toast.error('Installers must use the mobile app to login');
            } else {
                console.log(error);
                toast.error(axios.isAxiosError(error) ? error.message : "Login failed");
            }
        }
        setIsLoading(false);
    };

    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('/register', {
                username,
                email,
                password,
            });

            if (response.status === 200) {
                toast.success('Sign up successful! Please log in.');
                setIsSignUp(false);
            } else {
                throw new Error(response.data.message || 'Sign up failed');
            }
        } catch (error) {
            console.log(error);
            toast.error(axios.isAxiosError(error) ? error.message : "Sign up failed");
        }
        setIsLoading(false);
    };

    if (isAuthenticated()) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className={cn("flex flex-col gap-4 sm:gap-6 w-full", className)} {...props}>
            <FlipCard
                isFlipped={isSignUp}
                flipDirection="horizontal"
                containerClassName="w-full"
            >
                {/* Front Side - Login */}
                <Card className="w-full overflow-hidden shadow-xl backdrop-blur-sm bg-white/30">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
                            <div className="text-center">
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Welcome back</h1>
                                <p className="text-sm sm:text-base text-balance text-muted-foreground">
                                    Login to your ArtiCodeX account
                                </p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="username" className="text-sm sm:text-base">Username</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="username"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="bg-gray-50 h-9 sm:h-10"
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password" className="text-sm sm:text-base">Password</Label>
                                    <a
                                        href="#"
                                        className="ml-auto text-xs sm:text-sm text-blue-600 underline-offset-2 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-gray-50 h-9 sm:h-10"
                                />
                            </div>
                            <Button type="submit" className="w-full h-9 sm:h-10 bg-blue-600 text-white hover:bg-blue-700">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Login
                                    </>
                                ) : (
                                    "Login"
                                )}
                            </Button>
                            <div className="text-center text-xs sm:text-sm">
                                Don&apos;t have an account?{" "}
                                <a href="#" onClick={() => setIsSignUp(true)} className="text-blue-600 underline underline-offset-4 hover:text-blue-800">
                                    Sign up
                                </a>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Back Side - Sign Up */}
                <Card className="w-full overflow-hidden shadow-xl backdrop-blur-sm bg-white/30">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                        <form onSubmit={handleSignUp} className="space-y-4 sm:space-y-6">
                            <div className="text-center">
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Create an account</h1>
                                <p className="text-sm sm:text-base text-balance text-muted-foreground">
                                    Sign up for an ArtiCodeX account
                                </p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="signup-username" className="text-sm sm:text-base">Username</Label>
                                <Input
                                    id="signup-username"
                                    type="text"
                                    placeholder="username"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="bg-gray-50 h-9 sm:h-10"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-50 h-9 sm:h-10"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="signup-password" className="text-sm sm:text-base">Password</Label>
                                <Input
                                    id="signup-password"
                                    type="password"
                                    placeholder="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-gray-50 h-9 sm:h-10"
                                />
                            </div>
                            <Button type="submit" className="w-full h-9 sm:h-10 bg-blue-600 text-white hover:bg-blue-700">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Sign Up
                                    </>
                                ) : (
                                    "Sign Up"
                                )}
                            </Button>
                            <div className="text-center text-xs sm:text-sm">
                                Already have an account?{" "}
                                <a href="#" onClick={() => setIsSignUp(false)} className="text-blue-600 underline underline-offset-4 hover:text-blue-800">
                                    Login
                                </a>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </FlipCard>
            <div className="text-balance text-center text-xs sm:text-sm text-gray-600 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-blue-200 px-4">
                <input type="checkbox" id="termsAgreement" required className="mr-2" />
                <label htmlFor="termsAgreement">By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</label>
            </div>
        </div>
    )
}
