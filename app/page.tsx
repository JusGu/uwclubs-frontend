"use client"
import Rive from "@rive-app/react-canvas";
export default async function Index() {

  return (
    <div>
      <div style={{ width: 200, height: 200 }}>
      <Rive src="/mantis.riv" />
      </div>
    </div>
  );
}
