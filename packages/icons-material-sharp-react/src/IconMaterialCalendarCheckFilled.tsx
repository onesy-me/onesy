import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalendarCheckFilled = (props: IIcon) => {

  return (
    <Icon
      name='CalendarCheckFilled'

      short_name='CalendarCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-720h120v-80h80v80h320v-80h80v80h120v335l-80 80v-175H200v400h248l80 80H120Zm542 20L520-202l56-56 85 85 170-170 56 57L662-60Z"/>
    </Icon>
  );
};

IconMaterialCalendarCheckFilled.displayName = 'OnesyIconMaterialCalendarCheckFilled';

export default IconMaterialCalendarCheckFilled;
