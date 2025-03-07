import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMusicNoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicNoteW100'

      short_name='MusicNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M403-182q-44.55 0-76.27-31.73Q295-245.45 295-290t31.73-76.27Q358.45-398 403-398q23 0 44 9t36 27v-386q0-12.75 8.74-21.38 8.75-8.62 21.67-8.62h121.66q12.93 0 21.43 8.62 8.5 8.63 8.5 21.38v24q0 12.75-8.62 21.37Q647.75-694 635-694H511v404q0 44.55-31.73 76.27Q447.55-182 403-182Z"/>
    </Icon>
  );
});

IconMaterialMusicNoteW100.displayName = 'OnesyIconMaterialMusicNoteW100';

export default IconMaterialMusicNoteW100;
