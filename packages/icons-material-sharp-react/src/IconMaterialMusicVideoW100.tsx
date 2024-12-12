import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMusicVideoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicVideoW100'

      short_name='MusicVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M439-303q31.5 0 53.25-21.75T514-378v-222h100v-56H486v220q-9-8-21.13-12.5Q452.74-453 439-453q-31.5 0-53.25 21.75T364-378q0 31.5 21.75 53.25T439-303Zm-307 91v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMusicVideoW100.displayName = 'OnesyIconMaterialMusicVideoW100';

export default IconMaterialMusicVideoW100;
