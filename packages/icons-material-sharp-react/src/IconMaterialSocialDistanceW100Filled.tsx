import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSocialDistanceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SocialDistanceW100Filled'

      short_name='SocialDistance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M250-177 127-300l123-123 19 19-90 90h602l-90-90 19-19 123 123-123 123-19-19 90-90H179l90 90-19 19ZM120-546v-2q0-15 9-26.5t24-18.5q23-11 48.5-16t52.5-5q27 0 52.5 5t48.5 16q15 7 24 18.5t9 26.5v2H120Zm452 0v-2q0-15 9-26.5t24-18.5q23-11 48.5-16t52.5-5q27 0 52.5 5t48.5 16q15 7 24 18.5t9 26.5v2H572ZM254-686q-23 0-38.5-15.5T200-740q0-23 15.5-38.5T254-794q23 0 38.5 15.5T308-740q0 23-15.5 38.5T254-686Zm452 0q-23 0-38.5-15.5T652-740q0-23 15.5-38.5T706-794q23 0 38.5 15.5T760-740q0 23-15.5 38.5T706-686Z"/>
    </Icon>
  );
});

IconMaterialSocialDistanceW100Filled.displayName = 'OnesyIconMaterialSocialDistanceW100Filled';

export default IconMaterialSocialDistanceW100Filled;
