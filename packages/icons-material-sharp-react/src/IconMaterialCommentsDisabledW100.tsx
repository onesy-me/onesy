import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommentsDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledW100'

      short_name='CommentsDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-292v-476q0-5 .5-9t1.5-9l-44-44 20-20L872-88l-20 20-224-224H132Zm696 48-76-76h48v-480H272l-28-28h584v584Zm-668-76h440L494-426H266v-28h200l-92-92H266v-28h80L160-760v440Zm486-106-28-28h76v28h-48ZM526-546l-28-28h196v28H526ZM406-666l-28-28h316v28H406Zm-26 126Zm156 4Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabledW100.displayName = 'OnesyIconMaterialCommentsDisabledW100';

export default IconMaterialCommentsDisabledW100;
