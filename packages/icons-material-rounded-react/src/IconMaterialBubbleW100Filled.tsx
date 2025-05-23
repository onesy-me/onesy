import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBubbleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubbleW100Filled'

      short_name='Bubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-29 0-59-6t-58-17q-5-2-7.5-7.5T355-213q2-5 7.5-7.5t10.5-.5q25 10 53.5 15.5T480-200q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 28 5 53.5t16 51.5q2 5-.5 11t-7.5 8q-5 2-10.5-.5T195-364q-11-27-17-57.5t-6-58.5q0-64 24-120t66-98q42-42 98-66t120-24q64 0 120 24t98 66q42 42 66 98t24 120q0 64-24 120t-66 98q-42 42-98 66t-120 24Zm-294-14q-5-5-5-10t5-10l340-340H360q-6 0-10-4t-4-10q0-6 4-10t10-4h184q13 0 21.5 8.5T574-544v184q0 6-4 10t-10 4q-6 0-10-4t-4-10v-166L206-186q-4 4-9.5 4.5T186-186Z"/>
    </Icon>
  );
});

IconMaterialBubbleW100Filled.displayName = 'OnesyIconMaterialBubbleW100Filled';

export default IconMaterialBubbleW100Filled;
