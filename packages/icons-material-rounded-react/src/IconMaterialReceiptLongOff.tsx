import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReceiptLongOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptLongOff'

      short_name='ReceiptLongOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m791-56-31-31q-10 3-19.5 5T720-80H240q-50 0-85-35t-35-85v-80q0-17 11.5-28.5T160-320h80v-287L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q14 14 12.5 30T848-56q-11 11-27 12.5T791-56ZM240-160h447l-80-80H200v40q0 17 11.5 28.5T240-160Zm520-170v-430H346q-16 0-30.5-6T290-783l-45-45q-6-6-5.5-12.5T245-852q5-5 11-5.5t12 5.5l18 18q6 6 14 6t14-6l32-32q6-6 14-6t14 6l32 32q6 6 14 6t14-6l32-32q6-6 14-6t14 6l32 32q6 6 14 6t14-6l32-32q6-6 14-6t14 6l32 32q6 6 14 6t14-6l32-32q6-6 14-6t14 6l32 32q6 6 14 6t14-6l29-29q5-5 11-2.5t6 9.5v526q0 20-12.5 30T800-290q-15 0-27.5-10T760-330Zm-440 10h207L320-527v207Zm240-280h-68q-20 0-30-12.5T452-640q0-15 10-27.5t30-12.5h68q17 0 28.5 11.5T600-640q0 17-11.5 28.5T560-600Zm120 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480Zm0-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600ZM200-160v-80 80Z"/>
    </Icon>
  );
});

IconMaterialReceiptLongOff.displayName = 'OnesyIconMaterialReceiptLongOff';

export default IconMaterialReceiptLongOff;
