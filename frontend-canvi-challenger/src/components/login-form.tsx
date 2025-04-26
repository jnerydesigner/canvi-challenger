import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { FetchLogin } from "@/api/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { data, isLoading } = useQuery({
    queryKey: ["login"],
    queryFn: () => FetchLogin(),
  });

  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {
    if (data?.token) {
      localStorage.setItem("token", data.token);
      console.log("Token salvo no localStorage!");
      navigate("/dashboard");
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-full bg-gray-300">
        <h2>Carregando</h2>
      </div>
    );
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <div>
            <img src="/canvi.png" alt="logo da empresa canvi" />
          </div>
          <CardTitle>Login na sua conta</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              {/* <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div> */}
              <div className="grid gap-3">
                {/* <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div> */}
                {/* <Input id="password" type="password" required /> */}
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full cursor-pointer">
                  Login
                </Button>
                {/* <Button variant="outline" className="w-full">
                  Login with Google
                </Button> */}
              </div>
            </div>
            {/* <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div> */}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
