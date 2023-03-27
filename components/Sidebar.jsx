import Image from "next/image";

import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  UserIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import SidebarMenuItem from "./SidebarMenuItem";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* Twitter logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          alt=""
        ></Image>
      </div>

      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      {/* Button */}

        <button className="bg-blue-400 text-white text-lg rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 hidden xl:inline">Tweet</button>

      {/* Mini profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img src="https://pps.whatsapp.net/v/t61.24694-24/266085040_763312398451113_5669021778600555408_n.jpg?ccb=11-4&oh=01_AdQGgiBhMM9hcVyr4FAhFENGFQSe79pSq2a1sxZU33Loow&oe=6426B67A" alt="user-image" className="h-10 w-10 rounded-full xl:mr-2" />
        <div className="leading-5 hidden xl:inline">
            <h4 className="font-bold">Mbui ptah</h4>
            <p className="text-gray-500">@mbuiptah</p>

        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
      </div>
    </div>
  );
}
