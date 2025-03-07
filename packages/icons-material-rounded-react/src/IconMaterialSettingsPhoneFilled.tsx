import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsPhoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPhoneFilled'

      short_name='SettingsPhone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-520q-17 0-28.5-11.5T440-560q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560q0 17-11.5 28.5T480-520Zm160 0q-17 0-28.5-11.5T600-560q0-17 11.5-28.5T640-600q17 0 28.5 11.5T680-560q0 17-11.5 28.5T640-520Zm160 0q-17 0-28.5-11.5T760-560q0-17 11.5-28.5T800-600q17 0 28.5 11.5T840-560q0 17-11.5 28.5T800-520Zm-2 400q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM242-600l66-66-18-94h-88q5 41 14 81t26 79Zm358 356.2q39 16.8 79.17 27.67Q719.34-205.26 760-202v-88l-94-20-66 66.2ZM242-600q-17-39-26-79t-14-81h88l18 94-66 66Zm358 356 66-66 94 20v88q-41-3-81-14t-79-28Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhoneFilled.displayName = 'OnesyIconMaterialSettingsPhoneFilled';

export default IconMaterialSettingsPhoneFilled;
