import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackToTabFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackToTabFilled'

      short_name='BackToTab'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-663v103q0 17-11.5 28.5T120-520q-17 0-28.5-11.5T80-560v-200q0-17 11.5-28.5T120-800h200q17 0 28.5 11.5T360-760q0 17-11.5 28.5T320-720H216l143 143q12 12 12.5 28T360-521q-12 12-28.5 12T303-521L160-663Zm0 503q-33 0-56.5-23.5T80-240v-160q0-17 11.5-28.5T120-440q17 0 28.5 11.5T160-400v160h280q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H160Zm680-280q-17 0-28.5-11.5T800-480v-240H480q-17 0-28.5-11.5T440-760q0-17 11.5-28.5T480-800h320q33 0 56.5 23.5T880-720v240q0 17-11.5 28.5T840-440ZM600-160q-17 0-28.5-11.5T560-200v-120q0-17 11.5-28.5T600-360h240q17 0 28.5 11.5T880-320v120q0 17-11.5 28.5T840-160H600Z"/>
    </Icon>
  );
});

IconMaterialBackToTabFilled.displayName = 'OnesyIconMaterialBackToTabFilled';

export default IconMaterialBackToTabFilled;
