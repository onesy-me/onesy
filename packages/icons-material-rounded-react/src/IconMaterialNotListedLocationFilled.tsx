import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotListedLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotListedLocationFilled'

      short_name='NotListedLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-320q17 0 29.5-12.5T522-362q0-17-12.5-29.5T480-404q-17 0-29.5 12.5T438-362q0 17 12.5 29.5T480-320Zm114-298q0-47-31-74.5T485-720q-46 0-77.5 21T376-651q0 10 4 16.5t12 9.5q11 4 21.5-.5T434-641q9-11 21-16t26-5q23 0 38 12.5t15 31.5q0 18-8.5 29T497-561q-25 21-35 43t-10 40q0 16 7.5 25t21.5 9q13 0 21-8t10-23q2-15 13.5-29.5T550-532q23-23 33.5-44.5T594-618ZM480-107q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 45-17.5 94.5t-51 103Q698-301 648-244T533-127q-11 10-25 15t-28 5Z"/>
    </Icon>
  );
});

IconMaterialNotListedLocationFilled.displayName = 'OnesyIconMaterialNotListedLocationFilled';

export default IconMaterialNotListedLocationFilled;
