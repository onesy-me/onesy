import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowSelectorToolW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowSelectorToolW100'

      short_name='ArrowSelectorTool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m306-366 100-140h203L306-744v378Zm260 176q-13 6-26 1t-19-18L405-456l-73 101q-13 18-33.5 11.5T278-372v-368q0-19 17-27t32 3l295 232q17 14 9.5 34T603-478H469l114 243q6 13 1 26t-18 19ZM406-506Z"/>
    </Icon>
  );
});

IconMaterialArrowSelectorToolW100.displayName = 'OnesyIconMaterialArrowSelectorToolW100';

export default IconMaterialArrowSelectorToolW100;
