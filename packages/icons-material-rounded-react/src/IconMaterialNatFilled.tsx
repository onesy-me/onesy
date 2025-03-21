import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatFilled'

      short_name='Nat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-360q-50 0-85-35t-35-85q0-50 35-85t85-35q39 0 69.5 22.5T272-520h128q17 0 28.5 11.5T440-480q0 17-11.5 28.5T400-440H272q-12 35-42.5 57.5T160-360Zm0-80q17 0 28.5-11.5T200-480q0-17-11.5-28.5T160-520q-17 0-28.5 11.5T120-480q0 17 11.5 28.5T160-440Zm360-40q0-124-82-214T236-798q-16-2-26-14t-10-28q0-17 10.5-28.5T237-878q144 13 245.5 114T598-520h168l-35-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L788-348q-11 11-27.5 11.5T732-348q-11-11-11.5-27.5T731-404l35-36H598q-14 143-115.5 244T237-82q-16 2-26.5-9.5T200-120q0-16 10-28t26-14q120-14 202-104t82-214Z"/>
    </Icon>
  );
});

IconMaterialNatFilled.displayName = 'OnesyIconMaterialNatFilled';

export default IconMaterialNatFilled;
