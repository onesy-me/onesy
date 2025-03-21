import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssistantDevice = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantDevice'

      short_name='AssistantDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-680q-66 0-113 47t-47 113q0 66 47 113t113 47q66 0 113-47t47-113q0-66-47-113t-113-47Zm0 240q-33 0-56.5-23.5T400-520q0-33 23.5-56.5T480-600q33 0 56.5 23.5T560-520q0 33-23.5 56.5T480-440Zm160 160q17 0 28.5-11.5T680-320q0-17-11.5-28.5T640-360q-17 0-28.5 11.5T600-320q0 17 11.5 28.5T640-280ZM160-160v-520q0-83 58.5-141.5T360-880h240q83 0 141.5 58.5T800-680v520q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160Zm80-80h480v-440q0-50-35-85t-85-35H360q-50 0-85 35t-35 85v440Zm40 0h440-480 40Zm-40 0h480-480Z"/>
    </Icon>
  );
});

IconMaterialAssistantDevice.displayName = 'OnesyIconMaterialAssistantDevice';

export default IconMaterialAssistantDevice;
