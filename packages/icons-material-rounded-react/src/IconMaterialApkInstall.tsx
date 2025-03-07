import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApkInstall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApkInstall'

      short_name='ApkInstall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v87q0 17-11.5 28.5T680-480q-17 0-28.5-11.5T640-520v-80H440v-200H160v640h400q17 0 28.5 11.5T600-120q0 17-11.5 28.5T560-80H160Zm0-80v-640 640Zm40-40q4-49 30-90t68-65l-38-68q0-1 4-15 5-2 9.5-2t6.5 5l39 70q20-8 40-12.5t41-4.5q21 0 41 4.5t40 12.5l39-70 15-4q5 2 6 7t-1 9l-38 68q42 24 68 65t30 90H200Zm110-60q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm180 0q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm270 26v-126q0-17 11.5-28.5T800-400q17 0 28.5 11.5T840-360v126l36-35q12-11 28-11t28 12q11 12 11.5 28T932-212L828-108q-12 12-28 12t-28-12L668-212q-11-11-11.5-27.5T668-268q11-12 28-12t29 11l35 35Z"/>
    </Icon>
  );
});

IconMaterialApkInstall.displayName = 'OnesyIconMaterialApkInstall';

export default IconMaterialApkInstall;
