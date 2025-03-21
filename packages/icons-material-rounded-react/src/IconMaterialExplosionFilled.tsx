import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExplosionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplosionFilled'

      short_name='Explosion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m421-340 31 30q12 12 28 12t28-12l31-30h41q17 0 28.5-11.5T620-380v-41l30-31q12-12 12-28t-12-28l-30-31v-41q0-17-11.5-28.5T580-620h-41l-38-37q-9-9-21-9t-21 9l-38 37h-41q-17 0-28.5 11.5T340-580v41l-30 31q-12 12-12 28t12 28l30 31v41q0 17 11.5 28.5T380-340h41Zm-75 180H240q-33 0-56.5-23.5T160-240v-106l-77-78q-11-12-17-26.5T60-480q0-15 6-29.5T83-536l77-78v-106q0-33 23.5-56.5T240-800h106l78-77q12-11 26.5-17t29.5-6q15 0 29.5 6t26.5 17l78 77h106q33 0 56.5 23.5T800-720v106l77 78q11 12 17 26.5t6 29.5q0 15-6 29.5T877-424l-77 78v106q0 33-23.5 56.5T720-160H614l-78 77q-12 11-26.5 17T480-60q-15 0-29.5-6T424-83l-78-77Z"/>
    </Icon>
  );
});

IconMaterialExplosionFilled.displayName = 'OnesyIconMaterialExplosionFilled';

export default IconMaterialExplosionFilled;
