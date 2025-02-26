import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrameInspectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameInspectW100Filled'

      short_name='FrameInspect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-404q48 0 82-34t34-82q0-48-34-82t-82-34q-48 0-82 34t-34 82q0 48 34 82t82 34Zm204 108L532-409q-20 16-43 24.5t-49 8.5q-60.14 0-102.07-41.9Q296-459.8 296-519.9T337.9-622q41.9-42 102-42T542-622.07q42 41.93 42 102.07 0 26-8.5 49T551-428l113 112-20 20ZM172-172v-188h28v160h160v28H172Zm428 0v-28h160v-160h28v188H600ZM172-600v-188h188v28H200v160h-28Zm588 0v-160H600v-28h188v188h-28Z"/>
    </Icon>
  );
});

IconMaterialFrameInspectW100Filled.displayName = 'OnesyIconMaterialFrameInspectW100Filled';

export default IconMaterialFrameInspectW100Filled;
