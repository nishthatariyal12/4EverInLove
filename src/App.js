import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure Route and Routes are imported
import MainPage from './screens/MainPage';
import ContactUs from './screens/ContactUs';
import PrivacyPolicy from './screens/PrivacyPolicy'
import Faq from './screens/Faq';
import TermsAndCondition from './screens/TermsAndConditions'
import RefundAndCancellation from './screens/RefundAndCancellation'
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<MainPage />} /> 
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="/terms-and-conditions" element={<TermsAndCondition/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path ="refund-and-cancellation" element={<RefundAndCancellation/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
