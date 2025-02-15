/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import { UserRole } from "../RoleSelector";

const RegisterWithGoogle = ({ selectedRole }: { selectedRole: UserRole }) => {
  const router = useRouter();


  const handleGoogleLogin = () => {
    const popup = window.open(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google?mode=registration&role=${selectedRole}`,
      "_blank",
      "width=500,height=600"
    );

    if (!popup) {
      alert("Popup blocked! Please allow popups for this site.");
      return;
    }

    const handleMessage = (event: any) => {
      // Verify the origin of the message
      if (event.origin !== "http://localhost:8000") return;

      const { success } = event.data;
      if (success) {
        router.push("/"); // Redirect to the home page
        router.refresh();
      }
    };

    // Listen for the postMessage from the popup
    window.addEventListener("message", handleMessage);

    // Cleanup listener after popup closes
    const checkPopupClosed = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkPopupClosed);
        window.removeEventListener("message", handleMessage);
      }
    }, 500);
  };

  return (
    <Button disabled={!selectedRole} onClick={handleGoogleLogin}>
      Google
    </Button>
  );
};

export default RegisterWithGoogle;
