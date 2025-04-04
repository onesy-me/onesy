import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenLockRotation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockRotation'

      short_name='ScreenLockRotation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M634-600q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T720-920q33 0 56.5 23.5T800-840v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H634Zm46-200h80v-40q0-17-11.5-28.5T720-880q-17 0-28.5 11.5T680-840v40ZM441-129l-77-77q-11-11-11-28t11-28q11-11 28-11t28 11L590-92q12 12 7 28t-22 19q-14 2-27.5 2.5T520-42q-99 0-186.5-38T181-183q-65-65-103-152.5T40-522q0-17 11.5-28.5T80-562q17 0 28.5 11.5T120-522q0 72 24.5 137T212-268q43 52 102 88.5T441-129Zm149-73q-14 0-28.5-5.5T536-224L222-538q-11-11-16.5-25.5T200-592q0-15 5.5-29t16.5-25l174-174q11-11 25.5-17t28.5-6q15 0 29 6t25 17l17 17q11 11 11.5 27T522-748q-11 12-28 12.5T465-747l-15-15-170 170 310 310 170-170-14-14q-11-11-11-28t11-28q11-11 28-11t28 11l16 16q11 11 17 25t6 29q0 14-6 28.5T818-398L644-224q-11 11-25 16.5t-29 5.5Zm-70-320Z"/>
    </Icon>
  );
});

IconMaterialScreenLockRotation.displayName = 'OnesyIconMaterialScreenLockRotation';

export default IconMaterialScreenLockRotation;
