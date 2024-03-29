import PageWrapper from "@/components/shared/PageWrapper";
import Image from "next/image";

export default function Error() {
  return (
    <PageWrapper>
      <div
        className="flex justify-center items-center flex-col"
        style={{ height: "calc(100vh - 201px)" }}
      >
        <Image
          src="/manny_drawn.png"
          alt="Manny the mascot"
          width={270}
          height={270}
        />
        <div className="p-6 max-w-sm mx-auto rounded-xl">
          <h1 className="text-2xl font-bold">Page not found.</h1>
          <p className="text-gray-500">
            Looks like this page doesn't exist. Manny invites you to check out
            our other content!
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
