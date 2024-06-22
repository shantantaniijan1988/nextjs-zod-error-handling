"use client";

import axios from "axios";
import { type FC, useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  username: string;
  password: string;
}

export const SignupForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [errorResponseDisplay, setErrorResponseDisplay] = useState<
    string[] | unknown[]
  >([]);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        username: data.username,
        password: data.password,
      });

      console.log(response);
    } catch (error: any) {
      const errorResponse = error.response.data.errors;
      const errorArray = Object.values(errorResponse).flat();
      setErrorResponseDisplay(errorArray);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errorResponseDisplay &&
        errorResponseDisplay.map((error, index) => (
          <p key={index} className="text-red-500 text-sm font-medium">
            {error as string}
          </p>
        ))}
      <div className="mt-6 flex flex-col gap-y-1">
        <label htmlFor="username" className="text-sm font-medium">
          ユーザーネーム
        </label>
        <input
          {...register("username")}
          type="text"
          id="username"
          className="px-3 py-1 border border-gray-400 rounded"
        />
        {errors.username && (
          <p className="text-red-500 text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="inline align-text-top w-4 h-4 fill-red-500"
            >
              <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <span className="ml-1">{errors.username.message}</span>
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-y-1">
        <label htmlFor="password" className="text-sm font-medium">
          パスワード
        </label>
        <input
          {...register("password")}
          type="text"
          id="password"
          className="px-3 py-1 border border-gray-400 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="inline align-text-top w-4 h-4 fill-red-500"
            >
              <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <span className="ml-1">{errors.password.message}</span>
          </p>
        )}
      </div>

      <div className="mt-10">
        <input
          type="submit"
          value="登録する"
          className="w-full py-1.5 border border-gray-700 rounded text-sm font-medium cursor-pointer"
        />
      </div>
    </form>
  );
};
