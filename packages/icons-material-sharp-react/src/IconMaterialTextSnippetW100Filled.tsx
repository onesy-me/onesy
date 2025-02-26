import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSnippetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippetW100Filled'

      short_name='TextSnippet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h417l199 199v417H172Zm134-160h348v-28H306v28Zm0-134h348v-28H306v28Zm0-134h214v-28H306v28Z"/>
    </Icon>
  );
});

IconMaterialTextSnippetW100Filled.displayName = 'OnesyIconMaterialTextSnippetW100Filled';

export default IconMaterialTextSnippetW100Filled;
