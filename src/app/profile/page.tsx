/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidemenu } from "@/components/Sidemenu";
import { UserAuth } from "@/app/context/AuthContext";

const page = () => {
  const [loading, setLoading] = useState(true);
  const { user } = UserAuth();
  if (!user) return redirectToLogin();

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  });

  function redirectToLogin() {
    const router = useRouter();
    router.push("/login");
  }

  return (
    <div className="flex">
      {user ? (
        <>
          <Sidemenu />
          <div>
            <h3>Welcome, {user} to your private area.</h3>
          </div>
        </>
      ) : (
        <p>Not authorized.</p>
      )}
    </div>
  );
};

export default page;
