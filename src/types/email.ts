export enum EmailStateTypes {INBOX='inbox', SENT= 'sent', DRAFT= 'draft', TRASH= 'trash', SPAM= 'spam', DELETED= 'deleted'} ;
export type EmailState = EmailStateTypes.INBOX | EmailStateTypes.SENT | EmailStateTypes.DRAFT | EmailStateTypes.TRASH | EmailStateTypes.SPAM | EmailStateTypes.DELETED;

export type Email = {
    id: string;
    sender: string;
    sender_name: string;
    title: string;
    time: string;
    email_body: string;
    read: boolean;
    state: EmailState;
  };