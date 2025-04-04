import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApkInstallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApkInstallW100Filled'

      short_name='ApkInstall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M724-132 601-256l19-20 90 90v-203h28v203l90-89 19 19-123 124Zm-592 0v-696h374l162 162v211H550v323H132Zm360-520h148L492-800v148ZM250-240h300q-2.93-36.66-21.96-67.33Q509-338 477-356l28.5-51q1.5-3 0-6.5t-4.83-5.5q-2.67-2-5.67-1t-4.51 3.97L461-364q-14-6-29.37-9-15.36-3-31.5-3-16.13 0-31.13 3.18-15 3.17-30 8.82l-29-52q-2-3-5.5-4t-6.5 1q-1 0-3 12l29 51q-31.71 17.96-51.35 48.65Q253.02-276.67 250-240Zm83-45q-6 0-10.5-4.5T318-300q0-6 4.5-10.5T333-315q6 0 10 4.5t4 10.5q0 6-4.2 10.5T333-285Zm135 0q-6 0-10.5-4.5T453-300q0-6 4.5-10.5T468-315q6 0 10.5 4.5T483-300q0 6-4.5 10.5T468-285Z"/>
    </Icon>
  );
});

IconMaterialApkInstallW100Filled.displayName = 'OnesyIconMaterialApkInstallW100Filled';

export default IconMaterialApkInstallW100Filled;
