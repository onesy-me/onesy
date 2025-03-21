import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneInTalkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneInTalkW100'

      short_name='PhoneInTalk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M777.71-508q-5.71 0-9.88-4.03-4.16-4.02-4.83-9.97-13-103-86.5-176.5T500-785q-5.95-.7-9.98-4.9-4.02-4.2-4.02-10.15t4-9.95q4-4 10-3 116 12 197.5 93.5T791-522q1 6-3.11 10-4.1 4-10.18 4Zm-163.08 0q-4.63 0-8.23-3-3.6-3-5.4-8-11-38-38.5-66.5T497-624q-5-1.78-8-5.34-3-3.56-3-8.54 0-7.12 4.5-11.12 4.5-4 11.5-2 47.01 10.93 81 44.96Q617-572 629-524q2 7-2.63 11.5-4.62 4.5-11.74 4.5ZM745-172q-94 0-195.5-49.5T359.5-360q-88.5-89-138-190T172-745q0-18.43 12-30.71Q196-788 214-788h80q17 0 29.5 10.5T341-750l18 82q3 17-1 30t-14 21l-85 77q26 47 56.5 86.5T380-379q36 36 78 67t93 59l83-85q10-11 21.5-14t26.5-1l68 14q17 4 27.5 17t10.5 30v78q0 18-12.29 30-12.28 12-30.71 12ZM246-566l80-72q5-4 6.5-11t-.5-13l-18-82q-2-8-7-12t-13-4h-80q-6 0-10 4t-4 10q0 41 12.5 87t33.5 93Zm332 326q41 21 88.5 30.5T746-200q6 0 10-4t4-10v-78q0-8-4-13t-12-7l-68-14q-6-2-10.5-.5T656-320l-78 80ZM246-566Zm332 326Z"/>
    </Icon>
  );
});

IconMaterialPhoneInTalkW100.displayName = 'OnesyIconMaterialPhoneInTalkW100';

export default IconMaterialPhoneInTalkW100;
