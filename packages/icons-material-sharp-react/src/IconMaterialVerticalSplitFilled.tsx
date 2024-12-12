import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalSplitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplitFilled'

      short_name='VerticalSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-360v-80h320v80H120Zm0 160v-80h320v80H120Zm0-320v-80h320v80H120Zm0-160v-80h320v80H120Zm400 480v-560h320v560H520Z"/>
    </Icon>
  );
});

IconMaterialVerticalSplitFilled.displayName = 'OnesyIconMaterialVerticalSplitFilled';

export default IconMaterialVerticalSplitFilled;
