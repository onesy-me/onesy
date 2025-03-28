import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkRingOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkRingOff'

      short_name='PhonelinkRingOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M792-56 56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM200-703l80 80v383h384l96 96v24q0 33-23.5 56.5T680-40H280q-33 0-56.5-23.5T200-120v-583Zm80 543v40h400v-40H280Zm440-520q-17 0-28.5-11.5T680-720H359q-17 0-28-11.5T320-760q0-17 11.5-28.5T360-800h320v-40H280q-17 0-28.5-11.5T240-880q0-17 11.5-28.5T280-920h400q33 0 56.5 23.5T760-840v120q0 17-11.5 28.5T720-680ZM280-160v40-40Zm641-320q0 50-16 96.5T859-298q-10 13-26.5 13.5T804-296q-11-11-11.5-28t9.5-31q19-27 29-59t10-66q0-34-10-66t-29-59q-10-14-9.5-31t11.5-28q12-12 28.5-11.5T859-662q30 39 46 85.5t16 96.5ZM680-840v40-40Zm101 360q0 32-12.5 61.5T734-366q-5 5-13 8.5t-16 3.5q-17 0-29-12t-12-29q0-8 3.5-16t8.5-13q12-12 18.5-25.5T701-480q0-15-7-30t-18-26q-5-5-8.5-13t-3.5-16q0-17 12-29t29-12q8 0 16 3.5t13 8.5q22 23 34.5 52.5T781-480Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkRingOff.displayName = 'OnesyIconMaterialPhonelinkRingOff';

export default IconMaterialPhonelinkRingOff;
