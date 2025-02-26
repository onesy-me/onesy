import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFestivalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FestivalFilled'

      short_name='Festival'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M190-80q-40 0-64-32.5T110-186q11-51 15-102t5-102q-41-16-65.5-51T40-520v-28q0-23 13.5-42T89-618q95-38 179-94t162-122q11-9 23.5-13.5T480-852q14 0 26.5 4.5T530-834q78 66 162 122t179 94q22 9 35.5 28t13.5 42v28q0 44-24.5 79T830-390q1 51 5 102t15 102q8 41-16 73.5T770-80H190Zm46-520h488q-66-37-126.5-80T480-772q-57 49-117.5 92T236-600Zm344 140q25 0 42.5-17.5T640-520H520q0 25 17.5 42.5T580-460Zm-200 0q25 0 42.5-17.5T440-520H320q0 25 17.5 42.5T380-460Zm-200 0q25 0 42.5-17.5T240-520H120q0 25 17.5 42.5T180-460Zm6 300h107q9-60 14-119t8-119q-10-5-18.5-10.5T280-422q-14 14-32 24t-38 15q-2 57-7 112.5T186-160Zm188 0h212q-8-55-12.5-110T566-381q-25-2-47-12.5T480-421q-17 17-39 27.5T394-381q-3 56-7.5 111T374-160Zm293 0h107q-12-55-17-110.5T750-383q-20-5-38-14.5T680-422q-8 8-16.5 13.5T645-398q3 60 8.5 119T667-160Zm113-300q25 0 42.5-17.5T840-520H720q0 25 17.5 42.5T780-460Z"/>
    </Icon>
  );
});

IconMaterialFestivalFilled.displayName = 'OnesyIconMaterialFestivalFilled';

export default IconMaterialFestivalFilled;
