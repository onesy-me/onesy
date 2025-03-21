import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPortableWifiOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PortableWifiOff'

      short_name='PortableWifiOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M763-84 325-521q-2 10-3.5 20t-1.5 21q0 26 7.5 48t20.5 42q10 14 9.5 30.5T346-332q-12 12-29 12.5T290-333q-23-31-36.5-68T240-480q0-28 6-54t17-49l-59-59q-21 36-32.5 76.5T160-480q0 58 19 109.5t54 93.5q11 13 11.5 29.5T233-219q-12 12-29 12t-28-13q-45-53-70.5-119T80-480q0-62 17-117t49-103l-63-63q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Zm37-396q0-64-24.5-122.5T706-706q-45-45-103.5-69.5T480-800q-38 0-75.5 8T335-764q-14 9-31 4.5T278-778q-9-14-5-30t18-24q44-23 91.5-35.5T480-880q80 0 153 30t130 87q57 57 87 130t30 153q0 49-12 96.5T833-292q-8 14-23.5 17.5T780-279q-14-8-18.5-24t3.5-31q18-34 26.5-71t8.5-75ZM593-593q-23-23-52-35t-61-12q-11 0-21 1.5t-20 3.5q-17 4-30.5-4.5T391-665q-4-17 4.5-30.5T421-713q14-4 29-5.5t30-1.5q48 0 92 18t78 52q34 34 52 78t18 92q0 15-1.5 30t-5.5 29q-4 17-17.5 25.5T665-391q-17-4-25.5-17.5T635-439q2-10 3.5-20t1.5-21q0-32-12-61t-35-52Z"/>
    </Icon>
  );
});

IconMaterialPortableWifiOff.displayName = 'OnesyIconMaterialPortableWifiOff';

export default IconMaterialPortableWifiOff;
