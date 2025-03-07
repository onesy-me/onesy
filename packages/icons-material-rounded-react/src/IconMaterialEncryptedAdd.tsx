import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEncryptedAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedAdd'

      short_name='EncryptedAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480ZM455-87q-134-44-214.5-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v186q0 17-11.5 28.5T760-479q-17 0-28.5-11.5T720-519v-186l-240-90-240 90v189q0 121 68 220t172 132q16 5 23.5 20t2.5 31q-5 16-20 23.5T455-87Zm225-113h-80q-17 0-28.5-11.5T560-240q0-17 11.5-28.5T600-280h80v-80q0-17 11.5-28.5T720-400q17 0 28.5 11.5T760-360v80h80q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200h-80v80q0 17-11.5 28.5T720-80q-17 0-28.5-11.5T680-120v-80ZM444-360h72q9 0 15.5-7.5T536-384l-19-105q20-10 31.5-29t11.5-42q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 23 11.5 42t31.5 29l-19 105q-2 9 4.5 16.5T444-360Z"/>
    </Icon>
  );
});

IconMaterialEncryptedAdd.displayName = 'OnesyIconMaterialEncryptedAdd';

export default IconMaterialEncryptedAdd;
