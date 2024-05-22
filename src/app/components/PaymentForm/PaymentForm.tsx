"use client";
import { paymentSchema } from "@/schemas/validation.schema";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useOrderStore } from "@/store/order-store";
import {
  createOrder,
  createOrderProduct,
  getOneCustomerByEmail,
  getOneUser,
} from "@/api/data.api";
import { useCartStore } from "@/store/cart-store";
import { getCookie } from "@/app/actions";

type Input = {
  cardNumber: string;
  pin: string;
  expirationDate: string;
};

export function PaymentForm() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { updateOrderState } = useOrderStore();
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [tipoTarjeta, setTipoTarjeta] = useState("");
  const { cartItems, removeAllItemsFromCart } = useCartStore();

  const handleInputChange = (event: any) => {
    const { value } = event.target;
    // Limpiamos el valor de la tarjeta de espacios en blanco y guiones
    const cleanedValue = value.replace(/[\s-]/g, "");

    // // Actualizamos el estado con el número de tarjeta limpio
    setNumeroTarjeta(cleanedValue);

    let newTipoTarjeta = "";
    if (/^4/.test(cleanedValue)) {
      newTipoTarjeta = "Visa";
    } else if (/^5[1-5]/.test(cleanedValue)) {
      newTipoTarjeta = "Mastercard";
    }
    // console.log(numeroTarjeta);
    setTipoTarjeta(newTipoTarjeta);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ resolver: zodResolver(paymentSchema) });
  const onSubmit: SubmitHandler<Input> = async (data) => {
    try {
      setIsLoading(true);
      const cookie = await getCookie();
      const user = await getOneUser(cookie.username);
      const customer = await getOneCustomerByEmail(user?.data.email);
      if (typeof window !== "undefined") {
        const savedCartItems = localStorage.getItem("cartItems");
        const cartItems = savedCartItems ? JSON.parse(savedCartItems) : [];
        const total = cartItems.reduce(
          (acc: any, item: any) => acc + item.price * item.amount,
          0
        );
        const order = await createOrder({
          total: total,
          customerId: customer?.data.id,
        });
        // console.log(order?.data);

        cartItems.forEach(async (item: any) => {
          await createOrderProduct({
            orderId: order?.data.id,
            productId: item.productId,
            amount: item.amount,
          });
        });

        toast("Successful Purchase");
        setIsLoading(false);
        removeAllItemsFromCart();
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-[500px] flex flex-col shadow min-w-[80%] items-center justify-center rounded gap-5 p-5 sm:w-full xs:px-1">
      <h3 className="text-2xl font-bold sm:text-base">Payment Form</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-5 w-full"
      >
        <div className="flex w-full min-h-[80px] justify-center  gap-5 lg:flex-col">
          <div className="flex flex-col items-center gap-1 lg:items-start">
            <div className="flex gap-2 relative sm:w-full">
              <div className="flex flex-col gap-1 sm:text-xs sm:w-full">
                <label htmlFor="cardNumber">Card Number:</label>
                <input
                  placeholder="0000 0000 0000 0000"
                  {...register("cardNumber")}
                  className="border rounded p-1 xs:w-full"
                  id="cardNumber"
                  onChange={handleInputChange}
                />
                {tipoTarjeta === "Visa" ? (
                  <div className="absolute right-[5px] bottom-[10px] w-[50px] sm:w-[40px] sm:bottom-[7px]">
                    <img src="/pagos/visa.png" alt="visa-logo" />
                  </div>
                ) : tipoTarjeta === "Mastercard" ? (
                  <div className="w-[35px] absolute right-[5px] bottom-[3px] sm:w-[25px]">
                    <img src="/pagos/mastercard.png" alt="mastercard-logo" />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="text-red-600">
              {errors.cardNumber?.message && (
                <span className="w-full flex justify-center">
                  {errors.cardNumber?.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1 sm:text-xs">
            <div className="flex flex-col gap-1">
              <label htmlFor="expirationDate">Expiration Date:</label>
              <input
                placeholder="MM/YYYY"
                {...register("expirationDate")}
                className="border rounded p-1"
                id="expirationDate"
                type="text"
              />
            </div>
            <div className="text-red-600">
              {errors.expirationDate?.message && (
                <span className="w-full flex justify-center">
                  {errors.expirationDate?.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1 sm:text-xs">
            <div className="flex flex-col gap-1">
              <label htmlFor="pin">Pin:</label>
              <input
                placeholder="000"
                {...register("pin")}
                className="border rounded p-1"
                type="password"
                id="pin"
              />
            </div>
            <div className="text-red-600">
              {errors.pin?.message && (
                <span className="w-full flex justify-center">
                  {errors.pin?.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="border-t w-full flex justify-center items-center p-5 gap-5">
          <Button
            type="button"
            className="hover:cursor-pointer xs:text-xs xs:h-8"
            onClick={() => updateOrderState(false)}
          >
            Back
          </Button>
          <Button
            type="submit"
            className="hover:cursor-pointer xs:text-xs xs:h-8"
          >
            Purchase
          </Button>
        </div>
      </form>
    </div>
  );
}
