import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenRotationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationFilled'

      short_name='ScreenRotation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M496-182 182-496q-23-23-23-54t23-54l174-174q23-23 54-23t54 23l314 314q23 23 23 54t-23 54L604-182q-23 23-54 23t-54-23Zm63-691 77 77q11 11 11 28t-11 28q-11 11-28 11t-28-11L410-910q-12-12-6.5-28t22.5-19q14-2 27-2.5t27-.5q99 0 186.5 37.5t153 103q65.5 65.5 103 153T960-480q0 17-11.5 28.5T920-440q-17 0-28.5-11.5T880-480q0-71-24-136t-66.5-117Q747-785 688-821.5T559-873ZM401-87l-77-77q-11-11-11-28t11-28q11-11 28-11t28 11L550-50q12 12 6.5 28.5T534-3q-14 2-27 2.5T480 0q-99 0-186.5-37.5t-153-103Q75-206 37.5-293.5T0-480q0-17 11.5-28.5T40-520q17 0 28.5 11.5T80-480q0 71 24 136t66.5 117Q213-175 272-138.5T401-87Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationFilled.displayName = 'OnesyIconMaterialScreenRotationFilled';

export default IconMaterialScreenRotationFilled;
