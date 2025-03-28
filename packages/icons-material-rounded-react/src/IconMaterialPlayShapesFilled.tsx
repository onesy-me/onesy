import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayShapesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayShapesFilled'

      short_name='PlayShapes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M148-520q-23 0-34.5-19.5T113-579l132-238q11-20 35-20t35 20l132 238q11 20-.5 39.5T412-520H148Zm132 400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm280 0q-17 0-28.5-11.5T520-160v-240q0-17 11.5-28.5T560-440h240q17 0 28.5 11.5T840-400v240q0 17-11.5 28.5T800-120H560Zm64-580-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l76 76 76-76q11-11 28-11t28 11q11 11 11 28t-11 28l-76 76 76 76q11 11 11 28t-11 28q-11 11-28 11t-28-11l-76-76-76 76q-11 11-28 11t-28-11q-11-11-11-28t11-28l76-76Z"/>
    </Icon>
  );
});

IconMaterialPlayShapesFilled.displayName = 'OnesyIconMaterialPlayShapesFilled';

export default IconMaterialPlayShapesFilled;
