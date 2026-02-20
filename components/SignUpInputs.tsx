import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type SetString = React.Dispatch<React.SetStateAction<string>>;

interface IInputs {
  name: string;
  email: string;
  password: string;
  setName: SetString;
  setEmail: SetString;
  setPassword: SetString;
}

const SignUpInputs = ({
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
}: IInputs) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-700">
          Name
        </Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          placeholder="John Doe..."
          required
          className="border-gray-300 focus:border-primary focus:ring-primary"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-700">
          Email
        </Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="john@example.com"
          required
          className="border-gray-300 focus:border-primary focus:ring-primary"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-gray-700">
          Password
        </Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
          type="password"
          id="password"
          required
          className="border-gray-300 focus:border-primary focus:ring-primary"
        />
      </div>
    </>
  );
};

export default SignUpInputs;
