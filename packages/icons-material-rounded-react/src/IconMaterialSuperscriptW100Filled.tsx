import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSuperscriptW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SuperscriptW100Filled'

      short_name='Superscript'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M758-600q-12.75 0-21.37-8.63Q728-617.25 728-630v-28q0-12.75 8.63-21.38Q745.25-688 758-688h70v-32h-86q-5.6 0-9.8-4.2-4.2-4.2-4.2-9.8 0-5.6 4.2-9.8 4.2-4.2 9.8-4.2h84q12.75 0 21.38 8.62Q856-730.75 856-718v28q0 12.75-8.62 21.37Q838.75-660 826-660h-70v32h86q5.6 0 9.8 4.2 4.2 4.2 4.2 9.8 0 5.6-4.2 9.8-4.2 4.2-9.8 4.2h-84ZM321.33-212q-9 0-13.16-7.5Q304-227 309-235l147-226-133-204q-5-8-.83-15.5 4.16-7.5 12.83-7.5 4 0 7.08 1.83 3.07 1.84 4.92 5.17l132 203 135-204q1.78-2.86 4.89-4.43Q622-688 625.73-688q9.14 0 13.21 7.5Q643-673 638-665L502-461l149 226q5 8 .75 15.5T639-212q-3.79 0-6.95-1.83-3.16-1.84-5.05-5.17L479-444 333-219q-1.78 3.33-4.89 5.17Q325-212 321.33-212Z"/>
    </Icon>
  );
});

IconMaterialSuperscriptW100Filled.displayName = 'OnesyIconMaterialSuperscriptW100Filled';

export default IconMaterialSuperscriptW100Filled;
