import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneLockedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneLockedW100'

      short_name='PhoneLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M602-544q-12.75 0-21.37-8.63Q572-561.25 572-574v-116q0-12.75 8.63-21.38Q589.25-720 602-720h10v-40q0-29 19.5-48.5T680-828q29 0 48.5 19.5T748-760v40h10q12.75 0 21.38 8.62Q788-702.75 788-690v116q0 12.75-8.62 21.37Q770.75-544 758-544H602Zm38-176h80v-40q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760v40Zm105 548q-94 0-195.5-49.5T359.5-360q-88.5-89-138-190T172-745q0-18.43 12-30.71Q196-788 214-788h80q17 0 29.5 10.5T341-750l18 82q3 17-1 30t-14 21l-85 77q26 47 56.5 86.5T380-379q36 36 78 67t93 59l83-85q10-11 21.5-14t26.5-1l68 14q17 4 27.5 17t10.5 30v78q0 18-12.29 30-12.28 12-30.71 12ZM246-566l80-72q5-4 6.5-11t-.5-13l-18-82q-2-8-7-12t-13-4h-80q-6 0-10 4t-4 10q0 41 12.5 87t33.5 93Zm332 326q41 21 88.5 30.5T746-200q6 0 10-4t4-10v-78q0-8-4-13t-12-7l-68-14q-6-2-10.5-.5T656-320l-78 80ZM246-566Zm332 326Z"/>
    </Icon>
  );
});

IconMaterialPhoneLockedW100.displayName = 'OnesyIconMaterialPhoneLockedW100';

export default IconMaterialPhoneLockedW100;
