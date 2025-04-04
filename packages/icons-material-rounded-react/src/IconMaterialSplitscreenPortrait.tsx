import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenPortrait = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenPortrait'

      short_name='SplitscreenPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240h240q17 0 28.5-11.5T640-280v-120q0-17-11.5-28.5T600-440H360q-17 0-28.5 11.5T320-400v120q0 17 11.5 28.5T360-240Zm0-280h240q17 0 28.5-11.5T640-560v-120q0-17-11.5-28.5T600-720H360q-17 0-28.5 11.5T320-680v120q0 17 11.5 28.5T360-520Zm440 360q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Zm-80 0v-640H240v640h480Zm0-640H240h480Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenPortrait.displayName = 'OnesyIconMaterialSplitscreenPortrait';

export default IconMaterialSplitscreenPortrait;
