import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGestureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GestureW100'

      short_name='Gesture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M549-172q-44 0-70.5-27T452-271q0-66 58.5-116.5T654-446q-5-56-23.5-81.5T577-553q-36 0-73 26.5T413-434q-52 65-87.5 91T255-317q-38 0-60.5-26.5T172-416q0-42 19-89.5T250-609q28-39 39.5-63t11.5-41q0-14-7.5-20.5T272-740q-15 0-31 9.5T206-701l-34-33q26-27 50.5-40.5T272-788q34 0 55.5 21t21.5 54q0 26-13.5 56T287-577q-35 51-51 89.5T220-416q0 23 10 37t25 14q13 0 26.5-7t30.5-22q13-11 27.5-28t34.5-40q64-77 109-108t93-31q56 0 89 41t37 114h87v48h-87q-6 103-48 164.5T549-172Zm0-48q43 0 72-49t33-129q-63 5-108.5 42.5T500-272q0 23 13 37.5t36 14.5Z"/>
    </Icon>
  );
});

IconMaterialGestureW100.displayName = 'OnesyIconMaterialGestureW100';

export default IconMaterialGestureW100;
