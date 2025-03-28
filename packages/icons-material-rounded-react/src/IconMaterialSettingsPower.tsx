import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsPower = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPower'

      short_name='SettingsPower'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-520v-320q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v320q0 17-11.5 28.5T480-480q-17 0-28.5-11.5T440-520Zm40 320q-134 0-227-93t-93-227q0-68 27.5-129T264-755q14-12 32-11.5t31 13.5q11 11 9.5 27T322-699q-38 34-60 80t-22 99q0 100 70 170t170 70q100 0 170-70t70-170q0-53-22-99t-60-80q-13-11-14.5-27t9.5-27q13-13 31-13.5t32 11.5q49 45 76.5 106T800-520q0 134-93 227t-227 93ZM320 0q-17 0-28.5-11.5T280-40q0-17 11.5-28.5T320-80q17 0 28.5 11.5T360-40q0 17-11.5 28.5T320 0Zm160 0q-17 0-28.5-11.5T440-40q0-17 11.5-28.5T480-80q17 0 28.5 11.5T520-40q0 17-11.5 28.5T480 0Zm160 0q-17 0-28.5-11.5T600-40q0-17 11.5-28.5T640-80q17 0 28.5 11.5T680-40q0 17-11.5 28.5T640 0Z"/>
    </Icon>
  );
});

IconMaterialSettingsPower.displayName = 'OnesyIconMaterialSettingsPower';

export default IconMaterialSettingsPower;
