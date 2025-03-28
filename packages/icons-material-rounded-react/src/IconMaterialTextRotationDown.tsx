import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotationDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationDown'

      short_name='TextRotationDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-272 14-14q11-11 28-11t28 11q11 11 11 28t-11 28l-82 82q-12 12-28 11.5T212-148l-83-81q-12-12-11.5-28.5T130-286q12-11 28-11.5t28 11.5l14 14v-488q0-17 11.5-28.5T240-800q17 0 28.5 11.5T280-760v488Zm232-118v-178l-89-32q-11-4-17-13t-6-20q0-19 15.5-29.5T448-666l368 137q11 4 17.5 13.5T840-494v28q0 12-6.5 21.5T816-431L447-294q-17 6-32-4t-15-28q0-11 6.5-20.5T424-360l88-30Zm64-24 182-64v-4l-182-64v132Z"/>
    </Icon>
  );
});

IconMaterialTextRotationDown.displayName = 'OnesyIconMaterialTextRotationDown';

export default IconMaterialTextRotationDown;
