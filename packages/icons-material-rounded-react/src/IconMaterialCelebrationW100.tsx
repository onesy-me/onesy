import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCelebrationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CelebrationW100'

      short_name='Celebration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m209-212 282-100-182-182-100 282Zm641-441q-4 5-9.5 5t-9.5-4l-2-2q-20-20-47-20t-47 20L533-452q-4 4-9.5 4.5T513-452q-5-5-5-10t5-10l202-202q27-27 66-27t66 27l3 3q4 4 4 9t-4 9ZM389-760q5-5 10-5t10 5l14 14q32 32 32 78t-32 78l-14 14q-4 4-9.5 4.5T389-576q-5-5-5-10t5-10l14-14q24-24 24-58t-24-58l-14-14q-4-4-4.5-9.5T389-760Zm142-52q5-5 10-5t10 5l42 42q28 28 28 67t-28 67L471-514q-4 4-9.5 4.5T451-514q-5-5-5-10t5-10l122-122q20-20 20-47t-20-47l-42-42q-4-4-4.5-9.5T531-812Zm228 422q-5 5-10 5t-10-5l-12-12q-25-25-60-25t-60 25l-12 12q-4 4-9.5 4.5T575-390q-5-5-5-10t5-10l12-12q33-33 80-33t80 33l12 12q4 4 4.5 9.5T759-390ZM209-212Zm-25-14 99-275q4-10 11.5-15t16.5-5q6 0 11 1.5t10 6.5l178 178q5 5 6.5 10t1.5 11q0 9-5 16.5T498-286l-275 99q-9 3-17.5 1t-14.5-8q-6-6-8-14.5t1-17.5Z"/>
    </Icon>
  );
});

IconMaterialCelebrationW100.displayName = 'OnesyIconMaterialCelebrationW100';

export default IconMaterialCelebrationW100;
