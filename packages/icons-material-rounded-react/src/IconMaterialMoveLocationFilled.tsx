import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveLocationFilled'

      short_name='MoveLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-552q0-150 96.5-239T400-880q127 0 223.5 89T720-552v17q0 9-2 18-54 11-94.5 41.5T558-402q-25 43-31.5 93t9.5 101q-20 21-40.5 40.5T453-128q-11 11-25 16t-28 5q-14 0-28-5t-25-16q-41-36-88-84.5t-86.5-104Q133-372 106.5-432T80-552Zm320 192q56 0 101-27.5t71-72.5q-35-29-79-44.5T400-520q-49 0-93 15.5T228-460q26 45 71 72.5T400-360Zm0-200q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm377 320H650q-17 0-28.5-11.5T610-280q0-17 11.5-28.5T650-320h127l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L798-148q-11 11-27.5 11.5T742-148q-11-11-11-28t11-28l35-36Z"/>
    </Icon>
  );
});

IconMaterialMoveLocationFilled.displayName = 'OnesyIconMaterialMoveLocationFilled';

export default IconMaterialMoveLocationFilled;
