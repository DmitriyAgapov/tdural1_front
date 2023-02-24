
import Button from "#/components/Button/Button";
import Section from "#/components/Sections/Section";
import {Suspense} from "react";
import {Loader} from "#/components/Loader/Loader";

const SectionScreen = () => {

return (
	<Suspense fallback={<Loader />}>
<Section title={
	<div className={'screen__text'}>
		<div className={'section__screen-title'}>
			<h1>ТЕХНИКА С ПРОБЕГОМ</h1>
			<span>для самых сложных задач</span>
		</div>
		<div className={'section__screen-description'}>Все автомобили прошли сервисное обслуживание и
			полностью готовы к эксплуатации.
			Гаранития
		</div>
		<div className={'section__screen-link flex flex-col lg:flex-row gap-2 lg:max-w-full'}>
			<Button text={'Выбрать автомобиль'} type={'button-primary'} link={'/trucks'}/>
			<Button text={'Выбрать запчасти'} type={'button-outline'} link={'/parts'}/>
		</div>
	</div>
}
         type={'section-screen'}/>
	</Suspense>
)}

export default SectionScreen