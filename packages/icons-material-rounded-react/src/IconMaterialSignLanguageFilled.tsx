import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignLanguageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignLanguageFilled'

      short_name='SignLanguage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40q-17 0-28.5-11.5T160-80q0-17 11.5-28.5T200-120h160v-40H120q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240h240v-40H80q-17 0-28.5-11.5T40-320q0-17 11.5-28.5T80-360h280v-40H160q-17 0-28.5-11.5T120-440q0-17 11.5-28.5T160-480h244l-34-60q-12-21-9.5-44.5T380-625l4-3q11-11 25.5-12t26.5 8l236 176q23 17 35.5 42t12.5 54v200q0 50-35 85t-85 35H200Zm593-374q-10 0-18-5.5T763-436q-9-20-23-37t-32-31L524-641 303-807q-14-10-16-26t8-30q10-14 26-16.5t30 7.5l224 169 24-33-160-120q-14-10-16.5-26t7.5-30q10-14 26-16t30 8l196 146 9-69q3-24 19-41t39-21l6-1q15-2 27 6t17 22l84 283q8 27 3 55t-22 51l-48 64q-5 6-10.5 8.5T793-414ZM248-599q10-14 25.5-16t29.5 8q14 10 16.5 25.5T312-552q-10 14-26 16.5t-30-7.5q-14-10-16-26t8-30Zm15-88q-14-10-16-26t8-30q10-14 26-16t30 8l32 25q15 12 15.5 27t-8.5 27q-9 12-24 16t-30-7l-33-24Z"/>
    </Icon>
  );
});

IconMaterialSignLanguageFilled.displayName = 'OnesyIconMaterialSignLanguageFilled';

export default IconMaterialSignLanguageFilled;
