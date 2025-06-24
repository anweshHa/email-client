'use client';
import { EmailContext } from "@/context/email-context";
import { Email, EmailState, EmailStateTypes } from "@/types";
import Link from "next/link";
import { useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

export default function EmailList(
) {
        const markRead = (emailList: Email[], id: string): Email[] => {
          return emailList.map(email => {
            if (email?.id === id && !email.read) {
              return { ...email, read: true }; // Create a new object
            }
            return email; // Return original object if no change
          });
        }
        const getFilteredEmails=() => emails.filter(email => {
          if (activeEmailType === EmailStateTypes.INBOX) {
            return email.state === EmailStateTypes.INBOX;
          }
          return email.state === EmailStateTypes.TRASH;
        });
        const {selectedEmail, setSelectedEmail, emails, setEmails, scrollPosition, setScrollPosition} = 
          useContext(EmailContext) || {selectedEmail: null, setSelectedEmail: () => {}, emails: [], setEmails: () => {}, scrollPosition: 0, setScrollPosition: () => {}};
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
                  {filteredEmails?.map((email:Email) => (
                    <Link href={`/inbox/${email?.id}`} key={email?.id}>
                      <div
                          className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
                          selectedEmail?.id === email?.id
                              ? 'bg-blue-50 border-l-4 border-l-blue-500'
                              : email?.read
                              ? 'bg-white hover:bg-gray-50'
                              : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                          onClick={() => {
                          setSelectedEmail(email);
                          setEmails(markRead(emails, email?.id));
                          }}
                      >
                          <div className="flex justify-between items-start mb-2">
                          <span className={`font-medium text-sm ${!email?.read ? 'font-bold' : ''}`}>
                          {email?.sender_name}
                          </span>
                          <span className="text-xs text-gray-500">{new Date(email?.time).toLocaleDateString()}</span>
                          </div>
                          <div className={`text-sm mb-1 ${!email?.read ? 'font-semibold' : ''}`}>
                          {email?.title}
                          </div>
                          <div className="text-xs text-gray-600 line-clamp-2">
                          {email?.email_body}
                          </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
        );
}