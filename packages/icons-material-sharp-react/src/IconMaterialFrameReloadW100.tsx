import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrameReloadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameReloadW100'

      short_name='FrameReload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-296q-61 0-109-36.5T305-424h30q17 45 55.61 72.5T480-324q64.63 0 110.31-45.69Q636-415.37 636-480t-45.69-110.31Q544.63-636 480-636q-39 0-75 20t-62 52h81v28H296v-128h28v79q29-35 70-57t86-22q76.36 0 130.18 53.82Q664-556.36 664-480q0 76.36-53.82 130.18Q556.36-296 480-296ZM172-172v-188h28v160h160v28H172Zm428 0v-28h160v-160h28v188H600ZM172-600v-188h188v28H200v160h-28Zm588 0v-160H600v-28h188v188h-28Z"/>
    </Icon>
  );
});

IconMaterialFrameReloadW100.displayName = 'OnesyIconMaterialFrameReloadW100';

export default IconMaterialFrameReloadW100;
