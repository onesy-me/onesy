import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEcgHeartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcgHeartW100'

      short_name='EcgHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-482Zm0 311q-7 0-14.5-3t-12.5-9L205-432q-35-35-54-78.5T132-599q0-81 50-137t122-56q39 0 75.5 16.5T445-729l35 37 33-35q30-32 67-48.5t75-16.5q72 0 122.5 56T828-600q0 46-19 89.5T755-432L506-183q-6 6-12.5 9t-13.5 3Zm40-443q4 0 7 1.5t5 4.5l75 114h162q16-25 24-52t7-54q-1-69-43-116.5T655-764q-33 0-64.5 13.5T536-711l-39 42q-4 5-8 6.5t-9 1.5q-5 0-9.5-2t-8.5-6l-39-42q-23-26-54.5-39.5T304-764q-60 0-102 47.5T160-600q0 28 8 54.5t23 51.5h169q4 0 6.5 1.5t4.5 4.5l65 97 71-213q2-5 5-7.5t8-2.5Zm4 45-71 213q-2 5-5.5 7.5T439-346q-4 0-6.5-1.5T428-352l-76-114H211l262 263q2 2 3.5 2.5t3.5.5q2 0 3.5-.5t3.5-2.5l262-263H600q-4 0-7-2t-5-5l-64-96Z"/>
    </Icon>
  );
});

IconMaterialEcgHeartW100.displayName = 'OnesyIconMaterialEcgHeartW100';

export default IconMaterialEcgHeartW100;
