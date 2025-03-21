import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPerson3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person3W100'

      short_name='Person3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-432q-29 0-48.5-20.5T332-500q0-29 14-40t14-34q0-12-4-23t-4-23q0-22.33 12-39.66Q376-677 405-689q14-13 29-26t46-13q33 0 47 14t28 25q29 12 41 29.34 12 17.33 12 39.66 0 12-4 23t-4 23q0 23 14 34t14 40q0 27-19.5 47.5T560-432H400Zm0-28h160q17 0 28.5-12t11.5-28q0-7-2.5-13t-7.5-12q-11-13-14.5-25.5T572-574q0-16 4-27.5t4-18.5q0-12-7-22t-18-15q-9-4-16.5-9T525-679q-5-6-16.5-13.5T480-700q-17 0-28.5 8T435-678q-6 7-13.5 12t-16.5 9q-11 5-18 15t-7 22q0 7 4 18.5t4 27.5q0 11-3.5 23.5T370-525q-5 6-7.5 12t-2.5 13q0 16 11.5 28t28.5 12ZM212-152v-52q0-22 13.5-41.5T262-276q55-26 109.5-39T480-328q54 0 108.5 13T698-276q23 11 36.5 30.5T748-204v52H212Zm28-28h480v-24q0-14-9.5-26.5T684-252q-48-23-99.69-35.5Q532.63-300 480-300t-104.31 12.5Q324-275 276-252q-17 9-26.5 21.5T240-204v24Zm240 0Zm0-280Z"/>
    </Icon>
  );
});

IconMaterialPerson3W100.displayName = 'OnesyIconMaterialPerson3W100';

export default IconMaterialPerson3W100;
