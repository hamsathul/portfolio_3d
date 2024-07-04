export const Menu = (props) => {
	const { onSectionChange, menuOpened, setMenuOpened } = props;

	return (
		<>
			<button 
			onClick={() => setMenuOpened(!menuOpened)} 
			className="fixed top-4 md:top-12 right-4 md:right-12 p-3 bg-indigo-600 rounded-md w-11 h-11 z-20"
			>
				<div className={`
					bg-white h-0.5 rounded-md w-full transition-all
					${menuOpened ? "rotate-45 translate-y-0.5" : ""}
					`}
					/>
				<div className={`
					bg-white h-0.5 rounded-md w-full my-1
					${menuOpened ? "hidden" : ""}
					`}
					/>
				<div className={`
					bg-white h-0.5 rounded-md w-full transition-all
					${menuOpened ? "-rotate-45" : ""}
					`}
					/>
			</button>
				<div className={`
				z-10 fixed top-0 right-0 bottom-0 bg-white transition-all
				overflow-hidden flex flex-col ${menuOpened ? "w-full md:w-80" : "w-0"}
				`}>
					<div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">

						<MenuButton label="About" onClick={() => onSectionChange(0)}/>
						<MenuButton label="My Businesses" onClick={() => onSectionChange(1)}/>
						<MenuButton label="Aviation Experience" onClick={() => onSectionChange(2)}/>
						<MenuButton label="Programming Skills" onClick={() => onSectionChange(3)}/>
						<MenuButton label="Projects" onClick={() => onSectionChange(4)}/>
						<MenuButton label="Education" onClick={() => onSectionChange(5)}/>
						<MenuButton label="Contact" onClick={() => onSectionChange(6)}/>
					</div>
				</div>
		</>
		)
}

const MenuButton = (props) => {
	const {label, onClick} = props;
	return (
		<button 
		onClick={onClick} 
		className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
		>{label}</button>

	)
}