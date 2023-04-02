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
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { userState } from "../atom/userAtom";
import { useRouter } from "next/router";
// import { useSession, signIn, signOut } from "next-auth/react";

export default function Sidebar() {
  // const { data: session } = useSession();
  const [currentUser, setCurrentUser] = useRecoilState(userState)
  const auth = getAuth();
  const router = useRouter();

   useEffect(()=>{
    
      onAuthStateChanged(auth, (user) => {
      if(user){
        const fetchUser = async() => {
        const docRef = doc(db, "users", auth.currentUser.providerData[0].uid);
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()){
          setCurrentUser(docSnap.data())
          }
        }
        fetchUser()
      }
     });
     
    },[]);

    function onSignOut(){
      signOut(auth)
      setCurrentUser(null)
    }
    

  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
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
        {currentUser && (
          <>
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
          </>
        )}
      </div>

      {currentUser ? (
        <>
          {/* Button */}

          <button className="bg-blue-400 text-white text-lg rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 hidden xl:inline">
            Tweet
          </button>

          {/* Mini profile */}
          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img
              src={currentUser?.userImg}
              alt="user-image"
              className="h-10 w-10 rounded-full xl:mr-2"
              onClick={onSignOut}
            />
            <div className="leading-5 hidden xl:inline">
              <h4 className="font-bold">{currentUser?.name}</h4>
              <p className="text-gray-500">@{currentUser?.username}</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
          </div>
        </>
      ) : (
        <button
          onClick={()=>router.push("/auth/signin")} //part of directing user to homepage on login
          className="bg-blue-400 text-white text-lg rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 hidden xl:inline"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
