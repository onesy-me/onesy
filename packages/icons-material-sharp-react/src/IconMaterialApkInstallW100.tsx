import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApkInstallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApkInstallW100'

      short_name='ApkInstall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-696h374l162 162v211h-28v-197H492v-148H160v640h390v28H132Zm28-28v-640 640Zm90-80q3.02-36.67 22.65-67.35Q292.29-338.04 324-356l-29-51 2.67-12.25Q301-421 304.5-420t5.5 4l29 52q15.1-5.65 30.2-8.82 15.09-3.18 30.95-3.18 15.85 0 31.35 3 15.5 3 29.5 9l29-52q1-1 10.75-3 3.25 2 4.75 5.5t0 6.5L477-356q32 18 51.04 48.67Q547.07-276.66 550-240H250Zm83-45q6 0 10-4.5t4-10.5q0-6-4.2-10.5T333-315q-6 0-10.5 4.5T318-300q0 6 4.5 10.5T333-285Zm135 0q6 0 10.5-4.5T483-300q0-6-4.5-10.5T468-315q-6 0-10.5 4.5T453-300q0 6 4.5 10.5T468-285Zm256 153L601-256l19-20 90 90v-203h28v203l90-89 19 19-123 124Z"/>
    </Icon>
  );
});

IconMaterialApkInstallW100.displayName = 'OnesyIconMaterialApkInstallW100';

export default IconMaterialApkInstallW100;
