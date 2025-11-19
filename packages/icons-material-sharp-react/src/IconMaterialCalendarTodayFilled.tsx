import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarTodayFilled = (props: IIcon) => {

  return (
    <Icon
      name='CalendarTodayFilled'

      short_name='CalendarToday'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-720h120v-80h80v80h320v-80h80v80h120v720H120Zm80-80h560v-400H200v400Z"/>
    </Icon>
  );
};

IconMaterialCalendarTodayFilled.displayName = 'OnesyIconMaterialCalendarTodayFilled';

export default IconMaterialCalendarTodayFilled;
