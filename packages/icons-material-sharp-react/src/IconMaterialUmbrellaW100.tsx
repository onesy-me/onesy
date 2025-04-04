import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUmbrellaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UmbrellaW100'

      short_name='Umbrella'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-106q-5 0-8-2t-5-7L279-681l107 26 80-61v-108q0-29 21.5-49.5T540-894q31 0 52.5 20.5T614-824v24h-28v-24q0-20-13.5-32.5T540-869q-19 0-32.5 13.5T494-824v108l80 61 107-26-188 565q-2 5-5 7.5t-8 2.5Zm14-99 143-438-69 18-74-55v475Zm-28 0v-475l-74 56-71-20 145 439Z"/>
    </Icon>
  );
});

IconMaterialUmbrellaW100.displayName = 'OnesyIconMaterialUmbrellaW100';

export default IconMaterialUmbrellaW100;
