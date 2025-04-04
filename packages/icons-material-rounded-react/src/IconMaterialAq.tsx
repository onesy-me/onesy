import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAq = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Aq'

      short_name='Aq'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M657-275q-78 0-132-54t-54-132q0-77 54-131.5T656-647q77 0 130.5 54.5T840-461q0 40-16 76t-45 63l12 18q6 9 3.5 19T784-269q-9 6-19 4t-16-11l-12-17q-19 9-39 13.5t-41 4.5Zm-443-99-26 72q-3 8-10.5 13.5T161-283q-15 0-23.5-12.5T134-322l112-298q3-9 11-14t17-5h22q9 0 17 5t11 14l112 298q5 14-3 26.5T410-283q-9 0-17-5.5T382-303l-25-71H214Zm442 47q14 0 26.5-3t24.5-8l-28-41q-6-9-3.5-19t11.5-16q9-6 19-4t16 11l26 39q17-19 26-43t9-50q0-55-36.5-94.5T656-595q-54 0-91 39.5T528-461q0 55 37 94.5t91 39.5Zm-424-99h106l-51-144h-4l-51 144Z"/>
    </Icon>
  );
});

IconMaterialAq.displayName = 'OnesyIconMaterialAq';

export default IconMaterialAq;
