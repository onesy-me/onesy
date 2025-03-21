import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovedLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovedLocationFilled'

      short_name='MovedLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M717-330q-45 64-95.5 117T533-127q-11 10-25 15t-28 5q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-136 93-232t227-96q25 0 49.5 3.5T578-865q13 4 21 14t8 24q0 17-11.5 29T567-786q-11 0-14-3-17-6-36-8.5t-37-2.5q-101 0-170.5 72.5T240-552q0 71 59 162t181 203q56-51 99-96.5t71-90.5q7-11 16.5-18.5T688-400q17 0 29 12t12 29q0 8-3.5 15t-8.5 14Zm33-252q-43-8-137.5 9T400-441q32-117 129-188t219-71l-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l144 144q12 12 12 28t-12 28L748-468q-11 11-27.5 11T692-468q-11-11-11-28t11-28l58-58Z"/>
    </Icon>
  );
});

IconMaterialMovedLocationFilled.displayName = 'OnesyIconMaterialMovedLocationFilled';

export default IconMaterialMovedLocationFilled;
