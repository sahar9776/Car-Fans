"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";
import * as yup from "yup";

function Contact() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      description: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: yup.object({
      username: yup.string().max(15).min(3).required(),
      email: yup.string().email("invalid email").required(),
      description: yup.string().max(1000).min(3).required(),
    }),
  });

  return (
    <div className="w-screen h-screen">
      <div className="container mx-auto py-8">
        <div className="w-full  xl:w-[50%] px-2 xl:px-0">
          <h2 className="h2">Contact Us</h2>
          <p className="max-w-[500px] mb-9 text-white/80">
            Here you can enter your comments, suggestions or criticisms
          </p>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              id="username"
              placeholder="sahar76"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500">{formik.errors.username}</div>
            ) : null}

            <Input
              id="email"
              type="email"
              placeholder="sahar76@gmail.com"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}

            <Textarea
              id="description"
              placeholder="Write your comments"
              {...formik.getFieldProps("description")}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="text-red-500">{formik.errors.description}</div>
            ) : null}

            <Button
              type="submit"
              variant="outline"
              size="lg"
              className="uppercase"
            >
              send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
