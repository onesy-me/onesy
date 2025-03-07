import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIframeOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeOff'

      short_name='IframeOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800v114L54-792q-12-12-11.5-28.5T55-849q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T790-57L686-160H160Zm0-80h446L206-640h-46v400Zm720-480v440q0 20-12.5 30T840-240q-15 0-27.5-10.5T800-281v-359H467q-16 0-30.5-6T411-663l-69-69q-9-10-11-21t3-22q5-11 14-18t23-7h429q33 0 56.5 23.5T880-720ZM720-520v94q0 15-9.5 22t-20.5 7q-11 0-20.5-7.5T660-426v-74h-74q-14 0-21.5-9.5T557-530q0-11 7-20.5t22-9.5h94q17 0 28.5 11.5T720-520Z"/>
    </Icon>
  );
});

IconMaterialIframeOff.displayName = 'OnesyIconMaterialIframeOff';

export default IconMaterialIframeOff;
