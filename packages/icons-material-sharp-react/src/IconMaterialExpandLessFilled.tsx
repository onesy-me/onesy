import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandLessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandLessFilled'

      short_name='ExpandLess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"/>
    </Icon>
  );
});

IconMaterialExpandLessFilled.displayName = 'OnesyIconMaterialExpandLessFilled';

export default IconMaterialExpandLessFilled;
