import { useState, ChangeEvent, FormEvent } from 'react';
import './communication.css';

const Communication = () => {
  const [smsNumber, setSmsNumber] = useState('');
  const [smsMessage, setSmsMessage] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [noticeMessage, setNoticeMessage] = useState('');
  const [notices, setNotices] = useState<string[]>(['Welcome to the notice board. All important updates will appear here.']);
  const [activeSection, setActiveSection] = useState('sms');

  const handleSmsSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`SMS sent to ${smsNumber} with message: "${smsMessage}"`);
    setSmsNumber('');
    setSmsMessage('');
  };

  const handleEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Email sent to ${emailAddress} with subject: "${emailSubject}" and message: "${emailMessage}"`);
    setEmailAddress('');
    setEmailSubject('');
    setEmailMessage('');
  };

  const handleChatSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChatMessages([...chatMessages, `You: ${chatInput}`]);
    setChatInput('');
  };

  const handleNoticeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotices([...notices, noticeMessage]);
    setNoticeMessage('');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'sms':
        return (
          <section id="sms" className="section">
            <h2>Send SMS</h2>
            <form onSubmit={handleSmsSubmit} className='communication_form'>
              <label htmlFor="smsNumber">Phone Number:</label>
              <input
                type="text"
                id="smsNumber"
                value={smsNumber}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSmsNumber(e.target.value)}
                required
              />
              <label htmlFor="smsMessage">Message:</label>
              <textarea
                id="smsMessage"
                value={smsMessage}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSmsMessage(e.target.value)}
                required
              />
              <button type="submit">Send SMS</button>
            </form>
          </section>
        );
      case 'email':
        return (
          <section id="email" className="section">
            <h2>Send Email</h2>
            <form onSubmit={handleEmailSubmit}>
              <label htmlFor="emailAddress">Email Address:</label>
              <input
                type="email"
                id="emailAddress"
                value={emailAddress}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmailAddress(e.target.value)}
                required
              />
              <label htmlFor="emailSubject">Subject:</label>
              <input
                type="text"
                id="emailSubject"
                value={emailSubject}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmailSubject(e.target.value)}
                required
              />
              <label htmlFor="emailMessage">Message:</label>
              <textarea
                id="emailMessage"
                value={emailMessage}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setEmailMessage(e.target.value)}
                required
              />
              <button type="submit">Send Email</button>
            </form>
          </section>
        );
      case 'chat':
        return (
          <section id="chat" className="section">
            <h2>Chat with HOD</h2>
            <div className="chatWindow">
              {chatMessages.map((msg, index) => (
                <p key={index}>{msg}</p>
              ))}
            </div>
            <form onSubmit={handleChatSubmit}>
              <input
                type="text"
                id="chatInput"
                value={chatInput}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setChatInput(e.target.value)}
                placeholder="Type your message here..."
                required
              />
              <button type="submit">Send</button>
            </form>
          </section>
        );
      case 'notice-board':
        return (
          <section id="notice-board" className="section">
            <h2>Notice Board</h2>
            <div id="notices" className="notices">
              {notices.map((notice, index) => (
                <p key={index}>{notice}</p>
              ))}
            </div>
            <form onSubmit={handleNoticeSubmit}>
              <label htmlFor="noticeMessage">New Notice:</label>
              <textarea
                id="noticeMessage"
                value={noticeMessage}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNoticeMessage(e.target.value)}
                required
              />
              <button type="submit">Post Notice</button>
            </form>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <header className="communication_header">
        <h1>Communication Portal</h1>
        <nav>
          <ul className="navList">
            <li><a href="#sms" onClick={() => setActiveSection('sms')}>SMS</a></li>
            <li><a href="#email" onClick={() => setActiveSection('email')}>Email</a></li>
            <li><a href="#chat" onClick={() => setActiveSection('chat')}>Chat</a></li>
            <li><a href="#notice-board" onClick={() => setActiveSection('notice-board')}>Notice Board</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        {renderSection()}
      </main>
    </div>
  );
};

export default Communication;
