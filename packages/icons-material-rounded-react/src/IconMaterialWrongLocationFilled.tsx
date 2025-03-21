import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWrongLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrongLocationFilled'

      short_name='WrongLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0-400q17 0 35 2t35 4l96 96-28 28q-23 23-22.5 56t23.5 56q23 23 56.5 23t56.5-23l27-27 31 32q4 20 7 40.5t3 40.5q0 94-68 201T533-127q-11 10-25 15t-28 5q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880Zm279 158-56 56q-11 11-28 11t-28-11q-11-11-11-28t11-28l56-56-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l56 56 56-56q11-11 28-11t28 11q11 11 11 28t-11 28l-56 56 56 56q11 11 11 28t-11 28q-11 11-28 11t-28-11l-56-56Z"/>
    </Icon>
  );
});

IconMaterialWrongLocationFilled.displayName = 'OnesyIconMaterialWrongLocationFilled';

export default IconMaterialWrongLocationFilled;
