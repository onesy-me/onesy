import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoStrollerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoStrollerFilled'

      short_name='NoStroller'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160q0-33 23.5-56.5T240-240q33 0 56.5 23.5T320-160q0 33-23.5 56.5T240-80Zm440-313L479-594l169-199q19-22 44-34.5t54-12.5q56 0 95 39t39 95v26h-80v-26q0-23-15.5-38.5T746-760q-10 0-19 4t-16 12l-31 35v316Zm-80 33 79 80H211l164-193L56-791l56-57 736 736-57 56-304-304h113Zm40 280q-33 0-56.5-23.5T560-160q0-33 23.5-56.5T640-240q33 0 56.5 23.5T720-160q0 33-23.5 56.5T640-80ZM436-637 261-812q33-14 68-21t71-7q45 0 88.5 11t83.5 33L436-637Z"/>
    </Icon>
  );
});

IconMaterialNoStrollerFilled.displayName = 'OnesyIconMaterialNoStrollerFilled';

export default IconMaterialNoStrollerFilled;
