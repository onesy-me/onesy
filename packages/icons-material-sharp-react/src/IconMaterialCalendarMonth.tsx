import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarMonth = (props: IIcon) => {

  return (
    <Icon
      name='CalendarMonth'

      short_name='CalendarMonth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-400v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm320 0v-80h80v80h-80ZM440-240v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm320 0v-80h80v80h-80ZM120-80v-720h120v-80h80v80h320v-80h80v80h120v720H120Zm80-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>
    </Icon>
  );
};

IconMaterialCalendarMonth.displayName = 'OnesyIconMaterialCalendarMonth';

export default IconMaterialCalendarMonth;
