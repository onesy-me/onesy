import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArticleShortcutFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleShortcutFilled'

      short_name='ArticleShortcut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M265-80q-79 0-134.5-55.5T75-270q0-57 29.5-102t77.5-68H80v-80h240v240h-80v-97q-37 8-61 38t-24 69q0 46 32.5 78t77.5 32v80Zm15-520h400v-80H280v80Zm120 480v-160h160v-80H400v-80h280v-80H400v-80H120v-240h720v720H400Z"/>
    </Icon>
  );
});

IconMaterialArticleShortcutFilled.displayName = 'OnesyIconMaterialArticleShortcutFilled';

export default IconMaterialArticleShortcutFilled;
