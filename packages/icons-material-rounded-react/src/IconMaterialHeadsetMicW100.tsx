import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadsetMicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetMicW100'

      short_name='HeadsetMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-212q-26 0-43-17t-17-43v-248q0-64 24-120t66-98q42-42 98-66t120-24q64 0 120 24t98 66q42 42 66 98t24 120v336q0 26-17 43t-43 17H494q-6 0-10-4t-4-10q0-6 4-10t10-4h234q14 0 23-9t9-23v-28h-52q-25 0-42.5-17.5T648-272v-104q0-25 17.5-42.5T708-436h52v-84q0-116-82-198t-198-82q-116 0-198 82t-82 198v84h52q25 0 42.5 17.5T312-376v104q0 25-17.5 42.5T252-212h-20Zm0-28h20q14 0 23-9t9-23v-104q0-14-9-23t-23-9h-52v136q0 14 9 23t23 9Zm476 0h52v-168h-52q-14 0-23 9t-9 23v104q0 14 9 23t23 9ZM232-408h-32 84-52Zm476 0h-32 84-52Z"/>
    </Icon>
  );
});

IconMaterialHeadsetMicW100.displayName = 'OnesyIconMaterialHeadsetMicW100';

export default IconMaterialHeadsetMicW100;
