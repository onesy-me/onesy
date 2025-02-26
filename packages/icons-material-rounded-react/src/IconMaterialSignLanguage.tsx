import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignLanguage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignLanguage'

      short_name='SignLanguage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M303-807q-14-10-16-26t8-30q10-14 26-16.5t30 7.5l192 144q14 10 16 26t-8 30q-10 14-26 16t-30-8L303-807Zm337 251ZM439-856q-14-10-16.5-26t7.5-30q10-14 26-16t30 8l196 146 9-69q3-24 19-41t39-21l6-1q15-2 27 6t17 22l84 283q8 27 3 55t-22 51l-41 55q-12 16-28 16t-28-9q-12-9-15.5-24t7.5-31l41-55q6-8 7-17t-1-18l-48-163-6 39q-3 23-24 32t-39-5L439-856ZM80-280q-17 0-28.5-11.5T40-320q0-17 11.5-28.5T80-360h240q17 0 28.5 11.5T360-320q0 17-11.5 28.5T320-280H80Zm40 120q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240h200q17 0 28.5 11.5T360-200q0 17-11.5 28.5T320-160H120Zm80 120q-17 0-28.5-11.5T160-80q0-17 11.5-28.5T200-120h400q17 0 28.5-11.5T640-160v-200q0-10-4-18t-12-14L488-494l19 35q11 20-.5 39.5T472-400H160q-17 0-28.5-11.5T120-440q0-17 11.5-28.5T160-480h244l-34-60q-12-21-9.5-44.5T380-625l4-4q11-11 25.5-11.5T436-632l236 176q23 17 35.5 42t12.5 54v200q0 50-35 85t-85 35H200Zm300-227ZM248-599q10-14 25.5-16t29.5 8q14 10 16.5 25.5T312-552q-10 14-26 16.5t-30-7.5q-14-10-16-26t8-30Zm15-88q-14-10-16-26t8-30q10-14 26-16t30 8l32 25q15 12 15.5 27t-8.5 27q-9 12-24 16t-30-7l-33-24Z"/>
    </Icon>
  );
});

IconMaterialSignLanguage.displayName = 'OnesyIconMaterialSignLanguage';

export default IconMaterialSignLanguage;
