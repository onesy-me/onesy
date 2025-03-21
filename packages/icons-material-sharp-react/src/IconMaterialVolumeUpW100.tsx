import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeUpW100'

      short_name='VolumeUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M564-195v-30q81-30 130.5-100T744-481q0-86-49.5-156T564-737v-30q92 33 150 111t58 175q0 97-58 175T564-195ZM188-412v-136h130l126-126v388L318-412H188Zm376 56v-250q30 22 45 55.5t15 70.5q0 37-15.5 69.5T564-356ZM416-606l-86 86H216v80h114l86 86v-252ZM316-480Z"/>
    </Icon>
  );
});

IconMaterialVolumeUpW100.displayName = 'OnesyIconMaterialVolumeUpW100';

export default IconMaterialVolumeUpW100;
