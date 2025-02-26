import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonePausedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonePausedFilled'

      short_name='PhonePaused'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM640-560q-17 0-28.5-11.5T600-600v-200q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800v200q0 17-11.5 28.5T640-560Zm160 0q-17 0-28.5-11.5T760-600v-200q0-17 11.5-28.5T800-840q17 0 28.5 11.5T840-800v200q0 17-11.5 28.5T800-560Z"/>
    </Icon>
  );
});

IconMaterialPhonePausedFilled.displayName = 'OnesyIconMaterialPhonePausedFilled';

export default IconMaterialPhonePausedFilled;
