import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMediaOutputOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaOutputOff'

      short_name='MediaOutputOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M288-560ZM480-80q-33 0-56.5-23.5T400-160v-160q0-51 19-94.5t51-75.5l43 43q-25 25-39 57t-14 70v40h60q17 0 28.5 11.5T560-240v120q0 17-11.5 28.5T520-80h-40Zm-160-80H160q-33 0-56.5-23.5T80-240v-560h80v560h160v80Zm263-331-46-46q23-11 49-17t54-6q100 0 170 70t70 170v126l-60-60v-66q0-75-52.5-127.5T640-500q-15 0-29 2t-28 7ZM320-281q-51-8-85.5-46.5T200-420q0-58 41-99t99-41q19 0 36.5 4.5T409-542q-14 15-26.5 31.5T360-476q-5-2-10-3t-10-1q-25 0-42.5 17.5T280-420q0 20 12 36t31 21q-2 11-2.5 21.5T320-320v39Zm-46-519-80-80h326q33 0 56.5 23.5T600-800v162q-21 2-41 7.5T520-617v-183H274Zm137 102ZM792-56 56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11Z"/>
    </Icon>
  );
});

IconMaterialMediaOutputOff.displayName = 'OnesyIconMaterialMediaOutputOff';

export default IconMaterialMediaOutputOff;
