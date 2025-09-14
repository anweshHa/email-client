import { EmailContext } from "@/context/email-context";
import { ToastContext } from "@/context/toast-context";
import { Email, EmailStateTypes } from "@/types";
import { useContext } from "react";
import { LiaTrashRestoreAltSolid } from "react-icons/lia";

export default function TrashEmailList(props: {
    filteredEmails: Email[]
}) {
    const {selectedEmail, setEmails} = useContext(EmailContext) || {selectedEmail: null, setEmails: () => {}};
    const {filteredEmails} = props;
    const { addToast } = useContext(ToastContext) || { addToast: () => {} };
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
                <div
                    className={`px-4 mt-4`}
                    onClick={() => {}}
                >
                    <div className="flex justify-between items-start mb-2">
                    <span className={`font-medium text-sm ${!email?.read ? 'font-bold' : ''}`}>
                      <span dangerouslySetInnerHTML={{ __html: email?.sender_name }} />
                    </span>
                    <span className="text-xs text-gray-500">{new Date(email?.time).toLocaleDateString()}</span>
                    </div>
                    <div className={`text-sm mb-1 ${!email?.read ? 'font-semibold' : ''}`}>
                      <span dangerouslySetInnerHTML={{ __html: email?.title }} />
                    </div>
                    <div className="text-xs text-gray-600 truncate">
                      <span dangerouslySetInnerHTML={{ __html: email?.email_body }} />
                    </div>
                </div>
                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button className="text-xs text-gray-500 hover:text-red-500" 
                    onClick={() => {
                        // Restore email to inbox
                        setEmails((prevEmails: Email[]) => 
                        prevEmails.map(emailItem => 
                            emailItem.id === email.id 
                            ? {...emailItem, state: EmailStateTypes.INBOX} 
                            : emailItem
                        )
                        );
                        
                        // Show success toast for undo
                        addToast({
                        message: `Email from ${email.sender_name} restored`,
                        type: 'success'
                        });
                    }}>
                        <LiaTrashRestoreAltSolid className="w-4 h-4" />
                    </button>
                </div>
              </div>
            ))} 
        </div>
  );
}