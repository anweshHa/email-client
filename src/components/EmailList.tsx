'use client';
import { EmailContext } from "@/context/email-context";
import { EmailState, EmailStateTypes } from "@/types";
import { useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import InboxEmailList from "./InboxEmailList";
import TrashEmailList from "./TrashEmailList";

export default function EmailList() {
  const getFilteredEmails=() => emails.filter(email => {
    if (activeEmailType === EmailStateTypes.INBOX) {
      return email.state === EmailStateTypes.INBOX;
    }
    return email.state === EmailStateTypes.TRASH;
  });
  const {selectedEmail, setSelectedEmail, emails, scrollPosition, setScrollPosition} = 
    useContext(EmailContext) || {selectedEmail: null, setSelectedEmail: () => {}, emails: [], scrollPosition: 0, setScrollPosition: () => {}};
  console.log(emails);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeEmailType, setActiveEmailType] = useState<EmailState>(EmailStateTypes.INBOX);
  // const [filteredEmails, setFilteredEmails] = useState<Email[]>(getFilteredEmails());
  const filteredEmails = useMemo(() => getFilteredEmails(), [activeEmailType, emails]);
  // const handleScroll = () => {
  //   if (scrollContainerRef.current) {
  //     setScrollPosition(scrollContainerRef.current.scrollTop);
  //   }
  // };
  // useEffect(() => {
  //   setFilteredEmails(getFilteredEmails());
  // }, [activeEmailType, emails]);

  useLayoutEffect(() => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollTop);
    }
  }, [selectedEmail]);
      
  useEffect(() => {
    if (scrollContainerRef.current && scrollPosition > 0) {
      scrollContainerRef.current.scrollTop = scrollPosition;
      // scrollContainerRef.current.scrollTo({
      //   top: scrollPosition,
      //   behavior: 'smooth'
      // });

    }
  }, [scrollPosition]);

  return (
      <div className="w-[35%] bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
            {/* <h1 className="text-xl font-semibold text-gray-800">Inbox</h1>
            <p className="text-sm text-gray-600">{emails?.length} emails</p> */}
            <div className="flex mb-2 justify-center space-x-1">
              <button
                onClick={
                  () => {
                    setActiveEmailType(EmailStateTypes.INBOX)
                    setSelectedEmail(null)
                  }
                }
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  activeEmailType === EmailStateTypes.INBOX  
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Inbox
              </button>
              <button
                onClick={() => {
                  setActiveEmailType(EmailStateTypes.TRASH)
                  setSelectedEmail(null)
                }}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  activeEmailType === EmailStateTypes.TRASH
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Trash
              </button>
            </div>
            <p className="text-sm text-gray-600">
              {activeEmailType.charAt(0).toUpperCase() + activeEmailType.slice(1)} - {filteredEmails.length} emails
            </p>
        </div>
        
        {/* Email List */}
        <div 
          ref={scrollContainerRef}
          // onScroll={handleScroll}
          className="flex-1 overflow-y-auto">
            {activeEmailType === EmailStateTypes.INBOX 
            ? <InboxEmailList filteredEmails={filteredEmails}/> 
            : <TrashEmailList filteredEmails={filteredEmails}/>} 
        </div>
      </div>
  );
}