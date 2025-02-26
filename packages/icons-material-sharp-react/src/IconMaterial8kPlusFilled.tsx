import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial8kPlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='8kPlusFilled'

      short_name='8kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360h180v-240H240v240Zm60-40v-60h60v60h-60Zm0-100v-60h60v60h-60Zm140 140h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm220-40h40v-60h60v-40h-60v-60h-40v60h-60v40h60v60ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterial8kPlusFilled.displayName = 'OnesyIconMaterial8kPlusFilled';

export default IconMaterial8kPlusFilled;
