import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWhatshotW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotW100'

      short_name='Whatshot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-494q5-140 106-237t242-97q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132q-48 0-95.5-14.5T292-189q-6-4-6.5-10t4.5-11q3-3 8-3.5t9 1.5q40 26 83.5 39t89.5 13q134 0 227-93t93-227q0-134-93-227t-227-93q-130 0-222.5 88.5T160-494q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm348 14Zm177-77v128q0 6 4 10t10 4q6 0 10-4t4-10v-146q0-13-8.5-21.5T655-605H509q-6 0-10 4t-4 10q0 6 4 10t10 4h126L440-380l-99-83q-9-8-20.5-7t-19.5 9L175-336q-4 4-4.5 8.5t1.5 9.5q4 7 11.5 7.5T196-315l124-125 99 82q9 8 20.5 7.5T459-359l198-198Z"/>
    </Icon>
  );
});

IconMaterialWhatshotW100.displayName = 'OnesyIconMaterialWhatshotW100';

export default IconMaterialWhatshotW100;
