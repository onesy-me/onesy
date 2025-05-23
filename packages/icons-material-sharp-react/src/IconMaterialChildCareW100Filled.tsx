import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChildCareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChildCareW100Filled'

      short_name='ChildCare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M573.8-506q14.2 0 24.2-9.8 10-9.81 10-24 0-14.2-9.8-24.2-9.81-10-24-10-14.2 0-24.2 9.8-10 9.81-10 24 0 14.2 9.8 24.2 9.81 10 24 10Zm-188 0q14.2 0 24.2-9.8 10-9.81 10-24 0-14.2-9.8-24.2-9.81-10-24-10-14.2 0-24.2 9.8-10 9.81-10 24 0 14.2 9.8 24.2 9.81 10 24 10ZM480-320q45 0 83-21.5t63-58.5H334q25 37 63 58.5t83 21.5Zm.06 148Q416-172 360-196t-98-66q-42-42-66-97.94-24-55.95-24-120Q172-544 196-600t66-98q42-42 97.94-66 55.95-24 120-24Q544-788 600-764t98 66q42 42 66 97.94 24 55.95 24 120Q788-416 764-360t-66 98q-42 42-97.94 66-55.95 24-120 24ZM496-636q17 0 30.5-4.5t13.5-15.35q0-5.66-3.43-9.9Q533.14-670 528-670q-8 0-14 3t-17.7 3q-27.3 0-46.8-19.5Q430-703 430-730v-15q0-5 2-11-7 2-13 3t-13 3q-2 5-3 10t-1 10q0 39 27.5 66.5T496-636Z"/>
    </Icon>
  );
});

IconMaterialChildCareW100Filled.displayName = 'OnesyIconMaterialChildCareW100Filled';

export default IconMaterialChildCareW100Filled;
