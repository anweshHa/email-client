import { Email, EmailStateTypes } from "@/types";

const mockEmails = [
    {
      "id": "a1b2c3d4e5f6g7h8",
      "sender": "john.doe@example.com",
      "title": "Meeting Reminder",
      "time": "2025-02-21T09:30:00Z",
      "email_body": "Hi Team,\n\nJust a reminder about our meeting scheduled for 10:00 AM. Please be on time.\n\nBest,\nJohn"
    },
    {
      "id": "a1b2c3d4e5f6g7h9",
      "sender": "jane.smith@example.com",
      "title": "Project Update",
      "time": "2025-02-20T14:15:00Z",
      "email_body": "Hello,\n\nHere's the latest update on the project. Let me know if you have any questions.\n\nThanks,\nJane"
    },
    {
      "id": "a1b2c3d4e5f6g7h0",
      "sender": "marketing@company.com",
      "title": "Exclusive Offer for You!",
      "time": "2025-02-19T18:00:00Z",
      "email_body": "Hi there,\n\nWe have an exclusive offer just for you! Get 20% off on your next purchase. Hurry, offer ends soon!\n\nCheers,\nMarketing Team"
    },
    {
      "id": "a1b2c3d4e5f6g8h0",
      "sender": "hr@company.com",
      "title": "Annual Leave Policy Update",
      "time": "2025-02-18T10:00:00Z",
      "email_body": "Dear Employees,\n\nPlease review the updated annual leave policy and let us know if you have any questions.\n\nBest,\nHR Team"
    },
    {
      "id": "a1b2c3d4e5f6g9h0",
      "sender": "support@service.com",    //missing id,
      "title": "Your Ticket Has Been Resolved",
      "time": "2025-02-17T16:30:00Z",
      "email_body": "Hello,\n\nYour support ticket #12345 has been resolved. Let us know if you need any further assistance.\n\nBest,\nSupport Team"
    },
    {
      "id": "a1b2c3d4e5f6g0h0",   //duplicate id
      "sender": "events@organization.org",
      "title": "Upcoming Webinar on Data Science",
      "time": "2025-02-16T12:00:00Z",
      "email_body": "Hi,\n\nJoin our upcoming webinar on Data Science Trends in 2025. Register now!\n\nRegards,\nEvent Team"
    },
    {
      "id": "a1b2c3d4e5f7g0h0",   //duplicate id, hence had to modify key for array map
      "sender": "alex.brown@example.com",
      "title": "Re: Feedback on Report",
      "time": "2025-02-15T15:45:00Z",
      "email_body": "Hi,\n\nThanks for your feedback. I have made the necessary changes as per your suggestions.\n\nBest,\nAlex"
    },
    {
      "id": "a1b2c3d4e5f8g0h0",
      "sender": "newsletter@technews.com",
      "title": "This Week's Top Tech News",
      "time": "2025-02-14T08:00:00Z",
      "email_body": "Hi,\n\nHere are the top tech news stories for this week. Stay updated!\n\nCheers,\nTech News Team"
    },
    {
      "id": "a1b2c3d4e5f9g0h0",
      "sender": "finance@company.com",
      "title": "Salary Slip - February 2025",
      "time": "2025-02-13T11:20:00Z",
      "email_body": "Dear Employee,\n\nYour salary slip for February 2025 is attached. Let us know if you have any queries.\n\nBest,\nFinance Team"
    },
    {
      "id": "a1b2c3d4e5f0g0h0",
      "sender": "admin@office.com",
      "title": "Office Maintenance Notice",
      "time": "2025-02-12T09:00:00Z",
      "email_body": "Hello,\n\nPlease note that office maintenance is scheduled for this weekend. Expect temporary disruptions.\n\nThanks,\nAdmin Team"
    },
    {
      "id": "a1b2c3d4e6f0g0h0",
      "sender": "noreply@bank.com",
      "title": "Your Monthly Account Statement",
      "time": "2025-02-11T13:45:00Z",
      "email_body": "Dear Customer,\n\nYour monthly account statement is now available. Please log in to view it.\n\nRegards,\nYour Bank"
    },
    {
      "id": "a1b2c3d4e7f0g0h0",
      "sender": "michael.jordan@example.com",
      "title": "Re: Collaboration Proposal",
      "time": "2025-02-10T14:30:00Z",
      "email_body": "Hi,\n\nI am interested in collaborating on this project. Let's discuss further.\n\nBest,\nMichael"
    },
    {
      "id": "a1b2c3d4e8f0g0h0",
      "sender": "sales@shop.com",
      "title": "Your Order Has Been Shipped!",
      "time": "2025-02-09T18:20:00Z",
      "email_body": "Hi,\n\nYour order #98765 has been shipped. Track your package here.\n\nThanks,\nSales Team"
    },
    {
      "id": "a1b2c3d4e9f0g0h0",
      "sender": "reminders@calendar.com",
      "title": "Upcoming Appointment",
      "time": "2025-02-08T07:30:00Z",
      "email_body": "Hello,\n\nThis is a reminder for your upcoming appointment scheduled for tomorrow.\n\nBest,\nCalendar Team"
    },
    {
      "id": "a1b2c3d4e0f0g0h0",
      "sender": "charity@helpinghands.org",
      "title": "Thank You for Your Donation",
      "time": "2025-02-07T19:15:00Z",
      "email_body": "Dear Donor,\n\nThank you for your generous donation. Your support makes a difference!\n\nBest Regards,\nHelping Hands Team"
    },
    {
      "id": "a1b2c3d5e0f0g0h0",
      "sender": "security@service.com",
      "title": "Suspicious Login Attempt Detected",
      "time": "2025-02-06T22:10:00Z",
      "email_body": "Hi,\n\nWe detected a suspicious login attempt on your account. If this wasn't you, please reset your password immediately.\n\nRegards,\nSecurity Team"
    },
    {
      "id": "a1b2c3d6e0f0g0h0",
      "sender": "travel@agency.com",
      "title": "Your Trip Itinerary",
      "time": "2025-02-05T17:00:00Z",
      "email_body": "Hello,\n\nHere is your trip itinerary for your upcoming vacation. Have a great trip!\n\nBest,\nTravel Agency"
    },
    {
      "id": "a1b2c3d7e0f0g0h0",   //duplicate id,
      "sender": "lucas.white@example.com",
      "title": "Re: Request for Information",
      "time": "2025-02-04T15:00:00Z",
      "email_body": "Hi,\n\nPlease find attached the requested information. Let me know if you need anything else.\n\nRegards,\nLucas"
    },
    {
      "id": "a1b2c3d8e0f0g0h0",
      "sender": "rewards@loyalty.com",
      "title": "You've Earned Reward Points!",
      "time": "2025-02-03T09:30:00Z",
      "email_body": "Hi,\n\nYou've earned 500 reward points! Redeem them now for exclusive benefits.\n\nCheers,\nLoyalty Team"
    },
    {
      "id": "a1b2c3d9e0f0g0h0",  //duplicate id,
      "sender": "info@conference2025.com",
      "title": "Early Bird Registration Open",
      "time": "2025-02-02T10:45:00Z",
      "email_body": "Hello,\n\nEarly bird registration for Conference 2025 is now open. Reserve your spot today!\n\nRegards,\nConference Team \na\ns\nd\nf\ng\nh\ni\nj\nk\nl\nm\nn\no\np\nq\nr\ns\nt\nu\nv\nw\nx\ny\nz"
    }
  ];
export const getUnreadSortedEmails = (): Email[] => mockEmails
    .map((e, index) => ({ 
      ...e, 
      read: false, 
      sender_name: e.sender.split('@')[0].split('.').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      state: EmailStateTypes.INBOX,
    }))
    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());