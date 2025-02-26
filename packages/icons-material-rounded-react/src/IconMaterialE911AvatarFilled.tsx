import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialE911AvatarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='E911AvatarFilled'

      short_name='E911Avatar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-680q-17 0-28.5-11.5T640-720v-120q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v120q0 17-11.5 28.5T680-680Zm0 160q-17 0-28.5-11.5T640-560q0-17 11.5-28.5T680-600q17 0 28.5 11.5T720-560q0 17-11.5 28.5T680-520Zm118 400q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"/>
    </Icon>
  );
});

IconMaterialE911AvatarFilled.displayName = 'OnesyIconMaterialE911AvatarFilled';

export default IconMaterialE911AvatarFilled;
