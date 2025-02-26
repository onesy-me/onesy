import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecyclingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecyclingFilled'

      short_name='Recycling'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m389-626 68-113-59-98q-12-20-34.5-20T329-837l-77 129q-8 14-4.5 30.5T265-653l69 41q14 8 30.5 4t24.5-18Zm366 306-68-113q-9-14-4.5-30.5T701-488l70-40q14-8 30-4t24 18l44 73q11 17 12 38t-9 39q-10 20-29.5 32T800-320h-45ZM606-74l-98-98q-12-12-12-28t12-28l98-98q10-10 22-5t12 19v32h190l-58 116q-11 20-30 32t-42 12h-60v32q0 14-12 19t-22-5Zm-353-46q-20 0-36.5-10.5T192-158q-8-16-7.5-33.5T194-224l34-56h132q17 0 28.5 11.5T400-240v80q0 17-11.5 28.5T360-120H253Zm-99-114L89-364q-9-18-8.5-38.5T92-441l16-27-27-16q-11-7-9-20.5T87-521l133-33q16-4 30.5 4.5T269-525l33 134q3 13-8 21t-22 1l-27-17-91 152Zm501-352-133-33q-13-3-14.5-16.5T517-656l27-16-125-208h141q21 0 39.5 10.5T629-841l52 87 26-16q11-7 22 1t8 21l-33 133q-4 16-18.5 24.5T655-586Z"/>
    </Icon>
  );
});

IconMaterialRecyclingFilled.displayName = 'OnesyIconMaterialRecyclingFilled';

export default IconMaterialRecyclingFilled;
