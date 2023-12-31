"use client";

import { useRouter } from "next/navigation";

type Props = { error: string; errorInfo: any };

export default function ErrorPage({ error, errorInfo }: Props) {
  const router = useRouter();
  const handleBack = () => {
    console.log(errorInfo)
    //router.back();
  };

  return (
          <div>
            <h2>Oops, wygląda na to, że doszło do błędu! {error && error.toString()}</h2>
            <p>{error && error.toString()}</p>
            <button
              type="button"
              onClick={
                handleBack
              }
            >
              Wróć
            </button>
          </div>

  );
}
