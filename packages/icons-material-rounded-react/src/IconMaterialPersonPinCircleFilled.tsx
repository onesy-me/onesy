import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonPinCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinCircleFilled'

      short_name='PersonPinCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-107q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 45-17.5 94.5t-51 103Q698-301 648-244T533-127q-11 10-25 15t-28 5Zm0-253q56 0 101-27.5t71-72.5q-35-29-79-44.5T480-520q-49 0-93 15.5T308-460q26 45 71 72.5T480-360Zm0-200q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Z"/>
    </Icon>
  );
});

IconMaterialPersonPinCircleFilled.displayName = 'OnesyIconMaterialPersonPinCircleFilled';

export default IconMaterialPersonPinCircleFilled;
