import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApkDocumentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApkDocumentW100'

      short_name='ApkDocument'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M330-240h300q-2.93-36.66-21.96-67.33Q589-338 557-356l28.5-51q1.5-3 0-6.5t-4.83-5.5q-2.67-2-5.67-1t-4.51 3.97L541-364q-14-6-29.37-9-15.36-3-31.5-3-16.13 0-31.13 3.18-15 3.17-30 8.82l-29-52q-2-3-5.5-4t-6.5 1q-1 0-3 12l29 51q-31.71 17.96-51.35 48.65Q333.02-276.67 330-240Zm83-45q-6 0-10.5-4.5T398-300q0-6 4.5-10.5T413-315q6 0 10 4.5t4 10.5q0 6-4.2 10.5T413-285Zm135 0q-6 0-10.5-4.5T533-300q0-6 4.5-10.5T548-315q6 0 10.5 4.5T563-300q0 6-4.5 10.5T548-285ZM212-132v-696h374l162 162v534H212Zm360-520v-148H240v640h480v-492H572ZM240-800v148-148 640-640Z"/>
    </Icon>
  );
});

IconMaterialApkDocumentW100.displayName = 'OnesyIconMaterialApkDocumentW100';

export default IconMaterialApkDocumentW100;
