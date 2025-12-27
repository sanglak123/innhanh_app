// useCountdown.ts
import { useCallback, useEffect, useRef, useState } from "react";

export function useCountdown(onFinish?: () => void) {
    const [msLeft, setMsLeft] = useState(0);
    const [running, setRunning] = useState(false);
    const endAtRef = useRef<number | null>(null);
    const tickRef = useRef<number | null>(null);
    const finishedRef = useRef(false);

    const stop = useCallback(() => {
        if (tickRef.current) clearInterval(tickRef.current);
        tickRef.current = null;
        setRunning(false);
    }, []);

    const start = useCallback((durationMs: number) => {
        finishedRef.current = false;
        endAtRef.current = Date.now() + durationMs;
        setRunning(true);

        const tick = () => {
            const left = Math.max(0, (endAtRef.current ?? 0) - Date.now());
            setMsLeft(left);
            if (left === 0 && !finishedRef.current) {
                finishedRef.current = true;
                stop();
                onFinish?.();
            }
        };

        tick();
        if (tickRef.current) clearInterval(tickRef.current);
        tickRef.current = window.setInterval(tick, 1000);
    }, [onFinish, stop]);

    useEffect(() => () => stop(), [stop]);

    return {
        start,          // gọi start(25*60*1000) để bắt đầu 25'
        stop,
        running,        // đang đếm
        expired: !running && msLeft === 0 && endAtRef.current !== null, // đã kết thúc?
        secondsLeft: Math.ceil(msLeft / 1000),
    };
}
