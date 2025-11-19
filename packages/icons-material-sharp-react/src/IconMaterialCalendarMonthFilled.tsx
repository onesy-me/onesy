import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarMonthFilled = (props: IIcon) => {

  return (
    <Icon
      name='CalendarMonthFilled'

      short_name='CalendarMonth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-400v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm320 0v-80h80v80h-80ZM440-240v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm320 0v-80h80v80h-80ZM120-80v-720h120v-80h80v80h320v-80h80v80h120v720H120Zm80-80h560v-400H200v400Z"/>
    </Icon>
  );
};

IconMaterialCalendarMonthFilled.displayName = 'OnesyIconMaterialCalendarMonthFilled';

export default IconMaterialCalendarMonthFilled;
