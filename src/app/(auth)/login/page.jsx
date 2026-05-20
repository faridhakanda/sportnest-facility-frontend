"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";


const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    
    const { data, error } = await authClient.signIn.email({
        email: user?.email,
        password: user?.password
    });
    if (data) {
        toast.success('User logged in successfully!');
        redirect("/");
    }
    if (error) {
        toast.error('Not recognized. If you have no account create one.');
    }
    console.log(user, 'user login date!');
  };
  
  
  return (
    <div className="border-1 border-slate-50 w-sm sm:w-md md:w-lg  shadow-sm mx-auto my-4  rounded-md">
      <Form
        className="flex w-sm sm:w-md md:w-lg flex-col px-4 py-4 m-2 gap-4 "
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={5}
          name="password"
          type="password"
          
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 5 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            
            return null;
          }}
        >
          <Label>Password</Label>
          
          <Input  placeholder="Enter your password" />
          

          
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
          
        </TextField>
        
        <div className="flex gap-2">
          <Button className={'w-full rounded-md'} type="submit">
            <Check />
            Login
          </Button>
          {/* <Button type="reset" variant="secondary">
            Reset
          </Button> */}
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;

// "use client";

// import { Check } from "@gravity-ui/icons";
// import {
//   Button,
//   Description,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "@heroui/react";

// const LoginPage = () => {
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const user = Object.fromEntries(formData.entries());
//     console.log(user, 'user login date!');
//   };

//   return (
//     <div className="border-1 border-slate-50  shadow-sm mx-auto my-4 px-4 py-4 rounded-md">
//       <Form
//         className="flex w-sm sm:w-md md:w-lg flex-col px-2 py-2 m-1 gap-4"
//         render={(props) => <form {...props} data-custom="foo" />}
//         onSubmit={handleLogin}
//       >
//         <TextField
//           isRequired
//           name="email"
//           type="email"
//           validate={(value) => {
//             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//               return "Please enter a valid email address";
//             }

//             return null;
//           }}
//         >
//           <Label>Email</Label>
//           <Input placeholder="john@example.com" />
//           <FieldError />
//         </TextField>

//         <TextField
//           isRequired
//           minLength={8}
//           name="password"
//           type="password"
//           validate={(value) => {
//             if (value.length < 8) {
//               return "Password must be at least 8 characters";
//             }
//             if (!/[A-Z]/.test(value)) {
//               return "Password must contain at least one uppercase letter";
//             }
//             if (!/[0-9]/.test(value)) {
//               return "Password must contain at least one number";
//             }

//             return null;
//           }}
//         >
//           <Label>Password</Label>
//           <Input placeholder="Enter your password" />
//           <Description>
//             Must be at least 8 characters with 1 uppercase and 1 number
//           </Description>
//           <FieldError />
//         </TextField>
        
//         <div className="flex gap-2">
//           <Button type="submit">
//             <Check />
//             Submit
//           </Button>
//           <Button type="reset" variant="secondary">
//             Reset
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default LoginPage;
