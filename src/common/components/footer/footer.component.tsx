import { FooterLink } from '../footer-link/footer-link.component'

export const Footer = () => {
	return (
		<div className='bg-gray-900 pt-12 px-12 pb-8'>
			<div>
				<div className='mb-4'>
					<span className='uppercase font-bold text-sm text-zinc-500'>
						Контакти
					</span>
				</div>
				<div className='mb-8'>
					<ul>
						<FooterLink href="tel:+380441234567">098 745 39 74</FooterLink>
						<FooterLink href="mailto:info@pizzastack.app">info@pizzastack.app</FooterLink>
					</ul>
				</div>
				<hr className='relative left-[-3rem] w-[calc(100%_+_6rem)] mb-8 border-zinc-500' />
				<div>
					<span className='text-xl text-white font-semibold'>
						🍕 PizzaStack
					</span>
				</div>
			</div>
		</div>
	)
}
