'use client';

import { getUnreadSortedEmails } from "@/lib/utils";
import { Email } from "@/types";
import {createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect} from "react";

type EmailContextType = {
    selectedEmail: Email | null;
	setSelectedEmail: Dispatch<SetStateAction<Email | null>>;
    emails: Email[];
	setEmails: Dispatch<SetStateAction<Email[]>>;
    scrollPosition: number;
    setScrollPosition: Dispatch<SetStateAction<number>>;
};
  
export const EmailContext = createContext<EmailContextType | null>(null);

export default function EmailProvider ({children}: {children:ReactNode}) {
    const [selectedEmail, setSelectedEmail] = useState<Email|null>(
        localStorage.getItem('selectedEmail') 
        ? JSON.parse(localStorage.getItem('selectedEmail') || '{}') 
        : null);
    const [emails, setEmails] = useState(
        localStorage.getItem('emails') 
        ? JSON.parse(localStorage.getItem('emails') || '{}') 
        : ()=>getUnreadSortedEmails());
    const [scrollPosition, setScrollPosition] = useState<number>(
        localStorage.getItem('scrollPosition') 
        ? JSON.parse(localStorage.getItem('scrollPosition') || '{}') 
        : 0);
    const value = {selectedEmail, setSelectedEmail, emails, setEmails, scrollPosition, setScrollPosition};
    useEffect(() => {
        localStorage.setItem('emails', JSON.stringify(emails));
    }, [emails]);
    useEffect(() => {
        localStorage.setItem('selectedEmail', JSON.stringify(selectedEmail));
    }, [selectedEmail]);
    useEffect(() => {
        localStorage.setItem('scrollPosition', JSON.stringify(scrollPosition)); 
    }, [scrollPosition]);
    return <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
}