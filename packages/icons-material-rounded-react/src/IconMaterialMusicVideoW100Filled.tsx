import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMusicVideoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicVideoW100Filled'

      short_name='MusicVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M439-303q31 0 53-22t22-53v-222h72q11 0 19.5-8t8.5-20q0-11-8.5-19.5T586-656h-72q-11 0-19.5 8.5T486-628v192q-9-8-21-12.5t-26-4.5q-31 0-53 22t-22 53q0 31 22 53t53 22Zm-247 91q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialMusicVideoW100Filled.displayName = 'OnesyIconMaterialMusicVideoW100Filled';

export default IconMaterialMusicVideoW100Filled;
