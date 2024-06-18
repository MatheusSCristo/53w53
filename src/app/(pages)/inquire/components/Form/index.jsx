"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PiArrowRightThin } from "react-icons/pi";
import z from "zod";
import SelectClick from "../SelectClick";
import SelectInput from "../SelectInput";

const inputs = [
  { field: "first Name*", placeholder: "FIRST NAME" },
  { field: "last Name*", placeholder: "LAST NAME" },
  { field: "email*", placeholder: "EXAMPLE@PROVIDER.COM" },
  { field: "phone Number", placeholder: "NUMBER" },
  { field: "zip Code*", placeholder: "NUMBER" },
];

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid Email").min(1, "Email is required"),
  phoneNumber: z.string().optional(),
  zipCode: z.string().min(1, "Zip Code is required"),
  residenceType: z.string(),
  priceRange: z.string().optional(),
  broker: z.boolean().optional(),
  brokerRepresented: z.boolean().optional(),
  howDidYouHearAboutUs: z.string().optional(),
  comment: z.string().optional(),
});

const Form = () => {
  const onSubmit = () => {
    console.log("Enviado");
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input) => (
        <div
          className="flex flex-col border-t-[1px] border-b-[#8a6c6033] p-2 py-4 xl:p-4 "
          key={input.field}
        >
          <div className="flex gap-10">
            <span className="xl:text-xl font-semibold uppercase text-nowrap">
              {input.field}
            </span>
            <input
              type="text"
              placeholder={input.placeholder}
              className="flex-1 text-brown font-semibold placeholder-[#8a6c606e] text-nowrap"
              {...register(input.field.split(" ").join("").split("*")[0])}
            />
          </div>
          {errors[input.field.split(" ").join("").split("*")[0]] && (
            <span className="text-red-500 block">
              {errors[input.field.split(" ").join("").split("*")[0]].message}
            </span>
          )}
        </div>
      ))}
      <SelectInput
        setValue={setValue}
        select={{
          field: "RESIDENCE TYPE*",
          options: [
            "1 BEDROOM",
            "2 BEDROOM",
            "3 BEDROOM",
            "4 BEDROOM",
            "PENTHOUSE",
          ],
        }}
        field="residenceType"
      />
      <SelectInput
        setValue={setValue}
        select={{
          field: "PRICE RANGE",
          options: [
            "UNDER 5M",
            "$5-10M",
            "$10-20M",
            "$20-30M",
            "$30M AND ABOVE",
          ],
        }}
        field={"priceRange"}
      />
      <SelectClick
        text="ARE YOU A BROKER?"
        setValue={setValue}
        field="broker"
      />
      <SelectClick
        text="ARE YOU REPRESENTED BY A BROKER?"
        setValue={setValue}
        field={"brokerRepresented"}
      />
      <SelectInput
        select={{
          field: "HOW DID YOU HEARD ABOUT US?",
          options: [
            "BROKER DIRECT",
            "MAIL",
            "EBLAST",
            "ELLIMAN.COM",
            "FRIEND",
            "GOOGLE",
            "IN THE NEWS",
            "KNIGHT FRANK",
            "STREETEASY",
            "SITE SIGNAGE",
            "SOCIAL MEDIA",
            "OTHER",
          ],
        }}
        setValue={setValue}
        field={"howDidYouHearAboutUs"}
      />
      <textarea
        placeholder="COMMENT"
        className="border-b-[1px] border-b-[#8a6c6033] w-full p-4"
        {...register("comment")}
      ></textarea>
      <button
        type="submit"
        className="font-semibold items-center text-xl w-full bg-brown py-5 xl:py-10 text-white text-left px-10 flex justify-between hover:opacity-90 duration-200 transition"
      >
        SUBMIT FORM
        <PiArrowRightThin size={20} />
      </button>
    </form>
  );
};

export default Form;
