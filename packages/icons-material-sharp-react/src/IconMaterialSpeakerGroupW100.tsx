import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeakerGroupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerGroupW100'

      short_name='SpeakerGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M348-228h412v-612H348v612Zm-28 28v-668h468v668H320Zm234.12-470q20.88 0 35.38-14.62 14.5-14.62 14.5-35.5 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5-20.88 0-35.38 14.62-14.5 14.62-14.5 35.5 0 20.88 14.62 35.38 14.62 14.5 35.5 14.5ZM554-316q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33Zm0-28q-35 0-60.5-25.5T468-430q0-35 25.5-60.5T554-516q35 0 60.5 25.5T640-430q0 35-25.5 60.5T554-344Zm34 252H212v-616h28v588h348v28ZM348-840v612-612Z"/>
    </Icon>
  );
});

IconMaterialSpeakerGroupW100.displayName = 'OnesyIconMaterialSpeakerGroupW100';

export default IconMaterialSpeakerGroupW100;
