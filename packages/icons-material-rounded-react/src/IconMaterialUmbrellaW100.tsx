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
      <path d="m494-205 143-438-69 18-74-55v475Zm-28 0v-475l-74 56-71-20 145 439Zm14 99q-5 0-8-2t-5-7L296-630q-5-17 7-30t29-8l54 13 80-61v-108q0-29 21.5-49.5T540-894q31 0 52.5 20.5T614-824q0 6-4 10t-10 4q-6 0-10-4t-4-10q0-20-13.5-32.5T540-869q-19 0-32.5 13.5T494-824v108l80 61 54-13q17-5 29 8t7 30L493-116q-2 5-5 7.5t-8 2.5Z"/>
    </Icon>
  );
});

IconMaterialUmbrellaW100.displayName = 'OnesyIconMaterialUmbrellaW100';

export default IconMaterialUmbrellaW100;
