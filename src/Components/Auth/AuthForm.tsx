"use client"

import type React from "react"
import { useState, forwardRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Lock, User, ArrowRight, BabyIcon, MapPin, UserCircle } from "lucide-react"

import { loginUser, registerUser } from "../../Features/Users/userSlice"
import { AppDispatch, RootState } from "../../App/Store"

// Utility to join class names
function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ")
}

// Button component
const Button = forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" }
>(({ className, variant = "default", children, ...props }, ref) => {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
                variant === "default"
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
                    : "border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4",
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
})
Button.displayName = "Button"

// Input component
const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ className, ...props }, ref) => {
        return (
            <input
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

// Label component
const Label = forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
    ({ className, ...props }, ref) => {
        return (
            <label
                ref={ref}
                className={cn(
                    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    className
                )}
                {...props}
            />
        )
    }
)
Label.displayName = "Label"

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className="mx-auto w-full h-full rounded-xl bg-gray-200 p-8 shadow-xl">
            <div className="mb-8 flex items-center justify-center">
                <div className="relative flex h-12 w-full max-w-xs overflow-hidden rounded-lg p-1 shadow-sm">
                    <div
                        className={cn(
                            "absolute inset-0 z-0 w-1/2 transform rounded-md bg-blue-600 transition-transform duration-300 ease-in-out",
                            isLogin ? "translate-x-0" : "translate-x-full"
                        )}
                    />
                    <button
                        onClick={() => setIsLogin(true)}
                        className={cn(
                            "relative z-10 flex w-1/2 items-center justify-center rounded-md py-2 text-sm font-medium transition-colors duration-300",
                            isLogin ? "text-white" : "text-gray-700 hover:text-blue-600"
                        )}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={cn(
                            "relative z-10 flex w-1/2 items-center justify-center rounded-md py-2 text-sm font-medium transition-colors duration-300",
                            !isLogin ? "text-white" : "text-gray-700 hover:text-blue-600"
                        )}
                    >
                        Register
                    </button>
                </div>
            </div>

            <div className="relative flex items-center justify-center  overflow-hidden">
                <AnimatePresence mode="wait">
                    {isLogin ? <LoginForm key="login" /> : <RegisterForm key="register" />}
                </AnimatePresence>
            </div>
        </div>
    )
}

function LoginForm() {
    const dispatch = useDispatch<AppDispatch>()
    const { loading, error } = useSelector((state: RootState) => state.auth)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(loginUser({ email, password }))
    }

    return (
        <motion.div
            className=" inset-0 flex w-full flex-col items-center justify-center px-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold">Welcome back</h2>
                <p className="text-sm text-gray-500">Enter your credentials to access your account</p>
            </div>

            <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="login-email" type="email" className="pl-10" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="login-password" type="password" className="pl-10" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700" disabled={loading}>
                    {loading ? "Signing in..." : "Sign in"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </form>
        </motion.div>
    )
}

function RegisterForm() {
    const dispatch = useDispatch<AppDispatch>()
    const { loading, error } = useSelector((state: RootState) => state.auth)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [DOB, setDOB] = useState("")
    const [gender, setGender] = useState("")
    const [address, setAddress] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(registerUser({ name, email, password, DOB, gender, address, image }))
    }

    return (
        <motion.div
            className=" inset-0 flex w-full flex-col items-center justify-center px-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
        >
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold">Create an account</h2>
                <p className="text-sm text-gray-500">Enter your details to register</p>
            </div>

            <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <Label htmlFor="register-name">Full Name</Label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="register-name" type="text" className="pl-10" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>


                <div className="space-y-2">
                    <Label htmlFor="register-DOB">Your Image</Label>
                    <div className="relative">
                        <UserCircle className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="register-DOB" type="file" className="pl-10" value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="register-email" type="email" className="pl-10" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="flex gap-2 w-full">
                    <div className="space-y-2">
                        <Label htmlFor="register-password">Enter Password</Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input id="register-password" type="password" className="pl-10" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="register-c-password">Re enter Password</Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input id="register-c-password" type="password" className="pl-10" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="register-DOB">Enter Date of Birth</Label>
                    <div className="relative">
                        <BabyIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="register-DOB" type="date" className="pl-10" value={DOB} onChange={(e) => setDOB(e.target.value)} />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="register-gender">Gender</Label>
                    <div className="flex items-center gap-6 pl-2">
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="gender-male"
                                name="gender"
                                value="Male"
                                checked={gender === "Male"}
                                onChange={(e) => setGender(e.target.value)}
                                className="accent-blue-500"
                            />
                            <Label htmlFor="gender-male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="gender-female"
                                name="gender"
                                value="Female"
                                checked={gender === "Female"}
                                onChange={(e) => setGender(e.target.value)}
                                className="accent-pink-500"
                            />
                            <Label htmlFor="gender-female">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="gender-other"
                                name="gender"
                                value="Other"
                                checked={gender === "Other"}
                                onChange={(e) => setGender(e.target.value)}
                                className="accent-purple-500"
                            />
                            <Label htmlFor="gender-other">Other</Label>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="register-address">Enter Address</Label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="register-address" type="text" className="pl-10" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                </div>





                {error && <p className="text-sm text-red-500">{error}</p>}

                <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700" disabled={loading}>
                    {loading ? "Creating account..." : "Create account"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </form>
        </motion.div>
    )
}
