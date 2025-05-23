import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubscriptW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptW100'

      short_name='Subscript'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M758-212q-12.75 0-21.37-8.63Q728-229.25 728-242v-28q0-12.75 8.63-21.38Q745.25-300 758-300h70v-32h-86q-5.6 0-9.8-4.2-4.2-4.2-4.2-9.8 0-5.6 4.2-9.8 4.2-4.2 9.8-4.2h84q12.75 0 21.38 8.62Q856-342.75 856-330v28q0 12.75-8.62 21.37Q838.75-272 826-272h-70v32h86q5.6 0 9.8 4.2 4.2 4.2 4.2 9.8 0 5.6-4.2 9.8-4.2 4.2-9.8 4.2h-84Zm-436.67-60q-9 0-13.16-7.5Q304-287 309-295l147-226-133-204q-5-8-.83-15.5 4.16-7.5 12.83-7.5 4 0 7.08 1.83 3.07 1.84 4.92 5.17l132 203 135-204q1.78-2.86 4.89-4.43Q622-748 625.73-748q9.14 0 13.21 7.5Q643-733 638-725L502-521l149 226q5 8 .75 15.5T639-272q-3.79 0-6.95-1.83-3.16-1.84-5.05-5.17L479-504 333-279q-1.78 3.33-4.89 5.17Q325-272 321.33-272Z"/>
    </Icon>
  );
});

IconMaterialSubscriptW100.displayName = 'OnesyIconMaterialSubscriptW100';

export default IconMaterialSubscriptW100;
