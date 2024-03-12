import React from 'react';
import Toast, { addToast } from '../components/Toster/TosterNotification';
import { toast } from 'react-toastify';
import { Button } from '../components';

const TosterExample: React.FC = () => {
  const handleApiSuccess = () => {
 addToast("Api Call Successfully","success");
 
};
const handleApiFailure = () => {
addToast("API call successful","error")

};
const handleApiWarning = () => {
  addToast("API call successful","warning")
};
const handleApiInfo = () => {
  addToast("API call successful","info")
};

  return (
    <div>
      {/* <Toast message="API call successful!" type="warning" /> */}
      <Button onClick={handleApiSuccess}>Simulate API Success</Button>
      <Button onClick={handleApiFailure}>Simulate API Error</Button>

      <Button onClick={handleApiInfo}>Simulate API Info</Button>

      <Button onClick={handleApiWarning}>Simulate API Warning</Button>

    </div>
  );
};

export default TosterExample;