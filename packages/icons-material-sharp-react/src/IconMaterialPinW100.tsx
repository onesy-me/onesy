import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinW100'

      short_name='Pin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm136-154h28v-228h-24l-64 46 16 22 44-30v190Zm122 0h144v-28H432v-4q17-15 32-30.5t32-33.5q16-17 23-33.5t7-36.5q0-27-19-44.5T458-594q-21 0-40 12t-28 32l28 12q6-13 17-20.5t23-7.5q18 0 29 9.5t11 26.5q0 13-5 22.5T474-482q-23 26-41.5 43.5T390-398v32Zm290 0q31 0 50.5-18.5T750-432q0-23-11.5-36.5T706-486v-2q18-3 27-14.5t9-31.5q0-27-17.5-43.5T678-594q-29 0-43.5 14.5T612-554l26 12q5-11 16-17.5t24-6.5q16 0 26 9t10 23q0 16-12 26t-30 10h-12v28h14q23 0 35.5 9.5T722-434q0 16-12.5 28T680-394q-17 0-28.5-7.5T632-426l-26 10q9 23 28.5 36.5T680-366ZM160-240h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialPinW100.displayName = 'OnesyIconMaterialPinW100';

export default IconMaterialPinW100;
