"use client";

import RacingInfo from "@/components/RacingInfo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CodesContext } from "@/context/CodesContext";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as yup from "yup";

function Racing() {
  const { codes } = useContext(CodesContext);
  const [confirm, setConfirm] = useState(false);

  const formik = useFormik({
    initialValues: {
      userCode: "",
    },
    onSubmit: (values) => {
      const confirmValue = codes.some((item) => item.code == values.userCode);
      setConfirm(confirmValue);
      setTimeout(() => {
        values.userCode = "";
        setConfirm(false);
      }, 30000);
    },
    validationSchema: yup.object({
      userCode: yup.string().required(),
    }),
  });
  return (
    <div className="w-full h-auto py-16">
      <div className="container mx-auto">
        {confirm ? (
          <RacingInfo />
        ) : (
          <form
            onSubmit={formik.handleSubmit}
            className="w-full h-[70px] lg:w-[50%] flex justify-center items-center gap-1 rounded-md text-center mx-auto shadow-md shadow-white py-3"
          >
            <Input
              type="number"
              id="userCode"
              placeholder="Enter Your Code"
              {...formik.getFieldProps("userCode")}
            />
            <Button className="rounded-md max-h-[41px] mt-[-5px]">Confirm</Button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Racing;
