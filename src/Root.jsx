import { Composition } from 'remotion';
import { Overlay } from './Overlay';
import { Test1 } from './Test1.jsx';
import { All, AA, myCompSchema } from './All.jsx';

export const RemotionRoot = () => {
	return (
		<>
			<Composition
				id="Overlay"
				component={Overlay}
				durationInFrames={75}
				fps={25}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Overlay2"
				component={Overlay}
				durationInFrames={75}
				fps={25}
				width={500}
				height={400}
			/>
			<Composition
				id="Test1"
				component={Test1}
				durationInFrames={75}
				fps={25}
				width={1920}
				height={1080}
			/>
			<Composition
				id="AA"
				component={AA}
				schema={myCompSchema}
				defaultProps={{
					propOne: "Hi Vimlesh",
					propTwo: 10,
				}}
				durationInFrames={75}
				fps={25}
				width={1920}
				height={1080}
			/>
			<Composition
				id="All"
				component={All}
				durationInFrames={75}
				fps={25}
				width={1920}
				height={1080}
				schema={myCompSchema}
				defaultProps={{
					propOne: "Hi Vimlesh",
					propTwo: 10,
				}}

			/>
		</>
	);
};
