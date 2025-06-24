import { EmailContext } from "@/context/email-context";
import { ToastContext } from "@/context/toast-context";
import { Email, EmailStateTypes } from "@/types";
import Link from "next/link";
import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";

export default function InboxEmailList(props: {
    filteredEmails: Email[]
}) {
    const {selectedEmail, setSelectedEmail, emails, setEmails} = useContext(EmailContext) || {selectedEmail: null, setSelectedEmail: () => {}, emails: [], setEmails: () => {}};
    const {filteredEmails} = props;
    const { addToast } = useContext(ToastContext) || { addToast: () => {} };
    const markRead = (emailList: Email[], id: string): Email[] => {
      return emailList.map(email => {
        if (email?.id === id && !email.read) {
          return { ...email, read: true }; // Create a new object
        }
        return email; // Return original object if no change
      });
    }
    const handleListItemDelete = (deletedEmail: Email) => {
      setEmails((prevEmails: Email[]) => 
        prevEmails.map(emailItem => 
          emailItem.id === deletedEmail.id 
            ? {...emailItem, state: EmailStateTypes.TRASH} 
            : emailItem
        )
      );
      if(selectedEmail?.id === deletedEmail.id) {
        setSelectedEmail(null);
      }
      // Show toast with undo functionality
      addToast({
        message: `Email from ${deletedEmail.sender_name} deleted`,
        type: 'success',
        showUndo: true,
        onUndo: () => {
          // Restore email to inbox
          setEmails((prevEmails: Email[]) => 
            prevEmails.map(emailItem => 
              emailItem.id === deletedEmail.id 
                ? {...emailItem, state: EmailStateTypes.INBOX} 
                : emailItem
            )
          );
          
          // Show success toast for undo
          addToast({
            message: `Email from ${deletedEmail.sender_name} restored`,
            type: 'success'
          });
        }
      });
    };

  return (
    <div>
            {filteredEmails?.map((email:Email) => (
              <div key={email?.id} className={`flex flex-col group ${
                selectedEmail?.id === email?.id
                    ? 'bg-blue-50 border-l-4 border-l-blue-500'
                    : email?.read
                    ? 'bg-white hover:bg-gray-50'
                    : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors border-b border-gray-100`} 
              >
                <Link href={`/inbox/${email?.id}`} >
                  <div
                      className={`px-4 mt-4`}
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
                      <div className="text-xs text-gray-600 truncate">
                      {email?.email_body}
                      </div>
                  </div>
                </Link>
                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button className="text-xs text-gray-500 hover:text-red-500" 
                  onClick={() => handleListItemDelete(email)}>
                    <MdDeleteForever className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))} 
        </div>
  );
}