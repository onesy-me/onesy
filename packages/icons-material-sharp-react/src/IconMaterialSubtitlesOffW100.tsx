import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubtitlesOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOffW100'

      short_name='SubtitlesOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h70l28 28h-70v480h510L560-350H270v-28h262L116-794l20-20 644 644-20 20-62-62H132Zm668-52v-456H344l-28-28h512v512l-28-28ZM576-488l-28-28h142v28H576Zm-306 0v-28h28v28h-28Zm302-4Zm-142 12Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOffW100.displayName = 'OnesyIconMaterialSubtitlesOffW100';

export default IconMaterialSubtitlesOffW100;
