import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicExternalOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOff'

      short_name='MicExternalOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-694 214-860q14-11 31-15.5t35-4.5q50 0 85 34.5t35 85.5q0 18-5.5 34.5T380-694Zm420 420-80-80v-366q0-33-23.5-56.5T640-800q-33 0-56.5 23.5T560-720v206l-80-80v-126q0-68 47-114t113-46q66 0 113 46t47 114v446Zm-8 218L560-288v48q0 66-47 113T400-80q-66 0-113-47t-47-113h-4q-16 0-27-10.5T196-276l-32-320q-2-18 10-31t30-13h2L56-792q-11-11-11.5-27.5T56-848q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM272-320h16l22-218-24-22h-38l24 240Zm128 160q33 0 56.5-23.5T480-240v-128l-98-98-18 190q-2 15-13 25.5T324-240h-4q0 33 23.5 56.5T400-160ZM272-560h-24 62-38Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOff.displayName = 'OnesyIconMaterialMicExternalOff';

export default IconMaterialMicExternalOff;
