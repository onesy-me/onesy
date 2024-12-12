import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommentsDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledW100Filled'

      short_name='CommentsDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 628-292H132v-476q0-5 .5-9t1.5-9l-44-44 20-20L872-88l-20 20Zm-24-176L646-426h48v-28h-76l-92-92h168v-28H498l-92-92h288v-28H378L244-828h584v584ZM266-426h228l-28-28H266v28Zm0-120h108l-28-28h-80v28Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabledW100Filled.displayName = 'OnesyIconMaterialCommentsDisabledW100Filled';

export default IconMaterialCommentsDisabledW100Filled;
