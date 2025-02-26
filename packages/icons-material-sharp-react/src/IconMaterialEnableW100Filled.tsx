import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEnableW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnableW100Filled'

      short_name='Enable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-117 71-209.5T386-815v30q-101 31-163.5 115T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-106-62.5-190T574-785v-30q112 33 183 125.5T828-480q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132Zm0-225L316-521l20-20 130 130v-416h28v416l130-130 20 20-164 164Z"/>
    </Icon>
  );
});

IconMaterialEnableW100Filled.displayName = 'OnesyIconMaterialEnableW100Filled';

export default IconMaterialEnableW100Filled;
