import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3kFilled'

      short_name='3k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-360h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm-260 0h180v-240H260v60h120v40h-80v40h80v40H260v60ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterial3kFilled.displayName = 'OnesyIconMaterial3kFilled';

export default IconMaterial3kFilled;
