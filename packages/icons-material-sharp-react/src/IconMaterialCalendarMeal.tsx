import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarMeal = (props: IIcon) => {

  return (
    <Icon
      name='CalendarMeal'

      short_name='CalendarMeal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h120v-80h80v80h320v-80h80v80h120v720H120Zm640-80v-560H200v560h560Zm-400-80h60v-160q26-7 43-28.5t17-48.5v-163h-40v151h-30v-151h-40v151h-30v-151h-40v163q0 27 17 48.5t43 28.5v160Zm240 0h60v-400q-50 0-85 35t-35 85v120h60v160Zm-400 80v-560 560Z"/>
    </Icon>
  );
};

IconMaterialCalendarMeal.displayName = 'OnesyIconMaterialCalendarMeal';

export default IconMaterialCalendarMeal;
