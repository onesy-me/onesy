import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHangoutVideoOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutVideoOff'

      short_name='HangoutVideoOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M436-638h84q17 0 28.5 11.5T560-598v84L436-638Zm124 124 111-88q15-11 32-3t17 27v224L560-514Zm310 310q5-9 7.5-18t2.5-18v-480q0-33-23.5-56.5T800-800H274l80 80h446v446l70 70ZM160-800l80 80h-80v480h446l-80-80H280q-17 0-28.5-11.5T240-360v-246L56-792q-11-11-11.5-27.5T56-848q11-11 28-11t28 11l736 736q11 11 11.5 27.5T848-56q-11 11-28 11t-28-11L686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Zm418 304Zm-194 34Z"/>
    </Icon>
  );
});

IconMaterialHangoutVideoOff.displayName = 'OnesyIconMaterialHangoutVideoOff';

export default IconMaterialHangoutVideoOff;
