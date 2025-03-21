import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestCamWallMount = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamWallMount'

      short_name='NestCamWallMount'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-262q-33 0-56.5-23.5T80-342v-320q0-33 23.5-56.5T160-742q33 0 56.5 24t23.5 57q35-55 92.5-88T460-782q52 0 99.5 19.5T644-706l229 229-367 367-230-228q-11-11-19.5-22T240-383v41q0 33-23.5 56.5T160-262Zm120-261q0 36 13.5 69t39.5 59l173 173 254-255-173-173q-26-26-58.5-39.5T460-703q-75 0-127.5 52.5T280-523Zm240 60Z"/>
    </Icon>
  );
});

IconMaterialNestCamWallMount.displayName = 'OnesyIconMaterialNestCamWallMount';

export default IconMaterialNestCamWallMount;
