interface TextInputProps {
    setZip: (arg: string) => void,
    zip: string,
}

export default function TextInput({zip, setZip}: TextInputProps) {
  return (
    <input type='number' onInput={(e) => {const input = e.target as HTMLInputElement; input.value = input.value.slice(0, 5);}} min={0} max={99999} maxLength={5} onChange={(e) => {setZip(e.currentTarget.value)}} value={zip} inputMode="numeric" placeholder='Choose pickup Zip *' className='mb-2 lg:mb-4 w-full border border-accent rounded-2xl py-4 px-8 lg:px-6 text-sm lg:text-base font-bold placeholder:text-[#444B89]'></input>
  )
}
