import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArticleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleW100Filled'

      short_name='Article'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-306h228v-28H306v28Zm0-160h348v-28H306v28Zm0-160h348v-28H306v28ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialArticleW100Filled.displayName = 'OnesyIconMaterialArticleW100Filled';

export default IconMaterialArticleW100Filled;
