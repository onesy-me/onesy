import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElevationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevationW100'

      short_name='Elevation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m167-214 183-256h200l222-259v515H167Zm-19-159-22-16 149-209h201l178-209 22 19-188 218H289L148-373Zm74 131h522v-412L562-442H364L222-242Zm522 0Z"/>
    </Icon>
  );
});

IconMaterialElevationW100.displayName = 'OnesyIconMaterialElevationW100';

export default IconMaterialElevationW100;
