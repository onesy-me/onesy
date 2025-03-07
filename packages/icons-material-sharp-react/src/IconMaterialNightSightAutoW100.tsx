import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightSightAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightAutoW100'

      short_name='NightSightAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-174q71 0 131-36.5t99-96.5q-131 3-227.5-81T346-600q0-24 4-48t11-47q-83 28-135 97.5T174-440q0 110.83 77.58 188.42Q329.17-174 440-174Zm0 28q-122 0-208-86t-86-208q0-114 75-197.5T409-732q-20 29-27.5 63t-7.5 69q0 110.83 77.58 188.42Q529.17-334 640-334q20.32 0 39.66-3 19.34-3 38.34-9-30 91-106.5 145.5T440-146Zm149-387 110-334h42l110 334h-29l-27-80H645l-26 80h-30Zm65-108h132l-66-201-66 201ZM437-388Z"/>
    </Icon>
  );
});

IconMaterialNightSightAutoW100.displayName = 'OnesyIconMaterialNightSightAutoW100';

export default IconMaterialNightSightAutoW100;
