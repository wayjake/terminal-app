type TerminalStartProps = {
    className?: string;
    path: string;
}

type TerminalTextProps = {
    className?: string;
    showAnimation: boolean;
    text: string;
}

/**
 * TERMINAL START is a component that shows you that
 * A you are in a terminal and
 * B which directory you are in.
 */
const TerminalStart = ({ path = "~/", className}: TerminalStartProps) => (
    <div className={className}>:{path}{' '}</div>
);

/**
 * TERMINAL TEXT is a component that shows different animations
 * we may install later to create a "typing" effect like AI
 * has become sentient. Heck, how would one know if this
 * wasn't AI right here typing this too?
 *
 * Possibly the animation isn't needed if really we're just streaming a
 * response from a LLM API.
 */
const TerminalText = ({ showAnimation = false, text, className }: TerminalTextProps) => {
    if (showAnimation) {
        // Future animation code
    }
    return <div className={className}>{text}</div>;
}

export const Terminal = ({ path = "~/", showAnimation = false, text }: TerminalStartProps & TerminalTextProps) => {
    return (
        <div className="overflow-auto max-w-[800px] w-[calc(100%-42px)] bg-darkGreenGrey rounded-lg shadow-2xl mx-auto my-8 border border-solid border-[#5f5f5f]">
            {/* Top bar with window controls and centered text */}
            <div className="flex items-center justify-between bg-[#3B3B3B]">
                <div className="flex items-center space-x-2 p-2">
                    <div className="relative w-3 h-3 bg-red-500 rounded-full">
                        <div className="absolute inset-1 bg-red-700 rounded-full"></div>
                    </div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-center text-beigeWhite-400 font-bold text-sm">j*Terminal</div>
                <div className="w-3"></div> {/* Spacer for centering */}
            </div>
            {/*terminal insides*/}
            <div className="p-2 bg-terminalBlueGrey">
                {/* terminal row */}
                <div className="flex ">
                    {/* sample */}
                    <TerminalStart path={path} />
                    <TerminalText showAnimation={showAnimation} text={text} />
                </div>
                {/* terminal row 2 */}
                <div>
                    {/* start first typing adventure */}
                    <TerminalStart path={path} />
                </div>
            </div>
        </div>
    );
}

