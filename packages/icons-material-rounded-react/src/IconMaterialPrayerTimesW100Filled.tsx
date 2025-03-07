import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrayerTimesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrayerTimesW100Filled'

      short_name='PrayerTimes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M367.63-212H272q-24.75 0-42.37-17.63Q212-247.25 212-272v-95.63L142-438q-9-9-13-19.81-4-10.82-4-22 0-11.19 4-22.19 4-11 13-20l70-70.37V-688q0-24.75 17.63-42.38Q247.25-748 272-748h95.63L438-818q9-9 19.81-13 10.82-4 22-4 11.19 0 22.19 4 11 4 20 13l70.37 70H688q24.75 0 42.38 17.62Q748-712.75 748-688v95.63L818-522q9 9 13 19.81 4 10.82 4 22 0 11.19-4 22.19-4 11-13 20l-70 70.37V-272q0 24.75-17.62 42.37Q712.75-212 688-212h-95.63L522-142q-9 9-19.81 13-10.82 4-22 4-11.19 0-22.19-4-11-4-20-13l-70.37-70ZM513-496l47-34 46 34-18-55 47-33h-58l-17-56-17.6 56H484l47 33-18 55Zm-33.28 176Q546-320 593-366.35t47-113.47q0-6.39-.5-12.79Q639-499 637-505q-8.78 37.43-39.1 61.71Q567.58-419 526.88-419 479-419 446-452q-33-33-33-80 0-38 21.5-67t54.5-41h-8.81q-67.28 0-113.74 46.76Q320-546.48 320-480.14q0 67.14 46.32 113.64t113.4 46.5Z"/>
    </Icon>
  );
});

IconMaterialPrayerTimesW100Filled.displayName = 'OnesyIconMaterialPrayerTimesW100Filled';

export default IconMaterialPrayerTimesW100Filled;
