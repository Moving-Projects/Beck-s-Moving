'use client'

import { useEffect, useState } from 'react'
import QuoteRequestProperty from './Steps/QuoteRequestProperty'
import QuoteRequestRooms from './Steps/QuoteRequestRooms';
import QuoteRequestDetails from './Steps/QuoteRequestDetails';
import { useToast } from '@/hooks/use-toast';

interface QuoteRequestFormProps {
  slug?: string[]
}

export default function QuoteRequestForm({slug}: QuoteRequestFormProps) {
  const [step, setStep] = useState(0);
  const [property, setProperty] = useState('');
  const [rooms, setRooms] = useState('');
  const [movingFrom, setMovingFrom] = useState(slug !== undefined ? slug[0] : '');
  const [movingTo, setMovingTo] = useState('');
  const [date, setDate] = useState<Date>();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState(true);

  const { toast } = useToast()

  useEffect(() => {
      window.innerWidth < 1024 ? setMobile(true) : setMobile(false);

      window.addEventListener('resize', () => {
          if (window.innerWidth < 1024 && !mobile) setMobile(true)
          if (window.innerWidth >= 1024 && mobile) setMobile(false)
      })
  })

  const validateData = () => {
    if(!validateEmail(email)){
      toast({
        duration: 5000,
        variant: "destructive",
        title: "Invalid Email",
        description: "The provided email is not valid",
      });
      return false;
    }

    if (movingFrom.length != 5 || movingTo.length != 5){
      toast({
        duration: 5000,
        variant: "destructive",
        title: "Invalid Zip Code",
        description: "Zip code must contain 5 numbers",
      });
      return false;
    }

    if(!validatePhoneNumber(phone)){
      toast({
        duration: 5000,
        variant: "destructive",
        title: "Invalid Phone Number",
        description: "The provided phone number is not valid",
      });
      return false;
    }

    return true;
  }

  const submitData = async () => {
    const sendData = {
      notes: property,
      moveSize: rooms,
      originZip: movingFrom,
      destinationZip: movingTo,
      email,
      fullname: name,
      moveDate: date?.toString(),
      phoneNumber: phone,
    }

    if (!validateData()) return;

    try {
      const response = await fetch('https://api.smartmoving.com/api/leads/from-provider/v2?providerKey=a3bfdc1e-e3e6-4bb1-bcd3-b04c0129b142', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className='rounded-3xl bg-extraWhite shadow-base py-6 lg:py-8 px-8 lg:px-16 overflow-hidden z-10 lg:min-w-[35rem] lg:max-w-[35rem] lg:h-fit min-h-[30rem]'>
        <div className="flex items-center justify-center gap-1 mb-6 lg:mb-8">
            <p className='lg:text-2xl text-accent text-lg font-extrabold'>{step + 1}</p>
            <div className='border relative border-accent overflow-hidden h-2 w-24 rounded-2xl'>
                <div className="absolute left-0 top-0 bg-accent h-full transition-all duration-300" style={{width: `${(step + 1) / 3 * 100}%`}}></div>
            </div>
            <p className='lg:text-2xl text-accent text-lg font-extrabold'>3</p>
        </div>
        <div className="flex transition-all duration-300" style={{transform: `translateX(calc(-${step * (mobile ? 100 : 35)}${mobile ? 'vw' : 'rem'}))`}}>
          <QuoteRequestProperty step={step} setStep={setStep} setProperty={setProperty}/>
          <QuoteRequestRooms setRoom={setRooms} step={step} setStep={setStep}/>
          <QuoteRequestDetails submitData={submitData} step={step} setStep={setStep} movingFrom={movingFrom} setMovingFrom={setMovingFrom} movingTo={movingTo} setMovingTo={setMovingTo} date={date} setDate={setDate} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} name={name} setName={setName}/>
        </div>
    </div>
  )
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhoneNumber(phone: string): boolean {
  const phoneRegex = /^(?:\+1\s?)?(\d{3}|\(\d{3}\))[-.\s]?\d{3}[-.\s]?\d{4}$/;
  return phoneRegex.test(phone);
}