import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAmpStories = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmpStories'

      short_name='AmpStories'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-160q-17 0-28.5-11.5T280-200v-560q0-17 11.5-28.5T320-800h320q17 0 28.5 11.5T680-760v560q0 17-11.5 28.5T640-160H320ZM120-280v-401q0-17 11.5-28t28.5-11q17 0 28.5 11.5T200-680v401q0 17-11.5 28T160-240q-17 0-28.5-11.5T120-280Zm640 0v-401q0-17 11.5-28t28.5-11q17 0 28.5 11.5T840-680v401q0 17-11.5 28T800-240q-17 0-28.5-11.5T760-280Zm-400 40h240v-480H360v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialAmpStories.displayName = 'OnesyIconMaterialAmpStories';

export default IconMaterialAmpStories;
