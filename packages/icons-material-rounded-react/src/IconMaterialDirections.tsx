import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirections = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Directions'

      short_name='Directions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-480h140v52q0 14 12 19t22-5l78-78q12-12 12-28t-12-28l-78-78q-10-10-22-5t-12 19v52H360q-17 0-28.5 11.5T320-520v120q0 17 11.5 28.5T360-360q17 0 28.5-11.5T400-400v-80Zm80 400q-15 0-29.5-6T424-104L104-424q-12-12-18-26.5T80-480q0-15 6-29.5t18-26.5l320-320q12-12 26.5-18t29.5-6q15 0 29.5 6t26.5 18l320 320q12 12 18 26.5t6 29.5q0 15-6 29.5T856-424L536-104q-12 12-26.5 18T480-80ZM320-320l160 160 320-320-320-320-320 320 160 160Zm160-160Z"/>
    </Icon>
  );
});

IconMaterialDirections.displayName = 'OnesyIconMaterialDirections';

export default IconMaterialDirections;
