import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimerArrowDownFilled = (props: IIcon) => {

  return (
    <Icon
      name='TimerArrowDownFilled'

      short_name='TimerArrowDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-160q-125 0-212.5-87.5T40-460q0-125 87.5-212.5T340-760q52 0 98 16.5t84 45.5l42-42 56 56-42 42q29 38 45.5 84.5T640-460q0 125-87.5 212.5T340-160Zm440 0L640-300l56-56 44 44v-488h80v487l43-43 57 56-140 140ZM240-800v-80h200v80H240Zm60 380h80v-200h-80v200Z"/>
    </Icon>
  );
};

IconMaterialTimerArrowDownFilled.displayName = 'OnesyIconMaterialTimerArrowDownFilled';

export default IconMaterialTimerArrowDownFilled;
