import { EmojiHappyIcon, PhotographIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Input() {
  return (
    <div className='flex border-b border-gray-200 p-3 space-x-3'>
        <img src="https://pps.whatsapp.net/v/t61.24694-24/266085040_763312398451113_5669021778600555408_n.jpg?ccb=11-4&oh=01_AdQGgiBhMM9hcVyr4FAhFENGFQSe79pSq2a1sxZU33Loow&oe=6426B67A" alt="user-image" className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95" />

        <div className='w-full divide-y divide-gray-200'>
            <div>
                <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" rows="2" placeholder="What's happening?"></textarea>
            </div>
            <div className='flex items-center justify-between pt-2.5'>
                <div className='flex'>
                    <PhotographIcon  className='h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100'/>
                    <EmojiHappyIcon className='h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100'/>
                </div>
                <button className='bg-blue-400 text-white px-4 py-1.5 rounded-full fomt-bold shadow-md hover:brightness-90 disabled:opacity-50'>Tweet</button>
            </div>
        </div>
    </div>
  )
}
