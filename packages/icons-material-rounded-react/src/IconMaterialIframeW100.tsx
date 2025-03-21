import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIframeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeW100'

      short_name='Iframe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M444-404h232v-112H444v112Zm2 28q-13 0-21.5-8.5T416-406v-108q0-13 8.5-21.5T446-544h228q13 0 21.5 8.5T704-514v108q0 13-8.5 21.5T674-376H446ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-368H160v368q0 12 10 22t22 10Z"/>
    </Icon>
  );
});

IconMaterialIframeW100.displayName = 'OnesyIconMaterialIframeW100';

export default IconMaterialIframeW100;
