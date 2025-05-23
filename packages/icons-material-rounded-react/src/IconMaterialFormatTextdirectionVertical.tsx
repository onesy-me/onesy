import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatTextdirectionVertical = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextdirectionVertical'

      short_name='FormatTextdirectionVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240q-17 0-28.5-11.5T240-280v-160q-66 0-113-47T80-600q0-66 47-113t113-47h280q17 0 28.5 11.5T560-720q0 17-11.5 28.5T520-680h-40v400q0 17-11.5 28.5T440-240q-17 0-28.5-11.5T400-280v-400h-80v400q0 17-11.5 28.5T280-240Zm440 63q-8 0-15-2.5t-13-8.5L588-292q-11-11-11.5-27.5T588-348q11-11 28-11t28 11l36 35v-407q0-17 11.5-28.5T720-760q17 0 28.5 11.5T760-720v407l36-36q12-12 28-11.5t28 12.5q11 12 11.5 28T852-292L748-188q-6 6-13 8.5t-15 2.5ZM240-520v-160q-33 0-56.5 23.5T160-600q0 33 23.5 56.5T240-520Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialFormatTextdirectionVertical.displayName = 'OnesyIconMaterialFormatTextdirectionVertical';

export default IconMaterialFormatTextdirectionVertical;
