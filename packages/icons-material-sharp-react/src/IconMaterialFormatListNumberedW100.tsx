import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatListNumberedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListNumberedW100'

      short_name='FormatListNumbered'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-132v-28h100v-62h-60v-28h60v-62H172v-28h128v90l-24 18 24 10v90H172Zm0-244v-118h100v-62H172v-28h128v118H200v62h100v28H172Zm60-244v-180h-60v-28h88v208h-28Zm160 394v-28h396v28H392Zm0-240v-28h396v28H392Zm0-240v-28h396v28H392Z"/>
    </Icon>
  );
});

IconMaterialFormatListNumberedW100.displayName = 'OnesyIconMaterialFormatListNumberedW100';

export default IconMaterialFormatListNumberedW100;
