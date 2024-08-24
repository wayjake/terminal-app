import type { MetaFunction } from "@remix-run/node";
import { Terminal } from "~/components/Terminal";

export const meta: MetaFunction = () => {
  return [
    { title: "Terminal APP" },
    { name: "description", content: "Welcome to black backgrounds and cursors!" },
  ];
};

export default function Index() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-darkGreenGreyStart to-darkGreenGrey text-beigeWhite-200 font-sans flex items-center justify-center">
            <div className="p-4">
                <Terminal path="~/" showAnimation={true} text={`The desert is at your footsteps. There isn't a town in sight.`} />
            </div>
        </div>
    );
}

