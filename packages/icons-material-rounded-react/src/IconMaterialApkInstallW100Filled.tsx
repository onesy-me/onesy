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
      <path d="M192-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12.44 0 23.72 5T524-810l126 126q8 8 13 19.28 5 11.28 5 23.72v156q0 12.75-8.62 21.37Q650.75-455 638-455h-58q-12.75 0-21.37 8.62Q550-437.75 550-425v263q0 12.75-8.62 21.37Q532.75-132 520-132H192Zm300-520h148L492-800v148ZM250-240h300q-2.93-36.66-21.96-67.33Q509-338 477-356l28.5-51q1.5-3 0-6.5t-4.83-5.5q-2.67-2-5.67-1t-4.51 3.97L461-364q-14-6-29.37-9-15.36-3-31.5-3-16.13 0-31.13 3.18-15 3.17-30 8.82l-29-52q-2-3-5.5-4t-6.5 1q-1 0-3 12l29 51q-31.71 17.96-51.35 48.65Q253.02-276.67 250-240Zm83-45q-6 0-10.5-4.5T318-300q0-6 4.5-10.5T333-315q6 0 10 4.5t4 10.5q0 6-4.2 10.5T333-285Zm135 0q-6 0-10.5-4.5T453-300q0-6 4.5-10.5T468-315q6 0 10.5 4.5T483-300q0 6-4.5 10.5T468-285Zm242 99v-189q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v189l81-80q4-4 9.5-3.5t9.5 4.36q3.67 3.85 3.83 9Q842-251 838-247l-93 94q-9 9-21 9t-21-9l-93-94q-3.67-3.75-3.83-9.38Q606-262 610-266q4-5 10-4.5t10 4.5l80 80Z"/>
    </Icon>
  );
});

IconMaterialApkInstallW100Filled.displayName = 'OnesyIconMaterialApkInstallW100Filled';

export default IconMaterialApkInstallW100Filled;
