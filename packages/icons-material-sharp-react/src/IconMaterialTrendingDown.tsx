import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrendingDown = (props: IIcon) => {

  return (
    <Icon
      name='TrendingDown'

      short_name='TrendingDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-240v-80h104L536-526 376-366 80-664l56-56 240 240 160-160 264 264v-104h80v240H640Z"/>
    </Icon>
  );
};

IconMaterialTrendingDown.displayName = 'OnesyIconMaterialTrendingDown';

export default IconMaterialTrendingDown;
