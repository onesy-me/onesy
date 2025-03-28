import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvGuideFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvGuideFilled'

      short_name='TvGuide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-440v200q0 17 11.5 28.5T360-320q17 0 28.5-11.5T400-360v-200h70l81 216q4 11 13.5 17.5T586-320h28q12 0 21.5-6.5T649-344l88-234q8-23-5.5-42.5T694-640q-15 0-27.5 9T649-608l-49 148-51-153q-4-12-14.5-19.5T511-640H240q-17 0-28.5 11.5T200-600q0 17 11.5 28.5T240-560h80Z"/>
    </Icon>
  );
});

IconMaterialTvGuideFilled.displayName = 'OnesyIconMaterialTvGuideFilled';

export default IconMaterialTvGuideFilled;
