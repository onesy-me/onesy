import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDifferenceFilled = (props: IIcon) => {

  return (
    <Icon
      name='DifferenceFilled'

      short_name='Difference'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-520h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm-80 160h240v-80H420v80ZM240-200v-720h360l240 240v480H240ZM80-40v-640h80v560h440v80H80Z"/>
    </Icon>
  );
};

IconMaterialDifferenceFilled.displayName = 'OnesyIconMaterialDifferenceFilled';

export default IconMaterialDifferenceFilled;
