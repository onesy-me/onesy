import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFollowTheSignsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FollowTheSignsFilled'

      short_name='FollowTheSigns'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-740q-33 0-56.5-23.5T300-820q0-33 23.5-56.5T380-900q33 0 56.5 23.5T460-820q0 33-23.5 56.5T380-740ZM274-360 211-72q-3 14-14.5 23T170-40q-20 0-32-15t-8-34l100-515-70 30v94q0 17-11.5 28.5T120-440q-17 0-28.5-11.5T80-480v-121q0-12 7-22t18-15l185-76q27-11 55-2.5t43 34.5l38 64q22 35 56.5 60.5T560-524q17 4 28.5 15.5T600-480q0 17-11.5 28t-28.5 9q-54-8-99.5-34T382-544l-24 120 59 59q11 11 17 25.5t6 30.5v229q0 17-11.5 28.5T400-40q-17 0-28.5-11.5T360-80v-200l-86-80Zm396-240H560q-17 0-28.5-11.5T520-640v-200q0-17 11.5-28.5T560-880h280q17 0 28.5 11.5T880-840v200q0 17-11.5 28.5T840-600H730v530q0 13-8.5 21.5T700-40q-13 0-21.5-8.5T670-70v-530Zm34-110-5 5q-9 9-9 21t9 21q9 9 21.5 9t21.5-9l50-49q6-6 8.5-13t2.5-15q0-8-2.5-15t-8.5-13l-50-50q-9-9-21-9t-21 9q-9 9-9 21.5t9 21.5l4 5h-94q-13 0-21.5 8.5T580-740q0 13 8.5 21.5T610-710h94Z"/>
    </Icon>
  );
});

IconMaterialFollowTheSignsFilled.displayName = 'OnesyIconMaterialFollowTheSignsFilled';

export default IconMaterialFollowTheSignsFilled;
