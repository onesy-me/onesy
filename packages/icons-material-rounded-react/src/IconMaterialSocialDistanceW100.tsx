import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSocialDistanceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SocialDistanceW100'

      short_name='SocialDistance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m179-286 81 81q4 4 4 9t-4 9q-4 4-9.5 4t-9.5-4l-93-92q-9-9-9-21t9-21l93-93q4-4 9.5-4t9.5 4q4 4 4 9.5t-4 9.5l-81 81h602l-81-81q-4-4-4-9t4-9q4-4 9.5-4t9.5 4l93 92q9 9 9 21t-9 21l-93 93q-4 4-9 3.5t-9-4.5q-4-4-4-9.5t4-9.5l80-80H179Zm-59-260v-2q0-15 9-26.5t24-18.5q23-11 48.5-16t52.5-5q27 0 52.5 5t48.5 16q15 7 24 18.5t9 26.5v2H120Zm452 0v-2q0-15 9-26.5t24-18.5q23-11 48.5-16t52.5-5q27 0 52.5 5t48.5 16q15 7 24 18.5t9 26.5v2H572ZM254-686q-23 0-38.5-15.5T200-740q0-23 15.5-38.5T254-794q23 0 38.5 15.5T308-740q0 23-15.5 38.5T254-686Zm452 0q-23 0-38.5-15.5T652-740q0-23 15.5-38.5T706-794q23 0 38.5 15.5T760-740q0 23-15.5 38.5T706-686Z"/>
    </Icon>
  );
});

IconMaterialSocialDistanceW100.displayName = 'OnesyIconMaterialSocialDistanceW100';

export default IconMaterialSocialDistanceW100;
