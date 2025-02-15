
import { auth } from "@/auth/authSetup";
import React from "react";

async function MyAccount() {
    const session = await auth();
    const user = session?.user;

    const userInfo = {
        name: user?.name,
        email: user?.email,
    };
    return (
        <>
            <div>This is my account page</div>
            <pre className="">
                {JSON.stringify(userInfo, null, 2)}
            </pre>
        </>
    );
}

export default MyAccount;
