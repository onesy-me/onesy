import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbsUpDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownFilled'

      short_name='ThumbsUpDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-400q-33 0-56.5-23.5T0-480v-240q0-12 5-23t13-19l126-126q9-9 20-13.5t22-4.5q26 0 45 20t14 51l-13 75h208q17 0 28.5 11.5T480-720v50q0 6-1 11.5t-3 10.5l-90 212q-7 17-22.5 26.5T330-400H80Zm440 200q-17 0-28.5-11.5T480-240v-50q0-6 1-11.5t3-10.5l90-212q8-17 23-26.5t33-9.5h250q33 0 56.5 23.5T960-480v240q0 12-4.5 22.5T942-198L816-72q-9 9-20 13.5T774-54q-26 0-45-20t-14-51l13-75H520Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDownFilled.displayName = 'OnesyIconMaterialThumbsUpDownFilled';

export default IconMaterialThumbsUpDownFilled;
