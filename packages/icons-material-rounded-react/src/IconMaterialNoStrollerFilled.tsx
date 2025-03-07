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
      <path d="M240-80q-33 0-56.5-23.5T160-160q0-33 23.5-56.5T240-240q33 0 56.5 23.5T320-160q0 33-23.5 56.5T240-80Zm600-585q-17 0-28.5-11.5T800-705v-1q0-23-15.5-38.5T746-760q-10 0-19 4t-16 12l-31 35v219q0 27-24.5 37.5T612-461L505-568q-11-11-11.5-26.5T503-622l145-171q19-22 44-34.5t54-12.5q56 0 95 39t39 95v1q0 17-11.5 28.5T840-665ZM600-360l56 57q-11 11-25.5 17t-30.5 6H297q-26 0-36.5-23t6.5-43l108-127L84-763q-12-11-11.5-27.5T84-819q12-12 28.5-12t28.5 12l679 679q12 12 11.5 28T819-84q-12 11-28 11.5T763-84L487-360h113Zm40 280q-33 0-56.5-23.5T560-160q0-33 23.5-56.5T640-240q33 0 56.5 23.5T720-160q0 33-23.5 56.5T640-80ZM405-668l-91-91q-19-19-12.5-44t31.5-31q17-3 33.5-4.5T400-840q29 0 57.5 4.5T513-822q23 8 28.5 31.5T530-747l-66 77q-11 14-29 14t-30-12Z"/>
    </Icon>
  );
});

IconMaterialNoStrollerFilled.displayName = 'OnesyIconMaterialNoStrollerFilled';

export default IconMaterialNoStrollerFilled;
