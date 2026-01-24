import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



const AuthenticationPage = () => {
  return <div className="h-screen w-screen flex items-center justify-center">

<Tabs
		className="flex w-[300px] flex-col shadow-[0_2px_10px] shadow-blackA2"
		defaultValue="tab1"
	>
		<TabsList
			className="flex shrink-0 border-b border-mauve6"
			aria-label="Manage your account"
		>
			<TabsTrigger
				className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
				value="tab1"
			>
				Account
			</TabsTrigger>
			<TabsTrigger
				className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
				value="tab2"
			>
				Password
			</TabsTrigger>
		</TabsList>
		<TabsContent
			className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
			value="tab1"
		>
			<p className="mb-5 text-[15px] leading-normal text-mauve11">
				Make changes to your account here. Click save when youre done.
			</p>
			<fieldset className="mb-[15px] flex w-full flex-col justify-start">
				<label
					className="mb-2.5 block text-[13px] leading-none text-violet12"
					htmlFor="name"
				>
					Name
				</label>
				<input
					className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
					id="name"
					defaultValue="Pedro Duarte"
				/>
			</fieldset>
			<fieldset className="mb-[15px] flex w-full flex-col justify-start">
				<label
					className="mb-2.5 block text-[13px] leading-none text-violet12"
					htmlFor="username"
				>
					Username
				</label>
				<input
					className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
					id="username"
					defaultValue="@peduarte"
				/>
			</fieldset>
			<div className="mt-5 flex justify-end">
				<button className="inline-flex h-[35px] cursor-default items-center justify-center rounded bg-green4 px-[15px] text-[15px] font-medium leading-none text-green11 outline-none hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7">
					Save changes
				</button>
			</div>
		</TabsContent>
		<TabsContent
			className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
			value="tab2"
		>
			<p className="mb-5 text-[15px] leading-normal text-mauve11">
				Change your password here. After saving, youll be logged out.
			</p>
			<fieldset className="mb-[15px] flex w-full flex-col justify-start">
				<label
					className="mb-2.5 block text-[13px] leading-none text-violet12"
					htmlFor="currentPassword"
				>
					Current password
				</label>
				<input
					className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
					id="currentPassword"
					type="password"
				/>
			</fieldset>
			<fieldset className="mb-[15px] flex w-full flex-col justify-start">
				<label
					className="mb-2.5 block text-[13px] leading-none text-violet12"
					htmlFor="newPassword"
				>
					New password
				</label>
				<input
					className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
					id="newPassword"
					type="password"
				/>
			</fieldset>
			<fieldset className="mb-[15px] flex w-full flex-col justify-start">
				<label
					className="mb-2.5 block text-[13px] leading-none text-violet12"
					htmlFor="confirmPassword"
				>
					Confirm password
				</label>
				<input
					className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
					id="confirmPassword"
					type="password"
				/>
			</fieldset>
			<div className="mt-5 flex justify-end">
				<button className="inline-flex h-[35px] cursor-default items-center justify-center rounded bg-green4 px-[15px] text-[15px] font-medium leading-none text-green11 outline-none hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7">
					Change password
				</button>
			</div>
		</TabsContent>
	</Tabs>

  </div>
}

export default AuthenticationPage; 