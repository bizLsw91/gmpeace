import cn from "classnames";

export default function ComingSoon({width, height, title, minWidth}: {
    width?: number,
    minWidth?: number,
    height?: number,
    title?: string
}) {
    const inlineStyles = {
        maxWidth: width ? `${width}px` : undefined,
        minWidth: minWidth ? `${minWidth}px` : undefined,
        height: height ? `${height}px` : undefined,
    };

    return (
        <div
            className={cn(
                "tempNotice w-full flex justify-center items-center bg-emerald-500 text-white text-3xl rounded-[20px] gap-4",
                !height && 'h-[250px]'
            )}
            style={inlineStyles}
        >
            <div className={"flex flex-wrap justify-center gap-3 px-4"}>
                {title && <div>{title}</div>}
                <div>Coming Soon</div>
            </div>
        </div>
    );
}
