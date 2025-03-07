import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCollapseAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollapseAllFilled'

      short_name='CollapseAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-80-56-56 240-240 240 240-56 56-184-184L296-80Zm184-504L240-824l56-56 184 184 184-184 56 56-240 240Z"/>
    </Icon>
  );
});

IconMaterialCollapseAllFilled.displayName = 'OnesyIconMaterialCollapseAllFilled';

export default IconMaterialCollapseAllFilled;
