
import YaMap from '#/components/Map'
import React from "react";
import {Metadata} from "next";
import Link from "next/link";
import Button from "#/components/Button/Button";
import Section from "#/components/Sections/Section";
export const metadata:Metadata = {
	title: {
		default: 'Tdural1',
		template: '%s | Tdural1',
	},
}

export default function ContactPage() {

	return (

		<>

			{/*<SectionHeading container  heading={"Контакты"} />*/}
			<Section
				type={'page-contacts contacts section-with-sidebar'}
				asideType={'col-1-4'}
				contentType={'col-5-12 p-0 flex'}
				aside={<><div className={'contacts-box mr-8'}>
					<h2 className={"section__title"}>Контакты</h2>
					<div className={'description text-2xl pl-4 text-slate-600'}>
						<p>Мы всегда готовы ответить на Ваши вопросы в рабочее время. </p>
					</div>
					<div className={'addresses-phones pl-4'}>
						<div className={'phone'}>
							<span className={'field__label'}>Телефон</span>
							<span  className={'field__value'}>+7 (351) 777-78-65</span>
							<span  className={'field__value'}>+7 (351) 771-78-65</span>
						</div>
						<div className={'address'}>
							<span className={'field__label'}>Адрес</span><span  className={'field__value'}>Миасс, Объездная дорога 2/8</span>
						</div>
						<div className={'email'}>
							<span className={'field__label'}>Email</span><Link href={"mailto:info@tdural1.ru"}  className={'field__value_link button-link'}>info@tdural1.ru</Link>
						</div>
						<div className={'docs'}>
							<span className={'field__label'}>Реквизиты</span><Link href={"/docs/firmcard.docx"}  className={'field__value_link'}>

							Карточка предприятия</Link>
						</div>

					</div>
				</div><div className={'sidebar__links flex flex-col gap-2 max-w-[18rem] w-full items-stretch'}>



					<Button link={'#'} text={'НАПИСАТЬ НАМ'} type={'button-primary  button-sm'}
							// icon={<MailMd />}
					/>
					<Button link={'#'} text={'Отправить заявку'} type={'button-outline button-sm'}
							// icon={<MailMd />}
					/>
				</div></>}
				content={<YaMap />}
			/>

		</>
	)
}
