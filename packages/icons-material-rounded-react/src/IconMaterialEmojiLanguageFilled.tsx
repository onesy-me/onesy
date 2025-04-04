import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiLanguageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiLanguageFilled'

      short_name='EmojiLanguage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-40q-83 0-154.5-43T356-198q-8-17-8-34.5t10-33.5q10-16 26-25t35-9h249q1-11 1.5-21.5t.5-21.5q0-9-.5-18.5T668-380h-19q-17 0-28.5-11.5T609-420q0-17 11.5-28.5T649-460h155q-14-22-33-39.5T729-530q-17-9-23-26t1-32q7-15 21-21t27 1q76 38 120.5 110.5T920-340q0 125-87.5 212.5T620-40Zm-95-102q-7-20-12.5-39t-9.5-39h-67q17 25 39.5 45t49.5 33Zm95 14q12-22 20.5-45t14.5-47h-70q6 24 15 47t20 45Zm95-14q27-13 49.5-33t39.5-45h-67q-5 20-10 39t-12 39Zm33-158h88q2-10 3-19.5t1-20.5q0-11-1-20.5t-3-19.5h-88q1 9 1.5 18.5t.5 18.5q0 11-.5 21.5T748-300Zm-408-20q-125 0-212.5-87.5T40-620q0-125 87.5-212.5T340-920q125 0 212.5 87.5T640-620q0 125-87.5 212.5T340-320ZM240-640q17 0 28.5-11.5T280-680q0-17-11.5-28.5T240-720q-17 0-28.5 11.5T200-680q0 17 11.5 28.5T240-640Zm100 176q48 0 85.5-27t54.5-69H200q17 42 54.5 69t85.5 27Zm100-176q17 0 28.5-11.5T480-680q0-17-11.5-28.5T440-720q-17 0-28.5 11.5T400-680q0 17 11.5 28.5T440-640Z"/>
    </Icon>
  );
});

IconMaterialEmojiLanguageFilled.displayName = 'OnesyIconMaterialEmojiLanguageFilled';

export default IconMaterialEmojiLanguageFilled;
