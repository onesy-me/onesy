import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotAccessibleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotAccessibleFilled'

      short_name='NotAccessible'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M763-84 567-280h-87q-33 0-56.5-23.5T400-360v-87L84-763q-11-11-11-27.5T84-819q12-12 28.5-12t28.5 12l679 679q12 12 11.5 28T819-84q-12 11-28 11.5T763-84Zm-363 4q-83 0-141.5-58.5T200-280q0-73 45.5-127.5T360-476v83q-35 13-57.5 43.5T280-280q0 50 35 85t85 35q39 0 70-22.5t43-57.5h83q-14 69-68.5 114.5T400-80Zm80-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Zm280 240q0 17-12.5 28t-28.5 8q-44-8-85.5-28T560-518L423-655q10-11 23-17.5t34-6.5q15 0 33 7t33 22l51 57q23 26 55 44t67 25q17 3 29 15t12 29Z"/>
    </Icon>
  );
});

IconMaterialNotAccessibleFilled.displayName = 'OnesyIconMaterialNotAccessibleFilled';

export default IconMaterialNotAccessibleFilled;
