import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3kPlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3kPlusFilled'

      short_name='3kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-400h40v-60h60v-40h-60v-60h-40v60h-60v40h60v60Zm-220 40h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm-220 0h180v-240H220v60h120v40h-80v40h80v40H220v60ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterial3kPlusFilled.displayName = 'OnesyIconMaterial3kPlusFilled';

export default IconMaterial3kPlusFilled;
