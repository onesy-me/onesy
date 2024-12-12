import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsRunW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRunW100'

      short_name='DirectionsRun'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M546-66v-223L420-410l-44 196-226-46 6-27 192 39 78-400-132 55v127h-28v-146l160-66q23-9 34-12.5t20-3.5q14 0 26 7.5t20 20.5l40 64q25 40 69.5 70t98.5 36v28q-53-5-109-37.5T527-611l-39 199 86 84v262h-28Zm-6-690q-27 0-45.5-18.5T476-820q0-27 18.5-45.5T540-884q27 0 45.5 18.5T604-820q0 27-18.5 45.5T540-756Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRunW100.displayName = 'OnesyIconMaterialDirectionsRunW100';

export default IconMaterialDirectionsRunW100;
