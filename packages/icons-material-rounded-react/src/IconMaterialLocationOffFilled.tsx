import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOffFilled'

      short_name='LocationOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-107q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-32 5-61t14-55L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28.5T848-56q-12 12-28.5 12T791-56L627-220q-25 26-50 51.5T533-127q-11 10-25 15t-28 5Zm248-240L551-524q5-8 7-17t2-19q0-33-23.5-56.5T480-640q-10 0-19 2t-17 7L271-804q43-37 97-56.5T480-880q127 0 223.5 89T800-552q0 48-18 98.5T728-347Z"/>
    </Icon>
  );
});

IconMaterialLocationOffFilled.displayName = 'OnesyIconMaterialLocationOffFilled';

export default IconMaterialLocationOffFilled;
