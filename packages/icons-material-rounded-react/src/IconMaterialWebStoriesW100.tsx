import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebStoriesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebStoriesW100'

      short_name='WebStories'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M686-181v-599q21 5 34.5 21.5T734-720v479q0 22-13.5 38.5T686-181Zm-436 61q-25 0-42.5-17.5T190-180v-600q0-25 17.5-42.5T250-840h348q25 0 42.5 17.5T658-780v600q0 25-17.5 42.5T598-120H250Zm512-121v-479q13 5 20.5 15.5T790-680v399q0 14-7.5 24.5T762-241Zm-512 93h348q12 0 22-10t10-22v-600q0-12-10-22t-22-10H250q-12 0-22 10t-10 22v600q0 12 10 22t22 10Zm-32-664v664-664Z"/>
    </Icon>
  );
});

IconMaterialWebStoriesW100.displayName = 'OnesyIconMaterialWebStoriesW100';

export default IconMaterialWebStoriesW100;
