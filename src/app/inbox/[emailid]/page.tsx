'use client';
import EmailList from "@/components/EmailList";
import { useContext } from "react";
import { EmailContext } from "@/context/email-context";
import { Email, EmailStateTypes } from "@/types";

export default function EmailPage() {
    const { selectedEmail, setEmails, setSelectedEmail } = useContext(EmailContext) || {selectedEmail: null, setEmails: () => {}, setSelectedEmail: () => {}};
    return (
        <div className="flex h-screen bg-gray-50">
          <EmailList />
          {selectedEmail && (
              <div className="w-[65%] bg-white flex flex-col">
                {/* Email Header */}
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {selectedEmail?.title}
                  </h2>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">From: {selectedEmail?.sender}</p>
                      <p className="text-sm text-gray-600">Date: {new Date(selectedEmail?.time).toLocaleString()}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 ">
                        Reply
                      </button>
                      <button className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 ">
                        Forward
                      </button>
                    </div>
                  </div>
                </div>
        
                {/* Email Content */}
                <div className="p-6">
                  <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                    {selectedEmail?.email_body}
                  </p>
                  
                  {selectedEmail.state !== EmailStateTypes.TRASH && <div className=" flex justify-end mt-6">
                    <button 
                    onClick={() => {
                      setEmails((prevEmails:Email[]) => prevEmails.map(email => email.id === selectedEmail.id ? {...email, state: EmailStateTypes.TRASH} : email));
                      setSelectedEmail(null);
                    }}
                    className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                      Delete
                    </button>
                  </div>}
                </div>
              </div>
          )}
        </div>
    );
}