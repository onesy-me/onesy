import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTroubleshootFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TroubleshootFilled'

      short_name='Troubleshoot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-240q-63 0-117.5-22T226-322q-12-11-11-26.5t14-26.5q13-11 30-10.5t30 11.5q32 26 69.5 40t81.5 14q100 0 170-70t70-170q0-100-70-170t-170-70q-83 0-146.5 50T209-623q-5 17-18 30t-30 13q-17 0-27.5-13.5T127-624q23-110 109.5-183T440-880q134 0 227 93t93 227q0 56-18 105.5T692-364l160 160q11 11 11 28t-11 28q-11 11-28 11t-28-11L636-308q-41 32-90.5 50T440-240Zm-13-266 37-115q3-8 9.5-13.5T489-640h24q8 0 14 4t10 11l53 105q13 0 21.5 8.5T620-490q0 13-8.5 21.5T590-460h-18q-8 0-15.5-4.5T545-477l-39-77-44 135q-3 9-10 14t-16 5h-18q-9 0-16.5-5.5T391-420l-57-188-45 128q-3 9-10.5 14.5T261-460H110q-13 0-21.5-8.5T80-490q0-13 8.5-21.5T110-520h130l59-171q3-9 10.5-14t16.5-5h19q10 0 17 6t10 15l55 183Z"/>
    </Icon>
  );
});

IconMaterialTroubleshootFilled.displayName = 'OnesyIconMaterialTroubleshootFilled';

export default IconMaterialTroubleshootFilled;
