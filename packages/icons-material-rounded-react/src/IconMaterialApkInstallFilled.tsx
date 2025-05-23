import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApkInstallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApkInstallFilled'

      short_name='ApkInstall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v97q0 17-11.5 28.5T680-470h-40q-17 0-28.5 11.5T600-430v310q0 17-11.5 28.5T560-80H160Zm280-520h200L440-800v200ZM200-200h400q-4-49-30-90t-68-65l38-68q2-4 1-9t-6-7q-4-2-8.5-1t-6.5 5l-39 70q-20-8-40-12.5t-41-4.5q-21 0-41 4.5T319-365l-39-70q-2-5-6.5-5t-9.5 2l-4 15 38 68q-42 24-68 65t-30 90Zm110-60q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm180 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm270 26v-126q0-17 11.5-28.5T800-400q17 0 28.5 11.5T840-360v126l36-35q12-11 28-11t28 12q11 12 11.5 28T932-212L828-108q-12 12-28 12t-28-12L668-212q-11-11-11.5-27.5T668-268q11-12 28-12t29 11l35 35Z"/>
    </Icon>
  );
});

IconMaterialApkInstallFilled.displayName = 'OnesyIconMaterialApkInstallFilled';

export default IconMaterialApkInstallFilled;
