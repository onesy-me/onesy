import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubtitlesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesW100Filled'

      short_name='Subtitles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm138-138h312v-28H270v28Zm392 0h28v-28h-28v28ZM270-488h28v-28h-28v28Zm108 0h312v-28H378v28Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesW100Filled.displayName = 'OnesyIconMaterialSubtitlesW100Filled';

export default IconMaterialSubtitlesW100Filled;
