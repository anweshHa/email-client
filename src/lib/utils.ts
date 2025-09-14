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
    },
    {
      "id": "a1b2c3d10e0f0g0h0",
      "sender": "team@collab.com",
      "title": "New Project Invitation",
      "time": "2025-02-01T11:20:00Z",
      "email_body": "Hello,\n\nYou've been invited to collaborate on a new project. Please confirm your participation.\n\nBest,\nTeam Collab"
    },
    {
      "id": "a1b2c3d11e0f0g0h0",
      "sender": "notifications@social.com",
      "title": "New Connection Request",
      "time": "2025-01-31T13:15:00Z",
      "email_body": "Hi,\n\nYou have a new connection request waiting for your approval.\n\nRegards,\nSocial Team"
    },
    {
      "id": "a1b2c3d12e0f0g0h0",
      "sender": "billing@service.com",
      "title": "Your Subscription Renewal",
      "time": "2025-01-30T16:45:00Z",
      "email_body": "Dear Customer,\n\nYour subscription will renew automatically next week. Review your plan details.\n\nThanks,\nBilling Team"
    },
    {
      "id": "a1b2c3d13e0f0g0h0",
      "sender": "training@skills.com",
      "title": "New Course Available",
      "time": "2025-01-29T09:10:00Z",
      "email_body": "Hello,\n\nWe've launched a new course that matches your interests. Enroll now!\n\nBest,\nSkills Team"
    },
    {
      "id": "a1b2c3d14e0f0g0h0",
      "sender": "delivery@logistics.com",
      "title": "Package Delivery Update",
      "time": "2025-01-28T14:30:00Z",
      "email_body": "Hi,\n\nYour package delivery has been rescheduled. Check the new delivery window.\n\nRegards,\nLogistics Team"
    },
    {
      "id": "a1b2c3d15e0f0g0h0",
      "sender": "feedback@survey.com",
      "title": "Share Your Experience",
      "time": "2025-01-27T10:00:00Z",
      "email_body": "Dear User,\n\nWe'd love to hear about your recent experience with our service.\n\nThanks,\nSurvey Team"
    },
    {
      "id": "a1b2c3d16e0f0g0h0",
      "sender": "alerts@weather.com",
      "title": "Weather Advisory",
      "time": "2025-01-26T07:45:00Z",
      "email_body": "Hello,\n\nImportant weather advisory for your area. Stay safe!\n\nBest,\nWeather Alerts"
    },
    {
      "id": "a1b2c3d17e0f0g0h0",
      "sender": "recruiting@careers.com",
      "title": "Interview Scheduled",
      "time": "2025-01-25T15:20:00Z",
      "email_body": "Hi,\n\nYour interview has been scheduled for next week. See attached details.\n\nRegards,\nHR Team"
    },
    {
      "id": "a1b2c3d18e0f0g0h0",
      "sender": "support@software.com",
      "title": "New Feature Released",
      "time": "2025-01-24T12:10:00Z",
      "email_body": "Hello,\n\nWe've released an exciting new feature. Check it out!\n\nBest,\nSoftware Team"
    },
    {
      "id": "a1b2c3d19e0f0g0h0",
      "sender": "community@forum.com",
      "title": "New Discussion in Your Group",
      "time": "2025-01-23T18:30:00Z",
      "email_body": "Hi,\n\nThere's new activity in your discussion group. Join the conversation!\n\nCheers,\nCommunity Team"
    },
    {
      "id": "a1b2c3d20e0f0g0h0",
      "sender": "legal@company.com",
      "title": "Updated Terms of Service",
      "time": "2025-01-22T11:00:00Z",
      "email_body": "Dear User,\n\nWe've updated our Terms of Service. Please review the changes.\n\nBest,\nLegal Team"
    },
    {
      "id": "a1b2c3d21e0f0g0h0",
      "sender": "events@local.com",
      "title": "Upcoming Events in Your Area",
      "time": "2025-01-21T17:15:00Z",
      "email_body": "Hello,\n\nDiscover exciting events happening near you this weekend.\n\nRegards,\nLocal Events"
    },
    {
      "id": "a1b2c3d22e0f0g0h0",
      "sender": "health@wellness.com",
      "title": "Your Weekly Health Tips",
      "time": "2025-01-20T08:45:00Z",
      "email_body": "Hi,\n\nHere are your personalized health tips for this week. Stay healthy!\n\nBest,\nWellness Team"
    },
    {
      "id": "a1b2c3d23e0f0g0h0",
      "sender": "finance@invest.com",
      "title": "Quarterly Investment Report",
      "time": "2025-01-19T14:00:00Z",
      "email_body": "Dear Investor,\n\nYour quarterly investment report is now available.\n\nRegards,\nFinance Team"
    },
    {
      "id": "a1b2c3d24e0f0g0h0",
      "sender": "updates@network.com",
      "title": "New Connections in Your Network",
      "time": "2025-01-18T10:30:00Z",
      "email_body": "Hello,\n\nSee who's new in your professional network this week.\n\nBest,\nNetwork Team"
    },
    {
      "id": "a1b2c3d25e0f0g0h0",
      "sender": "library@books.com",
      "title": "Your Borrowed Books Due Soon",
      "time": "2025-01-17T13:20:00Z",
      "email_body": "Hi,\n\nSome of your borrowed books are due soon. Renew or return them.\n\nThanks,\nLibrary Team"
    },
    {
      "id": "a1b2c3d26e0f0g0h0",
      "sender": "coach@fitness.com",
      "title": "Your Weekly Workout Plan",
      "time": "2025-01-16T06:15:00Z",
      "email_body": "Hello,\n\nHere's your customized workout plan for this week. Let's get moving!\n\nBest,\nYour Coach"
    },
    {
      "id": "a1b2c3d27e0f0g0h0",
      "sender": "orders@store.com",
      "title": "Your Recent Order Summary",
      "time": "2025-01-15T19:30:00Z",
      "email_body": "Hi,\n\nHere's a summary of your recent orders with us.\n\nRegards,\nStore Team"
    },
    {
      "id": "a1b2c3d28e0f0g0h0",
      "sender": "admin@system.com",
      "title": "System Maintenance Notification",
      "time": "2025-01-14T22:00:00Z",
      "email_body": "Hello,\n\nPlanned system maintenance is scheduled for tomorrow night.\n\nThanks,\nAdmin Team"
    },
    {
      "id": "a1b2c3d29e0f0g0h0",
      "sender": "partner@business.com",
      "title": "New Partnership Opportunity",
      "time": "2025-01-13T15:45:00Z",
      "email_body": "Hi,\n\nWe have an exciting new partnership opportunity to discuss.\n\nBest,\nBusiness Team"
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