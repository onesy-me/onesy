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
      <path d="m712-362-20-20 139-139 20 20-139 139Zm-63-62L439-634l139-139 210 210-139 139ZM852-68 573-347 449-223H131v-105q37-17 72-34.5t67-42.5l42 42 31-31-41-41 9.5-9.5Q316-449 322-454l41 41 26-26-44-44q5-5 9-11t7-13l48 48 26-26L90-830l20-20L872-88l-20 20Z"/>
    </Icon>
  );
});

IconMaterialDoNotStepW100Filled.displayName = 'OnesyIconMaterialDoNotStepW100Filled';

export default IconMaterialDoNotStepW100Filled;
