import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeakAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeakAdd'

      short_name='LeakAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M559-804q-13 160-126 273.5T161-402q-17 2-29-9.5T120-440q0-17 11-28.5t28-13.5q127-14 216.5-104.5T478-805q2-16 14-25.5t28-9.5q17 0 29 10.5t10 25.5Zm-161 0q-12 94-79 161t-161 80q-16 2-27-9t-11-28q0-16 9.5-28t25.5-15q63-11 107-56.5T317-808q2-15 14.5-23.5T360-840q17 0 28.5 10.5T398-804Zm42 684q-17 0-28.5-12t-9.5-29q15-159 128.5-272T804-559q15-2 25.5 10t10.5 29q0 16-9.5 28T805-478q-128 13-218.5 102.5T482-159q-2 17-13.5 28T440-120Zm160 0q-17 0-28-11t-9-27q13-94 80-161t161-79q15-2 25.5 9.5T840-360q0 16-8.5 28.5T808-317q-63 11-108.5 55T643-155q-3 16-15 25.5t-28 9.5ZM220-790q0 21-14.5 35.5T170-740q-21 0-35.5-14.5T120-790q0-21 14.5-35.5T170-840q21 0 35.5 14.5T220-790Zm620 620q0 21-14.5 35.5T790-120q-21 0-35.5-14.5T740-170q0-21 14.5-35.5T790-220q21 0 35.5 14.5T840-170Z"/>
    </Icon>
  );
});

IconMaterialLeakAdd.displayName = 'OnesyIconMaterialLeakAdd';

export default IconMaterialLeakAdd;
