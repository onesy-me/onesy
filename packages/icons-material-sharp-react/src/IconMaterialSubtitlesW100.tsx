import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubtitlesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesW100'

      short_name='Subtitles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Zm110-110h312v-28H270v28Zm392 0h28v-28h-28v28ZM270-488h28v-28h-28v28Zm108 0h312v-28H378v28Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesW100.displayName = 'OnesyIconMaterialSubtitlesW100';

export default IconMaterialSubtitlesW100;
