import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMusicNoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicNoteFilled'

      short_name='MusicNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-382q0-17 11.5-28.5T520-840h160q17 0 28.5 11.5T720-800v80q0 17-11.5 28.5T680-680H560v400q0 66-47 113t-113 47Z"/>
    </Icon>
  );
});

IconMaterialMusicNoteFilled.displayName = 'OnesyIconMaterialMusicNoteFilled';

export default IconMaterialMusicNoteFilled;
