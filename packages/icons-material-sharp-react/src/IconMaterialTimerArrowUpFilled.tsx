import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimerArrowUpFilled = (props: IIcon) => {

  return (
    <Icon
      name='TimerArrowUpFilled'

      short_name='TimerArrowUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-160q-125 0-212.5-87.5T40-460q0-125 87.5-212.5T340-760q52 0 98 16.5t84 45.5l42-42 56 56-42 42q29 38 45.5 84.5T640-460q0 125-87.5 212.5T340-160Zm400 0v-488l-44 44-56-56 140-140 140 140-57 56-43-43v487h-80ZM240-800v-80h200v80H240Zm60 380h80v-200h-80v200Z"/>
    </Icon>
  );
};

IconMaterialTimerArrowUpFilled.displayName = 'OnesyIconMaterialTimerArrowUpFilled';

export default IconMaterialTimerArrowUpFilled;
