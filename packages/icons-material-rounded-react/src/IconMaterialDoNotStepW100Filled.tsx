import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoNotStepW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotStepW100Filled'

      short_name='DoNotStep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m712-362-20-20 139-139q8 8 8 20t-8 20L712-362Zm-63-62L439-634l97-97q17-17 42-17t42 17l168 168-139 139ZM842-78 573-347 449-223H191q-25 0-42.5-17.5T131-283v-16q0-15 8-26t22-17q28-13 55-28t53-35l30 30q5 5 13.5 4.5T326-376q5-5 5.5-13.5T327-403l-28-29 9.5-9.5Q313-446 319-451l28 28q6 6 13.5 5t13.5-7q6-6 5.5-14.5T374-453l-35-36q5-5 8.5-11t6.5-13l39 39q5 5 13 5.5t14-4.5q5-5 6-12.5t-7-15.5L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialDoNotStepW100Filled.displayName = 'OnesyIconMaterialDoNotStepW100Filled';

export default IconMaterialDoNotStepW100Filled;
