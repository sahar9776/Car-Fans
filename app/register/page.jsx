"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter();

  const postCode = async (code) => {
    await fetch("http://localhost:8000/codes", {
      method: "Post",
      body: JSON.stringify(code),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      age: "",
      birthCertificateNumber: "",
      phoneNumber: "",
      email: "",
      carName: "",
      carCode: "",
    },
    onSubmit: async (values) => {
      const code = parseInt(Math.random() * 1000000);
      postCode({code});
      alert(`Copy this code : ${code}`);
      router.push("/");
    },
    validationSchema: yup.object({
      firstname: yup.string().max(15).min(3).required(),
      lastname: yup.string().max(15).min(3).required(),
      age: yup.string().max(2).min(2).required(),
      birthCertificateNumber: yup.string().max(10).min(10).required(),
      phoneNumber: yup.string().max(13).min(13).required(),
      email: yup.string().email("invalid email").required(),
      carName: yup.string(),
      carCode: yup.string(),
    }),
  });

  return (
    <div className="w-full h-auo py-16">
      <div className="container mx-auto">
        <h2 className="h2">
          Register in <span className="text-accent">Race</span>
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          className="max-w-full h-auto my-10"
        >
          <div className="min-w-full h-auto mb-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-10">
            <div className="flex flex-col gap-1">
              <Input
                type="text"
                id="firstname"
                label="firstname"
                placeholder="sahar"
                {...formik.getFieldProps("firstname")}
              />
              {formik.touched.firstname && formik.errors.firstname ? (
                <div className="text-red-500">{formik.errors.firstname}</div>
              ) : null}
            </div>

            <div className="flex flex-col gap-1">
              <Input
                type="text"
                id="lastname"
                label="lastname"
                placeholder="samadi"
                {...formik.getFieldProps("lastname")}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <div className="text-red-500">{formik.errors.lastname}</div>
              ) : null}
            </div>

            <div className="flex flex-col gap-1">
              <Input
                type="number"
                id="age"
                label="age"
                {...formik.getFieldProps("age")}
              />
              {formik.touched.age && formik.errors.age ? (
                <div className="text-red-500">{formik.errors.age}</div>
              ) : null}
            </div>

            <div className="flex flex-col gap-1">
              <Input
                type="number"
                id="birthCertificateNumber"
                label="birth Certificate Number"
                placeholder="3241809653"
                {...formik.getFieldProps("birthCertificateNumber")}
              />
              {formik.touched.birthCertificateNumber &&
              formik.errors.birthCertificateNumber ? (
                <div className="text-red-500">
                  {formik.errors.birthCertificateNumber}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col gap-1">
              <Input
                type="tel"
                id="phoneNumber"
                label="phone Number"
                placeholder="+989910730000"
                {...formik.getFieldProps("phoneNumber")}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-red-500">{formik.errors.phoneNumber}</div>
              ) : null}
            </div>

            <div className="flex flex-col gap-1">
              <Input
                type="email"
                id="email"
                label="email"
                placeholder="sahar@gmail.com"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="flex flex-col gap-1">
              <Input
                type="text"
                id="carName"
                label="car Name"
                placeholder="SSC Ultimate Aero TT"
                {...formik.getFieldProps("carName")}
              />
              {formik.touched.carName && formik.errors.carName ? (
                <div className="text-red-500">{formik.errors.carName}</div>
              ) : null}
            </div>

            <div className="flex flex-col gap-1">
              <Input
                type="text"
                id="carCode"
                label="car Code"
                placeholder="256.1 MPH"
                {...formik.getFieldProps("carCode")}
              />
              {formik.touched.carCode && formik.errors.carCode ? (
                <div className="text-red-500">{formik.errors.carCode}</div>
              ) : null}{" "}
            </div>
          </div>
          {/* button  */}
          <Button
            variant="outline"
            size="lg"
            className="uppercase max-w-[200px]"
          >
            register
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Register;
