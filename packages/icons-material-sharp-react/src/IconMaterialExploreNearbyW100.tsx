import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExploreNearbyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreNearbyW100'

      short_name='ExploreNearby'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM480-330q31-31 54.69-63.36Q555-421 572-455q17-34 17-66.42Q589-566 556.97-598q-32.02-32-77-32Q435-630 403-597.98T371-521q0 32 17.19 65.84T426-393q23 32 54 63Zm.06-150Q463-480 451-491.94t-12-29Q439-538 450.94-550t29-12Q497-562 509-550.06t12 29Q521-504 509.06-492t-29 12Z"/>
    </Icon>
  );
});

IconMaterialExploreNearbyW100.displayName = 'OnesyIconMaterialExploreNearbyW100';

export default IconMaterialExploreNearbyW100;
