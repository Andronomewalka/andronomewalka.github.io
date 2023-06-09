import { FC } from "react";
import { Slider } from "../Slider";
import { useAtom } from "jotai";
import { controlsAtom, initControls } from "../../state/controlsAtom";
import "./styles.css";

export const VideoControls: FC = () => {
	const [controls, setControls] = useAtom(controlsAtom);

	return (
		<div
			className="video-controls absolute right-0 top-[50%] flex gap-4 rounded-l
        bg-blue-700 bg-opacity-30 p-4 text-white hover:bg-opacity-90"
		>
			<div className="controls-title self-center">CONTROLS</div>
			<div className="flex flex-col gap-4">
				<Slider
					title="Saturation"
					value={controls.saturation}
					max={2}
					step={0.02}
					onChange={(value) => setControls({ ...controls, saturation: value[0] })}
				/>
				<Slider
					title="Brightness"
					value={controls.brightness}
					max={2}
					step={0.02}
					onChange={(value) => setControls({ ...controls, brightness: value[0] })}
				/>
				<Slider
					title="Contrast"
					value={controls.contrast}
					max={2}
					step={0.02}
					onChange={(value) => setControls({ ...controls, contrast: value[0] })}
				/>
				<Slider
					title="Hue"
					value={controls.hue}
					max={6.28319}
					onChange={(value) => setControls({ ...controls, hue: value[0] })}
				/>
				<Slider
					title="Sharpness"
					value={controls.sharpen}
					min={-2}
					max={2}
					step={0.04}
					onChange={(value) => setControls({ ...controls, sharpen: value[0] })}
				/>
				<Slider
					title="Blur"
					value={controls.blur}
					min={0.01}
					max={4}
					step={0.04}
					onChange={(value) => setControls({ ...controls, blur: value[0] })}
				/>
				<Slider
					title="Warmth"
					value={controls.warmth}
					max={0.1}
					step={0.001}
					onChange={(value) => setControls({ ...controls, warmth: value[0] })}
				/>
				<Slider
					title="Cold"
					value={controls.cold}
					max={0.1}
					step={0.001}
					onChange={(value) => setControls({ ...controls, cold: value[0] })}
				/>
				<button
					className="rounded bg-slate-100 px-4 py-2 text-blue-700 shadow-md hover:bg-slate-200"
					onClick={() => setControls(initControls)}
				>
					Reset
				</button>
			</div>
		</div>
	);
};
