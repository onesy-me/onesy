import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArticleShortcutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleShortcutW100'

      short_name='ArticleShortcut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480ZM296-132q-68.19 0-116.09-47.61Q132-227.23 132-295q0-53.51 31-95.76Q194-433 242-450H132v-28h164v164h-28v-115q-47.01 9.93-77.51 47.19Q160-344.56 160-296.12q0 57.12 39.5 96.62Q239-160 296-160v28Zm100-40v-28h364v-560H200v182h-28v-210h616v616H396Zm0-134h138v-28H396v28Zm0-160h258v-28H396v28Zm-90-160h348v-28H306v28Z"/>
    </Icon>
  );
});

IconMaterialArticleShortcutW100.displayName = 'OnesyIconMaterialArticleShortcutW100';

export default IconMaterialArticleShortcutW100;
