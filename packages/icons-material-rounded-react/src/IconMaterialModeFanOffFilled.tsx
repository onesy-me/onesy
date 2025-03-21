import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeFanOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeFanOffFilled'

      short_name='ModeFanOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M643-780q0 28-13.5 53T593-687q-23 15-30.5 30.5T546-617q-8 21-29.5 27.5T478-599L343-731q-8-9-10.5-21t2.5-23q20-45 71.5-75T539-880q51 0 77.5 31t26.5 69Zm76 140q76 0 118.5 66.5T880-424q0 43-27 73.5T783-320h-2q-8 0-15.5-3.5T753-332L545-527q-13-14-10.5-35t22.5-29l97-36q16-6 32-9.5t33-3.5ZM424-80q-51 0-77.5-30.5T320-180q0-26 11.5-50.5T367-271q22-14 35.5-36t18.5-47l-12-6q-6-3-11-7l-92 33q-17 6-33 10t-33 4q-63 0-111.5-55T80-536q0-51 30.5-77.5T179-640q8 0 16 1t16 3L80-767q-12-12-12-28.5T80-824q12-12 28.5-12t28.5 12l683 684q12 12 12 28t-12 28q-12 12-28.5 12T763-84L637-211q-13 54-66.5 92.5T424-80Z"/>
    </Icon>
  );
});

IconMaterialModeFanOffFilled.displayName = 'OnesyIconMaterialModeFanOffFilled';

export default IconMaterialModeFanOffFilled;
