import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowSelectorToolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowSelectorToolW100Filled'

      short_name='ArrowSelectorTool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M566-190q-13 6-26 1t-19-18L405-456l-73 101q-13 18-33.5 11.5T278-372v-368q0-19 17-27t32 3l295 232q17 14 9.5 34T603-478H469l114 243q6 13 1 26t-18 19Z"/>
    </Icon>
  );
});

IconMaterialArrowSelectorToolW100Filled.displayName = 'OnesyIconMaterialArrowSelectorToolW100Filled';

export default IconMaterialArrowSelectorToolW100Filled;
