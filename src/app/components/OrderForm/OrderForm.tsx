"use client";
import { orderSchema } from "@/schemas/validation.schema";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createCustomer,
  getOneCustomer,
  getOneCustomerByEmail,
  getOneUser,
} from "@/api/data.api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useOrderStore } from "@/store/order-store";
import { PaymentForm } from "../PaymentForm/PaymentForm";
import { getCookie } from "@/app/actions";

type Input = {
  name: string;
  state_province: string;
  city: string;
  lastname: string;
  country: string;
  email: string;
  address: string;
  phone: string;
};

export function OrderForm() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { isConfirm, updateOrderState } = useOrderStore();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const verifyCustomer = async () => {
      const cookie = await getCookie();
      const user = await getOneUser(cookie.username);
      setUserEmail(user?.data.email);
      const customer = await getOneCustomerByEmail(user?.data.email);
      if (customer?.data !== "") {
        updateOrderState(true);
      } else {
        updateOrderState(false);
      }
    };
    verifyCustomer();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ resolver: zodResolver(orderSchema) });
  const onSubmit: SubmitHandler<Input> = async (data) => {
    try {
      setIsLoading(true);
      setIsLoading(false);
      const cookie = await getCookie();
      // console.log(cookie.id);
      const user = await getOneUser(cookie.username);
      if (user) {
        if (user.data.email === data.email) {
          createCustomer({
            name: data.name,
            state_province: data.state_province,
            city: data.city,
            lastname: data.lastname,
            country: data.country,
            email: data.email,
            address: data.address,
            phone: data.phone,
            userId: cookie.id,
          });
          toast("Successful Purchase");
        } else {
          alert("The email does not correspond to a registered user");
        }
      }

      updateOrderState(true);

      //   router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return !isConfirm ? (
    <div className="min-h-[500px] flex flex-col shadow min-w-[80%] items-center justify-center rounded gap-5 p-5 sm:w-full sm:px-1">
      <h3 className="text-2xl font-bold sm:text-base">Order Form</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-5 w-full"
      >
        <div className="flex w-full justify-center gap-5 2xs:flex-col">
          <div className="flex flex-col gap-5 sm:text-xs">
            <input
              placeholder="name..."
              {...register("name")}
              className="border rounded p-1"
              id="name"
            />
            <div className="text-red-600 2xs:text-center">
              {errors.name?.message && <span>{errors.name?.message}</span>}
            </div>
            <input
              placeholder="lastname..."
              {...register("lastname")}
              className="border rounded p-1"
              id="lastname"
            />
            <div className="text-red-600 2xs:text-center">
              {errors.lastname?.message && (
                <span>{errors.lastname?.message}</span>
              )}
            </div>
            <input
              placeholder="email..."
              value={userEmail}
              {...register("email")}
              className="border rounded p-1"
              id="email"
            />
            <div className="text-red-600 2xs:text-center">
              {errors.email?.message && <span>{errors.email?.message}</span>}
            </div>
            <input
              placeholder="country..."
              {...register("country")}
              className="border rounded p-1"
              id="country"
            />
            <div className="text-red-600 2xs:text-center">
              {errors.country?.message && (
                <span>{errors.country?.message}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-5 sm:text-xs">
            <input
              placeholder="state_province..."
              {...register("state_province")}
              className="border rounded p-1"
              id="state_province"
            />
            <div className="text-red-600 2xs:text-center">
              {errors.state_province?.message && (
                <span>{errors.state_province?.message}</span>
              )}
            </div>
            <input
              placeholder="city"
              {...register("city")}
              className="border rounded p-1"
              id="city"
            />
            <div className="text-red-600 2xs:text-center">
              {errors.city?.message && <span>{errors.city?.message}</span>}
            </div>
            <input
              placeholder="address..."
              {...register("address")}
              className="border rounded p-1"
              id="address"
            />
            <div className="text-red-600 2xs:text-center">
              {errors.address?.message && (
                <span>{errors.address?.message}</span>
              )}
            </div>
            <input
              placeholder="phone..."
              {...register("phone")}
              className="border rounded p-1"
              id="phone"
              type="number"
            />
            <div className="text-red-600 2xs:text-center">
              {errors.phone?.message && <span>{errors.phone?.message}</span>}
            </div>
          </div>
        </div>

        <div className="border-t w-full flex justify-center items-center p-5">
          <Button
            type="submit"
            className="hover:cursor-pointer sm:text-xs sm:h-8"
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  ) : (
    <PaymentForm />
  );
}
