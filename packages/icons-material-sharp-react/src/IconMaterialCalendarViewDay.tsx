import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarViewDay = (props: IIcon) => {

  return (
    <Icon
      name='CalendarViewDay'

      short_name='CalendarViewDay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h720v80H120Zm0-160v-400h720v400H120Zm80-80h560v-240H200v240Zm-80-400v-80h720v80H120Zm80 400v-240 240Z"/>
    </Icon>
  );
};

IconMaterialCalendarViewDay.displayName = 'OnesyIconMaterialCalendarViewDay';

export default IconMaterialCalendarViewDay;
