import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeW100'

      short_name='Home'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200h156v-204q0-12.75 8.63-21.38Q413.25-434 426-434h108q12.75 0 21.38 8.62Q564-416.75 564-404v204h156v-344q0-8-3.5-14.5T707-570L499-727q-8-7-19-7t-19 7L253-570q-6 5-9.5 11.5T240-544v344Zm-28 0v-344q0-14.25 6.38-27 6.37-12.75 17.62-21l208-158q15.68-12 35.84-12Q500-762 516-750l208 158q11.25 8.25 17.63 21 6.37 12.75 6.37 27v344q0 11-8.5 19.5T720-172H566q-12.75 0-21.37-8.63Q536-189.25 536-202v-204H424v204q0 12.75-8.62 21.37Q406.75-172 394-172H240q-11 0-19.5-8.5T212-200Zm268-268Z"/>
    </Icon>
  );
});

IconMaterialHomeW100.displayName = 'OnesyIconMaterialHomeW100';

export default IconMaterialHomeW100;
