import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecordVoiceOverW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecordVoiceOverW100Filled'

      short_name='RecordVoiceOver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M883-600q0 62-23 117t-61 98q-5 5-11 6.5t-11-3.5q-5-5-4.5-11t5.5-11q36-40 56.5-90T855-600q0-56-20.5-106T778-796q-5-5-5.5-11t4.5-11q5-5 11-3.5t11 6.5q38 43 61 98t23 117Zm-190 0q0 23-8 44.5T663-517q-4 5-9.5 5.5T643-516q-5-5-5-10.5t4-10.5q11-14 17-30t6-33q0-19-6-34t-17-29q-4-5-4-10.5t5-10.5q5-5 10.5-4.5t9.5 5.5q14 17 22 37.5t8 45.5ZM345-492q-45 0-76.5-31.5T237-600q0-45 31.5-76.5T345-708q45 0 76.5 31.5T453-600q0 45-31.5 76.5T345-492ZM77-242v-22q0-26 13-43.5t37-28.5q48-23 106-37.5T345-388q54 0 112 14.5T563-336q24 11 37 28.5t13 43.5v22q0 13-8.5 21.5T583-212H107q-13 0-21.5-8.5T77-242Z"/>
    </Icon>
  );
});

IconMaterialRecordVoiceOverW100Filled.displayName = 'OnesyIconMaterialRecordVoiceOverW100Filled';

export default IconMaterialRecordVoiceOverW100Filled;
