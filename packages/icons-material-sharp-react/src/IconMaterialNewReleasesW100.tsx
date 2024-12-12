import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewReleasesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewReleasesW100'

      short_name='NewReleases'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m366-126-64-108-122-26 12-126-82-94 82-94-12-126 122-26 64-108 114 48 114-48 64 108 122 26-12 126 82 94-82 94 12 126-122 26-64 108-114-48-114 48Zm12-36 102-42 102 42 58-96 110-24-10-114 74-84-74-84 10-114-110-24-58-96-102 42-102-42-58 96-110 24 10 114-74 84 74 84-10 114 110 24 58 96Zm102-318Zm-42 106 190-190-20-20-170 170-86-86-20 20 106 106Z"/>
    </Icon>
  );
});

IconMaterialNewReleasesW100.displayName = 'OnesyIconMaterialNewReleasesW100';

export default IconMaterialNewReleasesW100;
