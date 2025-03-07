import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOff'

      short_name='LocationOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-560q0-33-23.5-56.5T480-640q-10 0-19 2t-17 7l107 107q5-8 7-17t2-19Zm168 213-58-58q25-42 37.5-78.5T720-552q0-109-69.5-178.5T480-800q-44 0-82.5 13.5T328-747l-57-57q43-37 97-56.5T480-880q127 0 223.5 89T800-552q0 48-18 98.5T728-347Zm-157 71L244-603q-2 12-3 25t-1 26q0 71 59 162.5T480-186q26-23 48.5-45.5T571-276Zm-91 169q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-32 5-61t14-55L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 11.5 28T847-57q-12 12-28.5 12T790-57L627-220q-17 18-38 39t-56 54q-11 10-25 15t-28 5Zm-72-332Zm91-137Z"/>
    </Icon>
  );
});

IconMaterialLocationOff.displayName = 'OnesyIconMaterialLocationOff';

export default IconMaterialLocationOff;
