import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1kPlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kPlusFilled'

      short_name='1kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-400h40v-60h60v-40h-60v-60h-40v60h-60v40h60v60Zm-240 40h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm-120 0h60v-240H240v60h60v180ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterial1kPlusFilled.displayName = 'OnesyIconMaterial1kPlusFilled';

export default IconMaterial1kPlusFilled;
